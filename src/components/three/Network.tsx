"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import {
  AdditiveBlending,
  Color,
  CylinderGeometry,
  DoubleSide,
  Group,
  InstancedMesh,
  Matrix4,
  MeshBasicMaterial,
  QuadraticBezierCurve3,
  Quaternion,
  RingGeometry,
  SphereGeometry,
  Vector3,
} from "three";
import type { Line2 } from "three-stdlib";
import type { MotionValue } from "framer-motion";
import { localArcs, longArc, mapBase, mapWave, mfcOn, smoothstep } from "@/components/story/timeline";
import { CITY, LOCAL_HOPS, MAP_POINTS, PALETTE, hash, mapToWorld } from "./world";
import { glow } from "./glow";

const _m = new Matrix4();
const _q = new Quaternion();
const _p = new Vector3();
const _s = new Vector3();

type Arc = { curve: QuadraticBezierCurve3; points: Vector3[] };

function arc(from: [number, number], to: [number, number], lift: number, base: number): Arc {
  const start = new Vector3(from[0], base, from[1]);
  const end = new Vector3(to[0], 3, to[1]);
  const len = Math.hypot(to[0] - from[0], to[1] - from[1]);
  const mid = new Vector3((from[0] + to[0]) / 2, 12 + len * lift, (from[1] + to[1]) / 2);
  const curve = new QuadraticBezierCurve3(start, mid, end);
  return { curve, points: curve.getPoints(64) };
}

/**
 * Thailand as a field of parcel shops around the warehouse (which sits on
 * Bangkok). First the order we followed makes the long trip to Chiang Mai;
 * then shops light up outward from Bangkok, some become micro-fulfillment
 * centres, and orders are served by short hops from a shop nearby.
 */
export default function Network({ beat, reduced }: { beat: MotionValue<number>; reduced: boolean }) {
  const root = useRef<Group>(null);
  const shops = useRef<InstancedMesh>(null);
  const pulses = useRef<InstancedMesh>(null);
  const pins = useRef<InstancedMesh>(null);
  const hub = useRef<Group>(null);
  const beacon = useRef<InstancedMesh>(null);
  const waves = useRef<InstancedMesh>(null);
  const longRef = useRef<Line2>(null);
  const hopRefs = useRef<(Line2 | null)[]>([]);

  const data = useMemo(() => {
    const hopKeys = new Set(LOCAL_HOPS.map((h) => `${h.from[0].toFixed(2)},${h.from[1].toFixed(2)}`));
    const pts: { x: number; z: number; d: number; mfc: boolean; hop: boolean; h: number }[] = [];
    let maxD = 0;
    MAP_POINTS.forEach(([gx, gy], i) => {
      const [x, z] = mapToWorld(gx, gy);
      // leave room for the Bangkok hub marker
      if (Math.hypot(x, z) < 11) return;
      const d = Math.hypot(x, z);
      maxD = Math.max(maxD, d);
      const hop = hopKeys.has(`${x.toFixed(2)},${z.toFixed(2)}`);
      pts.push({ x, z, d, hop, mfc: hop || hash(i * 3.1 + 5) < 0.09, h: hop ? 0 : hash(i * 7.7 + 1) });
    });
    pts.forEach((p) => (p.d /= maxD));

    const fromBangkok = arc([0, 0], CITY.chiangMai, 0.3, 5);
    const hops = LOCAL_HOPS.map((h) => arc(h.from, CITY[h.city], 0.9, 6));

    return {
      pts,
      fromBangkok,
      hops,
      geo: new CylinderGeometry(3.3, 3.3, 1, 6).translate(0, 0.5, 0),
      colors: new Float32Array(pts.length * 3),
      shopMat: new MeshBasicMaterial({ toneMapped: false }),
      dim: new Color("#13314d"),
      lit: glow(PALETTE.teal, 1.7),
      hot: glow("#ff5a10", 1.55),
      hopHot: glow("#ff7a2a", 2.4),
      pulseGeo: new SphereGeometry(3.6, 12, 10),
      pulseMat: new MeshBasicMaterial({ color: glow("#d6fbff", 4), toneMapped: false }),
      pinGeo: new CylinderGeometry(4.2, 4.2, 1, 24).translate(0, 0.5, 0),
      pinMat: new MeshBasicMaterial({ color: glow("#ffffff", 2.2), toneMapped: false }),
      hubMat: new MeshBasicMaterial({ color: glow(PALETTE.cyan, 1.6), toneMapped: false }),
      hubTopMat: new MeshBasicMaterial({ color: glow("#ffffff", 2.4), toneMapped: false }),
      hubRingMat: new MeshBasicMaterial({ color: glow(PALETTE.cyan, 2), toneMapped: false, side: DoubleSide }),
      beaconGeo: new CylinderGeometry(1.3, 1.3, 1, 24, 1, true).translate(0, 0.5, 0),
      beaconMat: new MeshBasicMaterial({
        color: glow(PALETTE.cyan, 2),
        transparent: true,
        opacity: 0,
        blending: AdditiveBlending,
        depthWrite: false,
        side: DoubleSide,
        toneMapped: false,
      }),
      waveGeo: new RingGeometry(0.993, 1, 160).rotateX(-Math.PI / 2),
      waveMat: new MeshBasicMaterial({
        color: glow(PALETTE.cyan, 1.6),
        transparent: true,
        opacity: 0,
        blending: AdditiveBlending,
        depthWrite: false,
        toneMapped: false,
      }),
    };
  }, []);

  const tmp = useMemo(() => new Color(), []);

  useFrame((state) => {
    const b = beat.get();
    const base = mapBase(b);
    const wave = mapWave(b);
    const mfc = mfcOn(b);
    const far = longArc(b);
    const near = localArcs(b);
    const t = reduced ? 2 : state.clock.elapsedTime;

    if (root.current) root.current.visible = base > 0.002;
    if (base <= 0.002) return;

    /* shops */
    const sm = shops.current;
    if (sm) {
      const { pts, colors, dim, lit, hot, hopHot } = data;
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        const appear = smoothstep(p.d * 0.55, p.d * 0.55 + 0.45, base);
        const act = smoothstep(p.d * 0.85, p.d * 0.85 + 0.15, wave);
        const m = p.mfc ? smoothstep(p.h * 0.6, p.h * 0.6 + 0.4, mfc) : 0;
        const breathe = reduced ? 0 : Math.sin(t * 2.4 + i) * 0.9 * m;
        const height = 0.5 + act * 1.6 + m * (p.hop ? 12 : 7) + breathe;
        const r = appear * (1 + m * (p.hop ? 0.5 : 0.3));
        _m.compose(_p.set(p.x, 0, p.z), _q, _s.set(Math.max(0.0001, r), height, Math.max(0.0001, r)));
        sm.setMatrixAt(i, _m);
        tmp.copy(dim).lerp(lit, act).lerp(p.hop ? hopHot : hot, m);
        colors[i * 3] = tmp.r;
        colors[i * 3 + 1] = tmp.g;
        colors[i * 3 + 2] = tmp.b;
      }
      sm.instanceMatrix.needsUpdate = true;
      if (sm.instanceColor) sm.instanceColor.needsUpdate = true;
    }

    /* Bangkok: the hub the warehouse shrank into, a beacon, rings pulsing out */
    const h = hub.current;
    if (h) {
      const k = Math.max(0.0001, smoothstep(0.35, 0.9, base));
      h.scale.set(k, k, k);
      h.rotation.y = reduced ? 0 : t * 0.25;
    }
    data.beaconMat.opacity = base * 0.16;
    const bm = beacon.current;
    if (bm) {
      _m.compose(_p.set(0, 0, 0), _q, _s.set(1, 240 * base, 1));
      bm.setMatrixAt(0, _m);
      bm.instanceMatrix.needsUpdate = true;
    }
    const wm = waves.current;
    if (wm) {
      for (let k = 0; k < 3; k++) {
        const u = reduced ? 0.4 + k * 0.2 : (t * 0.12 + k / 3) % 1;
        const r = 40 + u * 520;
        _m.compose(_p.set(0, 0.5, 0), _q, _s.set(r, 1, r));
        wm.setMatrixAt(k, _m);
      }
      wm.instanceMatrix.needsUpdate = true;
      data.waveMat.opacity = base * (1 - wave * 0.5) * 0.28;
    }

    /* the long way (Bangkok → Chiang Mai), then short hops from shops nearby */
    const longLine = longRef.current;
    const farOpacity = far * (1 - 0.7 * near);
    if (longLine) {
      longLine.visible = farOpacity > 0.01;
      longLine.material.opacity = farOpacity * 0.9;
      if (!reduced) longLine.material.dashOffset = -t * 18;
    }
    hopRefs.current.forEach((line) => {
      if (!line) return;
      line.visible = near > 0.01;
      line.material.opacity = near;
      if (!reduced) line.material.dashOffset = -t * 6;
    });

    const pm = pulses.current;
    if (pm) {
      const u0 = reduced ? 0.7 : (t * 0.16) % 1;
      data.fromBangkok.curve.getPoint(u0, _p);
      _m.compose(_p, _q, _s.setScalar(Math.max(0.0001, farOpacity)));
      pm.setMatrixAt(0, _m);
      data.hops.forEach((h, i) => {
        const u = reduced ? 0.6 : (t * 0.45 + hash(i + 3)) % 1;
        h.curve.getPoint(u, _p);
        _m.compose(_p, _q, _s.setScalar(Math.max(0.0001, near * 0.8)));
        pm.setMatrixAt(i + 1, _m);
      });
      pm.instanceMatrix.needsUpdate = true;
    }

    /* customers: Chiang Mai from the start of the chapter, the others with the hops */
    const pn = pins.current;
    if (pn) {
      const cm = CITY.chiangMai;
      _m.compose(_p.set(cm[0], 0, cm[1]), _q, _s.set(Math.max(0.0001, far), 6, Math.max(0.0001, far)));
      pn.setMatrixAt(0, _m);
      LOCAL_HOPS.slice(1).forEach((h, i) => {
        const [x, z] = CITY[h.city];
        _m.compose(_p.set(x, 0, z), _q, _s.set(Math.max(0.0001, near), 6, Math.max(0.0001, near)));
        pn.setMatrixAt(i + 1, _m);
      });
      pn.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <group ref={root} visible={false}>
      <instancedMesh ref={shops} args={[data.geo, data.shopMat, data.pts.length]} frustumCulled={false}>
        <instancedBufferAttribute attach="instanceColor" args={[data.colors, 3]} />
      </instancedMesh>
      <group ref={hub}>
        <mesh position-y={3} material={data.hubMat}>
          <cylinderGeometry args={[8, 8, 6, 6]} />
        </mesh>
        <mesh position-y={6.3} material={data.hubTopMat}>
          <cylinderGeometry args={[5.2, 5.2, 0.6, 6]} />
        </mesh>
        <mesh position-y={0.4} rotation-x={-Math.PI / 2} material={data.hubRingMat}>
          <ringGeometry args={[10.5, 12, 6]} />
        </mesh>
      </group>
      <instancedMesh ref={beacon} args={[data.beaconGeo, data.beaconMat, 1]} frustumCulled={false} />
      <instancedMesh ref={waves} args={[data.waveGeo, data.waveMat, 3]} frustumCulled={false} />
      <instancedMesh ref={pins} args={[data.pinGeo, data.pinMat, LOCAL_HOPS.length]} frustumCulled={false} />
      <Line
        ref={longRef}
        points={data.fromBangkok.points}
        color={glow(PALETTE.cyan, 2.4)}
        lineWidth={2.2}
        transparent
        opacity={0}
        dashed
        dashSize={18}
        gapSize={10}
        toneMapped={false}
      />
      {data.hops.map((h, i) => (
        <Line
          key={i}
          ref={(el) => {
            hopRefs.current[i] = el as Line2 | null;
          }}
          points={h.points}
          color={glow("#ffb27a", 2.6)}
          lineWidth={2.6}
          transparent
          opacity={0}
          dashed
          dashSize={6}
          gapSize={4}
          toneMapped={false}
        />
      ))}
      <instancedMesh ref={pulses} args={[data.pulseGeo, data.pulseMat, 1 + LOCAL_HOPS.length]} frustumCulled={false} />
    </group>
  );
}
