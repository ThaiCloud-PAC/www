"use client";

import { useLayoutEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  BoxGeometry,
  Color,
  CylinderGeometry,
  Euler,
  Group,
  InstancedMesh,
  Matrix4,
  MeshBasicMaterial,
  MeshStandardMaterial,
  Quaternion,
  SphereGeometry,
  Vector3,
  type BufferGeometry,
  type Material,
} from "three";
import {
  AISLES,
  AISLE_LEFT_X,
  AISLE_RIGHT_X,
  DESK,
  FLOOR,
  INBOUND,
  OFFICE,
  RECEIVING,
  RETURNS,
  STAGING,
  hash,
} from "./world";
import { glow } from "./glow";

/**
 * The rest of a working floor around the pick → pack → dispatch line: the
 * inbound dock (trucks, a forklift, staged pallets, receiving), returns, the
 * glass command centre, carrier lanes with roll cages, packing supplies,
 * zone signs and a few plants. Mostly static; only the forklift moves.
 */

const UNIT = new BoxGeometry(1, 1, 1);
const _q = new Quaternion();
const _e = new Euler();

function m4(x: number, y: number, z: number, sx: number, sy: number, sz: number, ry = 0) {
  _q.setFromEuler(_e.set(0, ry, 0));
  return new Matrix4().compose(new Vector3(x, y, z), _q.clone(), new Vector3(sx, sy, sz));
}

function Static({ matrices, material, geometry = UNIT, colors }: { matrices: Matrix4[]; material: Material; geometry?: BufferGeometry; colors?: Color[] }) {
  const ref = useRef<InstancedMesh>(null);
  useLayoutEffect(() => {
    const mesh = ref.current;
    if (!mesh) return;
    matrices.forEach((m, i) => mesh.setMatrixAt(i, m));
    colors?.forEach((c, i) => mesh.setColorAt(i, c));
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    mesh.computeBoundingSphere();
  }, [matrices, colors]);
  return <instancedMesh ref={ref} args={[geometry, material, matrices.length]} />;
}

/** A pallet: wooden base, a carton stack, a shrink-wrap sheen. */
function pallet(out: { wood: Matrix4[]; cartons: Matrix4[]; cartonColors: Color[]; wrap: Matrix4[] }, x: number, z: number, h: number, seed: number) {
  const cardboard = ["#c79a68", "#b98a5a", "#d2a877"];
  out.wood.push(m4(x, 0.07, z, 1.2, 0.14, 1.0));
  out.cartons.push(m4(x, 0.14 + h / 2, z, 1.08, h, 0.9));
  out.cartonColors.push(new Color(cardboard[Math.floor(hash(seed) * cardboard.length)]));
  out.wrap.push(m4(x, 0.14 + h / 2 + 0.01, z, 1.12, h + 0.04, 0.94));
}

export default function FloorZones({ reduced }: { reduced: boolean }) {
  const layout = useMemo(() => {
    const p = { wood: [] as Matrix4[], cartons: [] as Matrix4[], cartonColors: [] as Color[], wrap: [] as Matrix4[] };
    // inbound: pallets staged in a grid, waiting to be received
    let seed = 3;
    for (const x of [-24.6, -22.4, -20.2]) {
      for (const z of [12.6, 14.6, 16.4]) {
        if (hash(seed++) < 0.2) continue;
        pallet(p, x, z, 0.7 + hash(seed++) * 0.7, seed++);
      }
    }
    // outbound: roll cages of sorted parcels, one lane per carrier
    const laneW = (STAGING.x1 - STAGING.x0) / 3;
    const cagePosts: Matrix4[] = [];
    const parcels: Matrix4[] = [];
    const parcelColors: Color[] = [];
    const lanePaint: Matrix4[] = [];
    const laneColors: Color[] = [];
    STAGING.colors.forEach((c, lane) => {
      const cx = STAGING.x0 + laneW * (lane + 0.5);
      for (const dx of [-laneW / 2 + 0.08, laneW / 2 - 0.08]) {
        lanePaint.push(m4(cx + dx, 0.013, (STAGING.z0 + STAGING.z1) / 2, 0.1, 0.01, STAGING.z1 - STAGING.z0));
        laneColors.push(new Color(c).multiplyScalar(0.9));
      }
      lanePaint.push(m4(cx, 0.013, STAGING.z0 + 0.05, laneW - 0.16, 0.01, 0.1));
      laneColors.push(new Color(c).multiplyScalar(0.9));
      for (const z of [10.2, 12.6, 15.0]) {
        if (hash(lane * 7 + z) < 0.15) continue;
        const w = 1.0;
        const d = 0.8;
        const h = 1.55;
        for (const [px, pz] of [[-w / 2, -d / 2], [w / 2, -d / 2], [-w / 2, d / 2], [w / 2, d / 2]]) {
          cagePosts.push(m4(cx + px, h / 2, z + pz, 0.04, h, 0.04));
        }
        for (const y of [0.12, 0.8, h]) {
          cagePosts.push(m4(cx, y, z - d / 2, w, 0.03, 0.03));
          cagePosts.push(m4(cx, y, z + d / 2, w, 0.03, 0.03));
          cagePosts.push(m4(cx - w / 2, y, z, 0.03, 0.03, d));
          cagePosts.push(m4(cx + w / 2, y, z, 0.03, 0.03, d));
        }
        const fill = 2 + Math.floor(hash(lane + z * 3) * 4);
        for (let k = 0; k < fill; k++) {
          const px = cx + ((k % 2) - 0.5) * 0.44;
          const pz = z + (Math.floor(k / 2) % 2 === 0 ? -0.18 : 0.18);
          const py = 0.3 + Math.floor(k / 4) * 0.36;
          parcels.push(m4(px, py, pz, 0.42, 0.32, 0.34, hash(k + z) * 0.3));
          parcelColors.push(new Color(["#c8955f", "#b3834f", "#d6ac78"][k % 3]));
        }
      }
    });

    // returns: a bench and tubs of returned items
    const benches = [m4(RETURNS.x, 0.9, RETURNS.z, 1.8, 0.06, 0.9), m4(RECEIVING.x, 0.9, RECEIVING.z, 1.8, 0.06, 0.9)];
    const legs: Matrix4[] = [];
    for (const b of [RETURNS, RECEIVING]) {
      for (const [lx, lz] of [[-0.82, -0.38], [0.82, -0.38], [-0.82, 0.38], [0.82, 0.38]]) {
        legs.push(m4(b.x + lx, 0.45, b.z + lz, 0.05, 0.9, 0.05));
      }
    }
    const tubs = [
      m4(RETURNS.x - 0.45, 1.06, RETURNS.z - 0.1, 0.6, 0.26, 0.45),
      m4(RETURNS.x + 0.45, 1.06, RETURNS.z - 0.1, 0.6, 0.26, 0.45),
      m4(RETURNS.x - 1.6, 0.2, RETURNS.z + 0.2, 0.7, 0.4, 0.5),
      m4(RETURNS.x - 1.6, 0.2, RETURNS.z - 0.5, 0.7, 0.4, 0.5),
    ];
    const screens = [
      m4(RETURNS.x + 0.55, 1.28, RETURNS.z - 0.3, 0.55, 0.34, 0.03),
      m4(RECEIVING.x + 0.55, 1.28, RECEIVING.z - 0.3, 0.55, 0.34, 0.03),
    ];

    // packing supplies near the start of the pack line: flat cartons, tape
    const supplies = [
      m4(-22.6, 0.6, 2.3, 1.8, 0.04, 0.6),
      m4(-22.6, 1.25, 2.3, 1.8, 0.04, 0.6),
      ...[-0.6, 0.6].map((dx) => m4(-22.6 + dx * 1.45, 0.75, 2.3, 0.04, 1.5, 0.6)),
    ];
    const flats = [0, 1, 2, 3, 4].map((k) => m4(-23.2 + k * 0.32, 0.72, 2.3, 0.28, 0.2, 0.5));
    const flatsTop = [0, 1, 2].map((k) => m4(-22.9 + k * 0.45, 1.36, 2.3, 0.4, 0.18, 0.5));

    // the command centre: a glass room
    const ox = (OFFICE.x0 + OFFICE.x1) / 2;
    const oz = (OFFICE.z0 + OFFICE.z1) / 2;
    const ow = OFFICE.x1 - OFFICE.x0;
    const od = OFFICE.z1 - OFFICE.z0;
    const H = 2.6;
    const glass = [
      m4(ox, H / 2, OFFICE.z0, ow, H, 0.05),
      m4(ox, H / 2, OFFICE.z1, ow, H, 0.05),
      m4(OFFICE.x0, H / 2, oz, 0.05, H, od),
      m4(OFFICE.x1, H / 2, oz - 1.0, 0.05, H, od - 2.0), // a doorway at the front corner
    ];
    const mullions: Matrix4[] = [];
    for (let x = OFFICE.x0; x <= OFFICE.x1 + 0.01; x += ow / 4) {
      mullions.push(m4(x, H / 2, OFFICE.z0, 0.07, H, 0.07), m4(x, H / 2, OFFICE.z1, 0.07, H, 0.07));
    }
    for (let z = OFFICE.z0; z <= OFFICE.z1 + 0.01; z += od / 3) mullions.push(m4(OFFICE.x0, H / 2, z, 0.07, H, 0.07));
    mullions.push(m4(OFFICE.x1, H / 2, OFFICE.z0, 0.07, H, 0.07), m4(OFFICE.x1, H / 2, OFFICE.z1 - 2.0, 0.07, H, 0.07));
    mullions.push(m4(ox, H, OFFICE.z0, ow, 0.07, 0.07), m4(ox, H, OFFICE.z1, ow, 0.07, 0.07), m4(OFFICE.x0, H, oz, 0.07, 0.07, od));
    // a wall of dashboards facing the desk
    const wallScreens = [-2.6, 0, 2.6].map((dx) => m4(DESK.x + dx, 1.75, OFFICE.z0 + 0.12, 2.3, 1.15, 0.05));

    // plants, because people work here
    const plantSpots: [number, number][] = [
      [OFFICE.x0 + 0.5, OFFICE.z1 - 0.5],
      [OFFICE.x1 - 0.5, OFFICE.z0 + 0.5],
      [OFFICE.x0 - 0.6, OFFICE.z0 - 0.4],
      [STAGING.x1 + 0.7, STAGING.z1 - 0.2],
      [-26.8, 3.6],
    ];
    const pots = plantSpots.map(([x, z]) => m4(x, 0.25, z, 1, 1, 1));
    const leaves = plantSpots.flatMap(([x, z], i) => [
      m4(x, 0.85, z, 1, 1, 1),
      m4(x + 0.18, 1.1, z - 0.1, 0.7, 0.7, 0.7),
      m4(x - 0.15, 1.18, z + 0.12, 0.6 + hash(i) * 0.2, 0.6, 0.6),
    ]);

    // zone signs over both ends of every aisle
    const signs = AISLES.flatMap((a) => [AISLE_LEFT_X + 0.9, AISLE_RIGHT_X - 0.9].map((x) => m4(x, 4.9, a.z, 0.08, 1.0, 1.5)));
    const signColors = AISLES.flatMap((a) => [new Color(a.color), new Color(a.color)]);
    const signPosts = AISLES.flatMap((a) => [AISLE_LEFT_X + 0.9, AISLE_RIGHT_X - 0.9].map((x) => m4(x, 5.6, a.z, 0.03, 0.5, 0.03)));

    // floor zones: tinted areas with safety-yellow borders
    const tints = [
      m4((INBOUND.x0 + INBOUND.x1) / 2, 0.009, (INBOUND.z0 + INBOUND.z1) / 2, INBOUND.x1 - INBOUND.x0, 0.01, INBOUND.z1 - INBOUND.z0),
      m4(RETURNS.x, 0.009, RETURNS.z, 4.6, 0.01, 4.4),
      m4(ox, 0.009, oz, ow, 0.01, od),
      m4((STAGING.x0 + STAGING.x1) / 2, 0.009, (STAGING.z0 + STAGING.z1) / 2, STAGING.x1 - STAGING.x0, 0.01, STAGING.z1 - STAGING.z0),
    ];
    const tintColors = [new Color("#a9c3e0"), new Color("#c0b3e2"), new Color("#6f8bab"), new Color("#e6cfb4")];
    const border = (x0: number, x1: number, z0: number, z1: number) => [
      m4((x0 + x1) / 2, 0.014, z0, x1 - x0, 0.01, 0.1),
      m4((x0 + x1) / 2, 0.014, z1, x1 - x0, 0.01, 0.1),
      m4(x0, 0.014, (z0 + z1) / 2, 0.1, 0.01, z1 - z0),
      m4(x1, 0.014, (z0 + z1) / 2, 0.1, 0.01, z1 - z0),
    ];
    const borders = [
      ...border(INBOUND.x0, INBOUND.x1, INBOUND.z0, INBOUND.z1),
      ...border(RETURNS.x - 2.3, RETURNS.x + 2.3, RETURNS.z - 2.2, RETURNS.z + 2.2),
    ];
    // green pedestrian walkway across the front of the floor
    const walkway = [m4(-1, 0.012, 6.9, 50, 0.01, 0.9)];

    // dock doors along the left edge of the floor
    const doorFrames = INBOUND.doors.flatMap((z) => [
      m4(-FLOOR.w / 2 + 0.12, 1.9, z - 1.7, 0.12, 3.8, 0.16),
      m4(-FLOOR.w / 2 + 0.12, 1.9, z + 1.7, 0.12, 3.8, 0.16),
      m4(-FLOOR.w / 2 + 0.12, 3.8, z, 0.12, 0.16, 3.56),
    ]);
    const doorPanels = INBOUND.doors.map((z) => m4(-FLOOR.w / 2 + 0.06, 3.0, z, 0.06, 1.6, 3.3));

    return {
      p, cagePosts, parcels, parcelColors, lanePaint, laneColors, benches, legs, tubs, screens, supplies, flats, flatsTop,
      glass, mullions, wallScreens, pots, leaves, signs, signColors, signPosts, tints, tintColors, borders, walkway,
      doorFrames, doorPanels,
    };
  }, []);

  const mats = useMemo(
    () => ({
      wood: new MeshStandardMaterial({ color: "#b98a55", roughness: 0.8 }),
      carton: new MeshStandardMaterial({ color: "#ffffff", roughness: 0.85 }),
      wrap: new MeshStandardMaterial({ color: "#ffffff", roughness: 0.2, transparent: true, opacity: 0.22, depthWrite: false }),
      steel: new MeshStandardMaterial({ color: "#8d9aa8", metalness: 0.6, roughness: 0.35 }),
      paint: new MeshBasicMaterial({ color: "#ffffff" }),
      bench: new MeshStandardMaterial({ color: "#dfe6ee", roughness: 0.45 }),
      frame: new MeshStandardMaterial({ color: "#6b7b8c", metalness: 0.6, roughness: 0.4 }),
      tub: new MeshStandardMaterial({ color: "#3d7fd6", roughness: 0.5 }),
      screen: new MeshBasicMaterial({ color: glow("#4aa8f0", 1.4), toneMapped: false }),
      flat: new MeshStandardMaterial({ color: "#c9a26f", roughness: 0.9 }),
      glass: new MeshStandardMaterial({ color: "#bfe6ff", roughness: 0.05, metalness: 0.1, transparent: true, opacity: 0.16, depthWrite: false }),
      mullion: new MeshStandardMaterial({ color: "#e9eef4", roughness: 0.4 }),
      dashboard: new MeshBasicMaterial({ color: glow("#5ec9d3", 1.15), toneMapped: false }),
      pot: new MeshStandardMaterial({ color: "#e8ddd0", roughness: 0.7 }),
      leaf: new MeshStandardMaterial({ color: "#3fae6a", roughness: 0.6 }),
      sign: new MeshBasicMaterial({ color: "#ffffff" }),
      // faint on the dark floor: a hint of each zone, not a bright rectangle
      tint: new MeshBasicMaterial({ color: "#ffffff", transparent: true, opacity: 0.08, depthWrite: false }),
      safety: new MeshBasicMaterial({ color: new Color("#f5c242").multiplyScalar(0.95) }),
      walkway: new MeshBasicMaterial({ color: new Color("#3fbf8f").multiplyScalar(0.7) }),
      doorFrame: new MeshStandardMaterial({ color: "#f5c242", roughness: 0.5 }),
      doorPanel: new MeshStandardMaterial({ color: "#9fb0c2", metalness: 0.4, roughness: 0.4 }),
      truck: new MeshStandardMaterial({ color: "#f2f5f8", roughness: 0.45, metalness: 0.2 }),
      truckDark: new MeshStandardMaterial({ color: "#121820", roughness: 0.6 }),
      truckStripe: new MeshStandardMaterial({ color: "#2c74c4", roughness: 0.5 }),
      lift: new MeshStandardMaterial({ color: "#f5b52a", roughness: 0.5 }),
      liftDark: new MeshStandardMaterial({ color: "#2a3340", roughness: 0.6 }),
      skin: new MeshStandardMaterial({ color: "#f2c9a0", roughness: 0.6 }),
      hat: new MeshStandardMaterial({ color: "#ffc533", roughness: 0.35 }),
    }),
    [],
  );

  const geo = useMemo(
    () => ({
      pot: new CylinderGeometry(0.26, 0.2, 0.5, 14),
      leaf: new SphereGeometry(0.4, 14, 10),
      wheel: new CylinderGeometry(0.42, 0.42, 0.3, 16).rotateX(Math.PI / 2),
      liftWheel: new CylinderGeometry(0.22, 0.22, 0.18, 14).rotateZ(Math.PI / 2),
      head: new SphereGeometry(0.22, 16, 12),
      hat: new SphereGeometry(0.23, 14, 7, 0, Math.PI * 2, 0, Math.PI / 2),
    }),
    [],
  );

  /* ------------------------------------------------ the forklift */
  const lift = useRef<Group>(null);
  const load = useRef<Group>(null);
  useFrame((state) => {
    const g = lift.current;
    if (!g) return;
    // back and forth from the dock door to the staging area: loaded going in,
    // empty coming back (forklifts reverse out, forks facing the floor)
    const t = reduced ? 3 : state.clock.elapsedTime;
    const cycle = (t * 0.09) % 1;
    const x0 = -25.2;
    const x1 = -19.4;
    const leg = cycle < 0.5 ? cycle / 0.5 : 1 - (cycle - 0.5) / 0.5;
    const ease = leg < 0.12 ? 0 : leg > 0.88 ? 1 : (leg - 0.12) / 0.76;
    const s = ease * ease * (3 - 2 * ease);
    g.position.set(x0 + (x1 - x0) * s, 0, INBOUND.doors[0] + 0.2);
    if (load.current) {
      load.current.visible = cycle < 0.5;
      load.current.position.y = 0.32 + (cycle < 0.5 ? 0.1 : 0);
    }
  }, -1);

  return (
    <group>
      {/* floor zones */}
      <Static matrices={layout.tints} material={mats.tint} colors={layout.tintColors} />
      <Static matrices={layout.borders} material={mats.safety} />
      <Static matrices={layout.walkway} material={mats.walkway} />
      <Static matrices={layout.lanePaint} material={mats.paint} colors={layout.laneColors} />

      {/* inbound: dock doors, trucks unloading, pallets, receiving */}
      <Static matrices={layout.doorFrames} material={mats.doorFrame} />
      <Static matrices={layout.doorPanels} material={mats.doorPanel} />
      {INBOUND.doors.map((z) => (
        <group key={z} position={[-FLOOR.w / 2 - 4.1, 0, z]} rotation-y={Math.PI}>
          <mesh position={[0, 1.7, 0]} material={mats.truck}>
            <boxGeometry args={[5.2, 2.6, 2.3]} />
          </mesh>
          <mesh position={[0, 0.85, 1.16]} material={mats.truckStripe}>
            <boxGeometry args={[5.2, 0.3, 0.02]} />
          </mesh>
          <mesh position={[3.35, 1.35, 0]} material={mats.truck}>
            <boxGeometry args={[1.5, 1.9, 2.2]} />
          </mesh>
          <mesh position={[3.85, 1.75, 0]} material={mats.truckDark}>
            <boxGeometry args={[0.55, 0.65, 2.1]} />
          </mesh>
          {[[-1.6, -1.15], [-1.6, 1.15], [3.0, -1.15], [3.0, 1.15]].map(([wx, wz]) => (
            <mesh key={`${wx}${wz}`} position={[wx, 0.42, wz]} geometry={geo.wheel} material={mats.truckDark} />
          ))}
        </group>
      ))}
      <Static matrices={layout.p.wood} material={mats.wood} />
      <Static matrices={layout.p.cartons} material={mats.carton} colors={layout.p.cartonColors} />
      <Static matrices={layout.p.wrap} material={mats.wrap} />

      {/* the forklift, bringing pallets in from the dock */}
      <group ref={lift} rotation-y={Math.PI / 2}>
        <mesh position={[0, 0.55, -0.2]} scale={[1.1, 0.7, 1.5]} geometry={UNIT} material={mats.lift} />
        <mesh position={[0, 0.75, -0.95]} scale={[1.1, 0.6, 0.35]} geometry={UNIT} material={mats.liftDark} />
        {[[-0.48, -0.55], [0.48, -0.55], [-0.48, 0.15], [0.48, 0.15]].map(([px, pz]) => (
          <mesh key={`${px}${pz}`} position={[px, 1.45, pz]} scale={[0.06, 1.1, 0.06]} geometry={UNIT} material={mats.liftDark} />
        ))}
        <mesh position={[0, 2.0, -0.2]} scale={[1.05, 0.05, 0.85]} geometry={UNIT} material={mats.liftDark} />
        {[-0.22, 0.22].map((px) => (
          <mesh key={px} position={[px, 1.15, 0.62]} scale={[0.08, 2.1, 0.08]} geometry={UNIT} material={mats.liftDark} />
        ))}
        {[-0.22, 0.22].map((px) => (
          <mesh key={px} position={[px, 0.28, 1.15]} scale={[0.12, 0.05, 1.0]} geometry={UNIT} material={mats.liftDark} />
        ))}
        {[[-0.5, -0.65], [0.5, -0.65], [-0.5, 0.35], [0.5, 0.35]].map(([px, pz]) => (
          <mesh key={`${px}${pz}`} position={[px, 0.22, pz]} geometry={geo.liftWheel} material={mats.liftDark} />
        ))}
        {/* the driver */}
        <mesh position={[0, 1.25, -0.3]} geometry={geo.head} material={mats.skin} />
        <mesh position={[0, 1.31, -0.3]} rotation-x={-0.08} geometry={geo.hat} material={mats.hat} />
        <group ref={load} position={[0, 0.32, 1.15]}>
          <mesh position={[0, 0.07, 0]} scale={[1.0, 0.14, 1.1]} geometry={UNIT} material={mats.wood} />
          <mesh position={[0, 0.55, 0]} scale={[0.9, 0.82, 1.0]} geometry={UNIT} material={mats.flat} />
        </group>
      </group>

      {/* receiving and returns benches */}
      <Static matrices={layout.benches} material={mats.bench} />
      <Static matrices={layout.legs} material={mats.frame} />
      <Static matrices={layout.tubs} material={mats.tub} />
      <Static matrices={layout.screens} material={mats.screen} />

      {/* packing supplies */}
      <Static matrices={layout.supplies} material={mats.steel} />
      <Static matrices={layout.flats} material={mats.flat} />
      <Static matrices={layout.flatsTop} material={mats.flat} />

      {/* the command centre */}
      <Static matrices={layout.glass} material={mats.glass} />
      <Static matrices={layout.mullions} material={mats.mullion} />
      <Static matrices={layout.wallScreens} material={mats.dashboard} />

      {/* carrier lanes: roll cages of sorted parcels */}
      <Static matrices={layout.cagePosts} material={mats.steel} />
      <Static matrices={layout.parcels} material={mats.carton} colors={layout.parcelColors} />

      {/* zone signs, plants */}
      <Static matrices={layout.signs} material={mats.sign} colors={layout.signColors} />
      <Static matrices={layout.signPosts} material={mats.steel} />
      <Static matrices={layout.pots} material={mats.pot} geometry={geo.pot} />
      <Static matrices={layout.leaves} material={mats.leaf} geometry={geo.leaf} />
    </group>
  );
}
