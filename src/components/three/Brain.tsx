"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
  ConeGeometry,
  EdgesGeometry,
  Euler,
  Group,
  IcosahedronGeometry,
  InstancedMesh,
  LineBasicMaterial,
  LineSegments,
  Matrix4,
  Mesh,
  MeshBasicMaterial,
  Points,
  PointsMaterial,
  PointLight,
  Quaternion,
  SphereGeometry,
  TorusGeometry,
  Vector3,
} from "three";
import type { MotionValue } from "framer-motion";
import { beamsOn, brainOn, machinesOn } from "@/components/story/timeline";
import { AMR_COUNT, BRAIN_POS, PALETTE, PEOPLE, WORKER_COUNT, hash, live } from "./world";
import { LITE } from "./quality";
import { glow } from "./glow";

/** Beams go to everyone on the floor except the supervisor, who oversees the
    brain rather than taking tasks from it. */
const STAFF = Array.from({ length: WORKER_COUNT }, (_, i) => i).filter((i) => i !== PEOPLE.supervisor);
const FLOOR_STAFF = STAFF.length;

const BEAMS = FLOOR_STAFF + AMR_COUNT;
const PULSES_PER_BEAM = 2;

const _m = new Matrix4();
const _q = new Quaternion();
const _p = new Vector3();
const _s = new Vector3();
const _e = new Euler();

/** easeOutBack — the brain "arrives" with a small overshoot. */
const pop = (x: number) => {
  const c = 1.6;
  return x <= 0 ? 0 : 1 + (c + 1) * Math.pow(x - 1, 3) + c * Math.pow(x - 1, 2);
};

/**
 * The brain of the warehouse: a glowing core over the floor that sends a task
 * down a beam to every person and machine. It appears in the Intelligence
 * chapter and lifts away before the Network chapter.
 */
export default function Brain({ beat, reduced }: { beat: MotionValue<number>; reduced: boolean }) {
  const root = useRef<Group>(null);
  const shell = useRef<Mesh>(null);
  const cage = useRef<LineSegments>(null);
  const ringA = useRef<Mesh>(null);
  const ringB = useRef<Mesh>(null);
  const dust = useRef<Points>(null);
  const light = useRef<PointLight>(null);
  const cone = useRef<Mesh>(null);
  const pulses = useRef<InstancedMesh>(null);

  const parts = useMemo(() => {
    const positions = new Float32Array(BEAMS * 6);
    const beamGeo = new BufferGeometry();
    beamGeo.setAttribute("position", new BufferAttribute(positions, 3));
    const beamMat = new LineBasicMaterial({
      color: glow(PALETTE.cyan, 2.2),
      transparent: true,
      opacity: 0,
      blending: AdditiveBlending,
      depthWrite: false,
      toneMapped: false,
    });
    const beams = new LineSegments(beamGeo, beamMat);
    beams.frustumCulled = false;

    const dustPos = new Float32Array(260 * 3);
    for (let i = 0; i < 260; i++) {
      const r = 2.4 + hash(i) * 3.2;
      const th = hash(i + 500) * Math.PI * 2;
      const ph = Math.acos(2 * hash(i + 900) - 1);
      dustPos.set([r * Math.sin(ph) * Math.cos(th), r * Math.cos(ph), r * Math.sin(ph) * Math.sin(th)], i * 3);
    }
    const dustGeo = new BufferGeometry();
    dustGeo.setAttribute("position", new BufferAttribute(dustPos, 3));

    return {
      positions,
      beams,
      beamMat,
      dustGeo,
      dustMat: new PointsMaterial({ color: glow(PALETTE.cyan, 2), size: 0.09, transparent: true, opacity: 0.8, depthWrite: false, toneMapped: false }),
      core: new MeshBasicMaterial({ color: glow(PALETTE.cyan, 4), toneMapped: false }),
      shellMat: new MeshBasicMaterial({ color: glow(PALETTE.cyan, 1.2), wireframe: true, transparent: true, opacity: 0.5, toneMapped: false }),
      cageGeo: new EdgesGeometry(new IcosahedronGeometry(3.7, 0)),
      cageMat: new LineBasicMaterial({ color: glow(PALETTE.sky, 1.1), transparent: true, opacity: 0.45, toneMapped: false }),
      ringMat: new MeshBasicMaterial({ color: glow(PALETTE.cyan, 2.4), toneMapped: false }),
      coneMat: new MeshBasicMaterial({
        color: PALETTE.cyan,
        transparent: true,
        opacity: 0,
        blending: AdditiveBlending,
        depthWrite: false,
      }),
      pulseMat: new MeshBasicMaterial({ color: glow("#c9fbff", 5), toneMapped: false }),
      pulseGeo: new SphereGeometry(0.13, 10, 8),
      ringGeoA: new TorusGeometry(3.15, 0.028, 8, 120),
      ringGeoB: new TorusGeometry(2.85, 0.022, 8, 120),
      coneGeo: new ConeGeometry(15, 15, 48, 1, true),
    };
  }, []);

  useFrame((state) => {
    const b = beat.get();
    const on = brainOn(b);
    const beams = beamsOn(b);
    const machines = machinesOn(b);
    const t = reduced ? 3 : state.clock.elapsedTime;
    const [bx, by, bz] = BRAIN_POS;

    const g = root.current;
    if (g) {
      g.visible = on > 0.002;
      // rises into place, and lifts away again before the map
      g.position.set(bx, by + (1 - on) * 6, bz);
      g.scale.setScalar(Math.max(0.0001, pop(on)));
    }
    if (shell.current) shell.current.rotation.set(t * 0.13, t * 0.25, 0);
    if (cage.current) cage.current.rotation.set(-t * 0.07, -t * 0.12, t * 0.05);
    if (ringA.current) ringA.current.rotation.set(Math.PI / 2 + Math.sin(t * 0.4) * 0.3, t * 0.5, 0);
    if (ringB.current) ringB.current.rotation.set(Math.PI / 3, -t * 0.35, Math.PI / 5);
    if (dust.current) dust.current.rotation.y = t * 0.06;
    parts.core.color.set(PALETTE.cyan).multiplyScalar(3.4 + Math.sin(t * 2.2) * 0.9);
    if (light.current) {
      light.current.intensity = on * 900;
      light.current.position.set(bx, by + (1 - on) * 6, bz);
    }
    parts.coneMat.opacity = on * 0.05;
    if (cone.current) cone.current.visible = on > 0.002;

    /* beams: brain → every head and every AMR */
    const pos = parts.positions;
    for (let j = 0; j < BEAMS; j++) {
      const src = j < FLOOR_STAFF ? live.heads : live.amrs;
      const k = (j < FLOOR_STAFF ? STAFF[j] : j - FLOOR_STAFF) * 3;
      pos[j * 6] = bx;
      pos[j * 6 + 1] = by;
      pos[j * 6 + 2] = bz;
      // AMR beams only once the machines are on the floor
      const reach = j < FLOOR_STAFF ? 1 : machines;
      pos[j * 6 + 3] = bx + (src[k] - bx) * reach;
      pos[j * 6 + 4] = by + (src[k + 1] - by) * reach;
      pos[j * 6 + 5] = bz + (src[k + 2] - bz) * reach;
    }
    parts.beams.geometry.attributes.position.needsUpdate = true;
    parts.beamMat.opacity = beams * 0.42;
    parts.beams.visible = beams > 0.002;

    /* task pulses travel down each beam */
    const pm = pulses.current;
    if (pm) {
      pm.visible = beams > 0.002;
      for (let j = 0; j < BEAMS; j++) {
        for (let n = 0; n < PULSES_PER_BEAM; n++) {
          const i = j * PULSES_PER_BEAM + n;
          const u = (t * 0.42 + hash(i + 77) + n / PULSES_PER_BEAM) % 1;
          const x0 = pos[j * 6], y0 = pos[j * 6 + 1], z0 = pos[j * 6 + 2];
          const x1 = pos[j * 6 + 3], y1 = pos[j * 6 + 4], z1 = pos[j * 6 + 5];
          const sc = beams * Math.sin(Math.PI * Math.min(1, u * 1.05));
          _q.setFromEuler(_e.set(0, 0, 0));
          _m.compose(_p.set(x0 + (x1 - x0) * u, y0 + (y1 - y0) * u, z0 + (z1 - z0) * u), _q, _s.setScalar(Math.max(0.0001, sc)));
          pm.setMatrixAt(i, _m);
        }
      }
      pm.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <>
      <group ref={root} position={BRAIN_POS}>
        <mesh material={parts.core}>
          <sphereGeometry args={[1.05, 32, 24]} />
        </mesh>
        <mesh ref={shell} material={parts.shellMat}>
          <icosahedronGeometry args={[2.5, 1]} />
        </mesh>
        <lineSegments ref={cage} geometry={parts.cageGeo} material={parts.cageMat} />
        <mesh ref={ringA} material={parts.ringMat} geometry={parts.ringGeoA} />
        <mesh ref={ringB} material={parts.ringMat} geometry={parts.ringGeoB} />
        <points ref={dust} geometry={parts.dustGeo} material={parts.dustMat} />
        {/* a faint cone of attention down onto the floor */}
        <mesh ref={cone} position={[0, -7.5, 0]} material={parts.coneMat} geometry={parts.coneGeo} />
      </group>
      {/* Outside the root group, which hides between chapters: a hidden light
          drops out of the light count, and a new count means every material in
          view recompiles its shader (a freeze on phones, first when the red
          routes appear). So it is always there, dark when the brain is off.
          Phones skip it: the floor glow isn't worth a fourth light on every
          pixel. */}
      {LITE ? null : <pointLight ref={light} color={PALETTE.cyan} intensity={0} distance={60} decay={1.6} />}
      <primitive object={parts.beams} />
      <instancedMesh ref={pulses} args={[parts.pulseGeo, parts.pulseMat, BEAMS * PULSES_PER_BEAM]} frustumCulled={false} />
    </>
  );
}
