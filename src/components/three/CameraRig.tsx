"use client";

import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Fog, type PerspectiveCamera } from "three";
import type { MotionValue } from "framer-motion";
import { smoothstep } from "@/components/story/timeline";
import { CITY, MAP_CENTER, MAP_SIZE } from "./world";

const DEG = Math.PI / 180;

/**
 * One camera pose per beat: orbit `az`/`el` (degrees) around a target at a
 * distance. "map" distances are fitted to the dotted map of Thailand.
 */
type Key = { target: [number, number, number]; az: number; el: number; dist: number | "map"; zoom?: number };

const CM = CITY.chiangMai;

const KEYS: Key[] = [
  /*  0 hero          */ { target: [-1, 1, -2], az: 34, el: 33, dist: 100 },
  /*  1 one per trip  */ { target: [-9.5, 0, -9.6], az: 0, el: 72, dist: 60 },
  /*  2 the wave      */ { target: [-9.5, 0, -9.2], az: -6, el: 68, dist: 58 },
  /*  3 pack, on video*/ { target: [8, 1.1, 1.5], az: 26, el: 38, dist: 13.5 },
  /*  4 the gate      */ { target: [21.5, 1, 6.1], az: -12, el: 32, dist: 23 },
  /*  5 4k → 20k      */ { target: [0, 0, -1], az: 0, el: 62, dist: 86 },
  /*  6 people        */ { target: [-3, 1.2, -1], az: 18, el: 32, dist: 48 },
  /*  7 the brain     */ { target: [0, 6, -3], az: 38, el: 22, dist: 58 },
  /*  8 in control    */ { target: [1, 2.5, 5.8], az: -24, el: 26, dist: 40 },
  /*  9 far away      */ { target: [CM[0] * 0.5, 0, CM[1] * 0.5], az: -6, el: 68, dist: "map", zoom: 0.58 },
  /* 10 25,000 shops  */ { target: [MAP_CENTER[0], 0, MAP_CENTER[1]], az: 0, el: 76, dist: "map" },
  /* 11 a shop nearby */ { target: [MAP_CENTER[0], 0, MAP_CENTER[1] * 0.8], az: 10, el: 66, dist: "map", zoom: 0.94 },
];

const FOV = 35;

type Pose = { tx: number; ty: number; tz: number; az: number; el: number; ld: number; sx: number; sy: number };

/** Where the text sits decides where the scene goes: right of the copy on wide
    screens, above the glass card on narrow ones. */
function frame(aspect: number, index: number) {
  if (aspect >= 1.1) {
    return { sx: index === 0 ? 0.27 : 0.22, sy: 0, availW: 0.56, availH: 0.86, mul: 1 };
  }
  return { sx: 0, sy: 0.22, availW: 0.94, availH: 0.48, mul: Math.pow(1.3 / aspect, 0.9) };
}

function fitMap(aspect: number, el: number, availW: number, availH: number) {
  const vf = FOV * DEG;
  const hf = 2 * Math.atan(Math.tan(vf / 2) * aspect);
  const dH = (MAP_SIZE.h * Math.sin(el)) / 2 / Math.tan(vf / 2) / availH;
  const dW = MAP_SIZE.w / 2 / Math.tan(hf / 2) / availW;
  return Math.max(dH, dW) * 1.06;
}

function keyPose(i: number, aspect: number): Pose {
  const k = KEYS[Math.max(0, Math.min(KEYS.length - 1, i))];
  const f = frame(aspect, i);
  const el = k.el * DEG;
  const dist = k.dist === "map" ? fitMap(aspect, el, f.availW, f.availH) * (k.zoom ?? 1) : k.dist * f.mul;
  return { tx: k.target[0], ty: k.target[1], tz: k.target[2], az: k.az * DEG, el, ld: Math.log(dist), sx: f.sx, sy: f.sy };
}

function poseAt(beat: number, aspect: number): Pose {
  const i = Math.floor(beat);
  const a = keyPose(i, aspect);
  const b = keyPose(i + 1, aspect);
  const e = smoothstep(0, 1, beat - i);
  const mix = (x: number, y: number) => x + (y - x) * e;
  return {
    tx: mix(a.tx, b.tx),
    ty: mix(a.ty, b.ty),
    tz: mix(a.tz, b.tz),
    az: mix(a.az, b.az),
    el: mix(a.el, b.el),
    ld: mix(a.ld, b.ld), // log space, so the big pull-back to the map doesn't rush
    sx: mix(a.sx, b.sx),
    sy: mix(a.sy, b.sy),
  };
}

export default function CameraRig({ beat, reduced }: { beat: MotionValue<number>; reduced: boolean }) {
  const camera = useThree((s) => s.camera) as PerspectiveCamera;
  const size = useThree((s) => s.size);
  const scene = useThree((s) => s.scene);
  const current = useRef<Pose | null>(null);
  const pointer = useRef({ x: 0, y: 0 });

  // The text panels sit over the canvas, so follow the pointer on the window.
  useEffect(() => {
    if (reduced) return;
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduced]);

  useFrame((state, delta) => {
    const raw = beat.get();
    // Reduced motion: hold each beat's framing and cut between them.
    const want = poseAt(reduced ? Math.round(raw) : raw, size.width / size.height);

    if (!reduced) {
      const t = state.clock.elapsedTime;
      want.az += Math.sin(t * 0.11) * 3 * DEG + pointer.current.x * 2.5 * DEG;
      want.el += -pointer.current.y * 1.5 * DEG;
    }

    let c = current.current;
    if (!c || reduced) {
      c = current.current = { ...want };
    } else {
      const k = 1 - Math.exp(-Math.min(delta, 0.1) * 3.2);
      for (const key of Object.keys(want) as (keyof Pose)[]) c[key] += (want[key] - c[key]) * k;
    }

    const d = Math.exp(c.ld);
    camera.position.set(
      c.tx + d * Math.cos(c.el) * Math.sin(c.az),
      c.ty + d * Math.sin(c.el),
      c.tz + d * Math.cos(c.el) * Math.cos(c.az),
    );
    camera.lookAt(c.tx, c.ty, c.tz);
    camera.fov = FOV;
    camera.near = Math.max(0.3, d * 0.02);
    camera.far = d * 40 + 400;
    // Lens shift: move the picture off-centre without changing the perspective.
    camera.setViewOffset(size.width, size.height, -c.sx * size.width, c.sy * size.height, size.width, size.height);
    camera.updateProjectionMatrix();

    if (scene.fog instanceof Fog) {
      scene.fog.near = d * 0.75;
      scene.fog.far = d * 3.2 + 40;
    }
  });

  return null;
}
