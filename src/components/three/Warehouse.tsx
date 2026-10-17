"use client";

import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Grid, Line } from "@react-three/drei";
import {
  AdditiveBlending,
  BoxGeometry,
  CanvasTexture,
  CircleGeometry,
  Color,
  CylinderGeometry,
  DoubleSide,
  Euler,
  Group,
  InstancedMesh,
  Matrix4,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  PlaneGeometry,
  Quaternion,
  RepeatWrapping,
  RingGeometry,
  SRGBColorSpace,
  Vector3,
  type BufferGeometry,
  type Material,
} from "three";
import type { Line2 } from "three-stdlib";
import type { MotionValue } from "framer-motion";
import { setAnchor } from "@/components/story/labels";
import {
  bottleneck,
  control,
  dispatchProgress,
  mapBase,
  smoothstep,
  ghosts,
  machinesOn,
  packProgress,
  pickProgress,
  routeLine,
  sameSpace,
  throughput,
} from "@/components/story/timeline";
import {
  AISLES,
  AISLE_LEFT_X,
  AISLE_RIGHT_X,
  AMR_COUNT,
  BENCH_Z,
  BUSY_STATION,
  CONVEYOR,
  DESK,
  RECEIVING,
  RETURNS,
  EXCEPTION,
  FLOOR,
  FRONT_AISLE_Z,
  GATE_X,
  GHOST_ROUTES,
  HERO_STATION,
  PACKERS,
  PALETTE,
  PEOPLE,
  PICKS,
  RACK,
  RACK_X1,
  RESERVE_SLOT,
  STATIONS_X,
  VAN_X,
  WAVE_ROUTE,
  WORKER_COUNT,
  bayX,
  hash,
  live,
  pickPath,
} from "./world";
import { glow } from "./glow";
import { Crew, CrewPoser, type CrewLook } from "./Crew";
import FloorZones from "./FloorZones";

/* ------------------------------------------------------------ helpers */

const UNIT_BOX = new BoxGeometry(1, 1, 1);
/** A unit plane lying on the floor. */
const FLOOR_PLANE = new PlaneGeometry(1, 1).rotateX(-Math.PI / 2);
const _m = new Matrix4();
const _q = new Quaternion();
const _e = new Euler();
const _p = new Vector3();
const _s = new Vector3();

function boxMatrix(x: number, y: number, z: number, sx: number, sy: number, sz: number, ry = 0) {
  _q.setFromEuler(_e.set(0, ry, 0));
  return new Matrix4().compose(new Vector3(x, y, z), _q.clone(), new Vector3(sx, sy, sz));
}

function place(mesh: InstancedMesh, i: number, x: number, y: number, z: number, sx: number, sy = sx, sz = sx, ry = 0) {
  _q.setFromEuler(_e.set(0, ry, 0));
  _m.compose(_p.set(x, y, z), _q, _s.set(sx, sy, sz));
  mesh.setMatrixAt(i, _m);
}

/** Instanced mesh whose transforms are set once. */
function Static({
  matrices,
  material,
  geometry = UNIT_BOX,
  colors,
}: {
  matrices: Matrix4[];
  material: Material;
  geometry?: BufferGeometry;
  colors?: Color[];
}) {
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

/** A belt texture: dark rubber with lighter slats, scrolled to show speed. */
function makeBeltTexture(length: number) {
  const c = document.createElement("canvas");
  c.width = 128;
  c.height = 32;
  const g = c.getContext("2d")!;
  g.fillStyle = "#2c3642";
  g.fillRect(0, 0, 128, 32);
  g.fillStyle = "#46566a";
  for (let x = 0; x < 128; x += 16) g.fillRect(x, 0, 6, 32);
  const tex = new CanvasTexture(c);
  tex.wrapS = tex.wrapT = RepeatWrapping;
  tex.repeat.set(length / 2, 1);
  tex.colorSpace = SRGBColorSpace;
  return tex;
}

/** A soft round blob (white centre → transparent), for light pools and shadows. */
function makeSoftTexture() {
  const c = document.createElement("canvas");
  c.width = c.height = 128;
  const g = c.getContext("2d")!;
  const grad = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  grad.addColorStop(0, "rgba(255,255,255,1)");
  grad.addColorStop(0.45, "rgba(255,255,255,0.55)");
  grad.addColorStop(1, "rgba(255,255,255,0)");
  g.fillStyle = grad;
  g.fillRect(0, 0, 128, 128);
  return new CanvasTexture(c);
}

/** The floor's coverage: solid under the operation, fading out well before the
    plane's edge, so the floor runs into the page with no rectangle to see. */
function makeFloorTexture() {
  const c = document.createElement("canvas");
  c.width = c.height = 256;
  const g = c.getContext("2d")!;
  const grad = g.createRadialGradient(128, 128, 0, 128, 128, 128);
  grad.addColorStop(0, "rgba(255,255,255,1)");
  grad.addColorStop(0.45, "rgba(255,255,255,0.9)");
  grad.addColorStop(1, "rgba(255,255,255,0)");
  g.fillStyle = grad;
  g.fillRect(0, 0, 256, 256);
  return new CanvasTexture(c);
}

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
/** 0 → 1 as x goes from a to b. */
const seg = (x: number, a: number, b: number) => Math.min(1, Math.max(0, (x - a) / (b - a)));

/* ---------------------------------------------------------- the belt */

const POOL = 72;
const BOX = { w: 0.52, h: 0.38, d: 0.44 };

type Belt = { on: Uint8Array; x: Float32Array; from: Float32Array; jz: Float32Array; phase: Float32Array; next: number };

/** Boxes are born at a pack station, ride the belt through the Dispatch Gate
    and end in the van. `rate` is spawns per station per call; `skip` is a
    station to keep off the belt. */
function stepBelt(s: Belt, dx: number, rate: number, skip: number) {
  for (let i = 0; i < POOL; i++) {
    if (!s.on[i]) continue;
    s.x[i] += dx;
    if (s.x[i] > CONVEYOR.x1) s.on[i] = 0;
  }
  for (let st = 0; st < STATIONS_X.length; st++) {
    s.phase[st] += rate * (0.7 + 0.6 * hash(st + Math.floor(s.phase[st]) * 7));
    if (s.phase[st] < 1) continue;
    s.phase[st] -= 1;
    if (st === skip) continue;
    const i = s.next;
    s.next = (s.next + 1) % POOL;
    s.on[i] = 1;
    s.x[i] = STATIONS_X[st];
    s.from[i] = STATIONS_X[st];
    s.jz[i] = (hash(i * 3.3 + st) - 0.5) * 0.25;
  }
}

/* ------------------------------------------------------- static layout */

/** Bin colour for the rack face that looks onto aisle k (zone A, B, C). */
const faceColor = (k: number) => new Color(AISLES[Math.min(AISLES.length - 1, Math.max(0, k))].color);

/** Centre of the bins on a pick slot's aisle-facing side. */
const binZ = (p: (typeof PICKS)[number]) => p.rowZ + (p.side === 1 ? 0.28 : -0.28);

function useLayout() {
  return useMemo(() => {
    const uprights: Matrix4[] = [];
    const beams: Matrix4[] = [];
    const decks: Matrix4[] = [];
    const bins: Matrix4[] = [];
    const binColors: Color[] = [];
    const cartons: Matrix4[] = [];
    const cartonColors: Color[] = [];
    const cardboard = ["#c79a68", "#b98a5a", "#d2a877", "#ad8456"].map((c) => new Color(c));

    let seed = 1;
    RACK.rows.forEach((z, r) => {
      for (let b = 0; b <= RACK.bays; b++) {
        const x = RACK.x0 + b * RACK.bay;
        for (const dz of [-RACK.d / 2, RACK.d / 2]) uprights.push(boxMatrix(x, RACK.h / 2, z + dz, 0.09, RACK.h, 0.09));
      }
      for (let b = 0; b < RACK.bays; b++) {
        const cx = bayX(b);
        RACK.levels.forEach((y, level) => {
          for (const dz of [-RACK.d / 2, RACK.d / 2]) beams.push(boxMatrix(cx, y, z + dz, RACK.bay, 0.09, 0.07));
          decks.push(boxMatrix(cx, y + 0.045, z, RACK.bay - 0.08, 0.03, RACK.d));
          if (level < 2) {
            // pick slots: tidy rows of bins, coloured by the zone each face serves
            for (const face of [-1, 1] as const) {
              const color = faceColor(face === -1 ? r - 1 : r);
              for (const bx of [-0.78, 0, 0.78]) {
                if (hash(seed++) < 0.1) continue;
                bins.push(boxMatrix(cx + bx, y + 0.07 + 0.17, z + face * 0.28, 0.66, 0.34, 0.46));
                binColors.push(color);
              }
            }
          } else if (hash(seed++) < 0.62) {
            // reserve: a carton stack, or two
            const h = 0.5 + hash(seed++) * 0.4;
            const twin = hash(seed++) < 0.4;
            const w = twin ? 0.95 : 1.9;
            for (const off of twin ? [-0.5, 0.5] : [0]) {
              cartons.push(boxMatrix(cx + off, y + 0.06 + h / 2, z, w, h, 0.98));
              cartonColors.push(cardboard[Math.floor(hash(seed++) * cardboard.length)]);
            }
          }
        });
      }
    });

    // pack stations: bench, legs, VDO Proof camera on a pole, screen
    const benches: Matrix4[] = [];
    const legs: Matrix4[] = [];
    const cams: Matrix4[] = [];
    const recs: Matrix4[] = [];
    const screens: Matrix4[] = [];
    for (const x of STATIONS_X) {
      benches.push(boxMatrix(x, 0.9, BENCH_Z, 1.7, 0.06, 0.9));
      for (const [lx, lz] of [[-0.78, -0.38], [0.78, -0.38], [-0.78, 0.38], [0.78, 0.38]]) {
        legs.push(boxMatrix(x + lx, 0.45, BENCH_Z + lz, 0.05, 0.9, 0.05));
      }
      legs.push(boxMatrix(x - 0.78, 1.5, BENCH_Z - 0.38, 0.04, 1.2, 0.04));
      cams.push(boxMatrix(x - 0.5, 2.08, BENCH_Z - 0.38, 0.56, 0.05, 0.05));
      cams.push(boxMatrix(x - 0.22, 2.02, BENCH_Z - 0.28, 0.16, 0.11, 0.2));
      recs.push(boxMatrix(x - 0.22, 2.02, BENCH_Z - 0.17, 0.05, 0.05, 0.02));
      screens.push(boxMatrix(x + 0.5, 1.28, BENCH_Z - 0.3, 0.6, 0.36, 0.03));
    }

    // conveyor from the stations to the van, through the gate
    const cx = (CONVEYOR.x0 + CONVEYOR.x1) / 2;
    const len = CONVEYOR.x1 - CONVEYOR.x0;
    const frame: Matrix4[] = [];
    for (const dz of [-0.53, 0.53]) frame.push(boxMatrix(cx, CONVEYOR.y + 0.1, CONVEYOR.z + dz, len, 0.08, 0.06));
    for (let x = CONVEYOR.x0 + 1; x < CONVEYOR.x1; x += 3) {
      for (const dz of [-0.45, 0.45]) frame.push(boxMatrix(x, CONVEYOR.y / 2, CONVEYOR.z + dz, 0.08, CONVEYOR.y, 0.08));
    }
    const exLen = EXCEPTION.z1 - EXCEPTION.z0 - 0.6;
    const exMid = EXCEPTION.z0 + 0.6 + exLen / 2;
    for (const dx of [-0.42, 0.42]) frame.push(boxMatrix(EXCEPTION.x + dx, CONVEYOR.y + 0.08, exMid, 0.06, 0.08, exLen));
    for (const dz of [-1.2, 1.2]) frame.push(boxMatrix(EXCEPTION.x, CONVEYOR.y / 2, exMid + dz, 0.7, CONVEYOR.y, 0.08));

    const gate = [
      boxMatrix(GATE_X, 1.3, CONVEYOR.z - 0.9, 0.14, 2.6, 0.14),
      boxMatrix(GATE_X, 1.3, CONVEYOR.z + 0.9, 0.14, 2.6, 0.14),
      boxMatrix(GATE_X, 2.6, CONVEYOR.z, 0.14, 0.14, 1.94),
    ];
    const exceptionFrame = [
      boxMatrix(EXCEPTION.x, 1.25, EXCEPTION.z1 + 0.5, 1.2, 0.06, 0.06),
      boxMatrix(EXCEPTION.x - 0.6, 0.62, EXCEPTION.z1 + 0.5, 0.06, 1.25, 0.06),
      boxMatrix(EXCEPTION.x + 0.6, 0.62, EXCEPTION.z1 + 0.5, 0.06, 1.25, 0.06),
    ];
    const dock = [
      boxMatrix(FLOOR.w / 2, 1.8, CONVEYOR.z - 1.7, 0.12, 3.6, 0.12),
      boxMatrix(FLOOR.w / 2, 1.8, CONVEYOR.z + 1.7, 0.12, 3.6, 0.12),
      boxMatrix(FLOOR.w / 2, 3.6, CONVEYOR.z, 0.12, 0.12, 3.52),
    ];

    // floor paint: lane lines in each zone's colour down every aisle, walkway lines
    const zonePaint = AISLES.flatMap((a) => [-1.15, 1.15].map((dz) => boxMatrix((RACK.x0 + RACK_X1) / 2, 0.012, a.z + dz, RACK_X1 - RACK.x0, 0.01, 0.09)));
    const zoneColors = AISLES.flatMap((a) => [0, 1].map(() => new Color(a.color).multiplyScalar(0.7)));
    const paint = [
      boxMatrix(-9.5, 0.012, FRONT_AISLE_Z - 1.1, 34, 0.01, 0.1),
      boxMatrix(-1.5, 0.012, CONVEYOR.z + 1.4, 36, 0.01, 0.1),
      boxMatrix(GATE_X - 1.3, 0.012, CONVEYOR.z, 0.1, 0.01, 3.2),
    ];

    // soft shadows under the racks and benches, pools of light from above
    const rackShadows = RACK.rows.map((z) => boxMatrix((RACK.x0 + RACK_X1) / 2, 0.013, z, RACK_X1 - RACK.x0 + 1.6, 1, 2.4));
    const benchShadows = STATIONS_X.map((x) => boxMatrix(x, 0.013, BENCH_Z, 2.8, 1, 1.8));

    // the building's footprint, drawn only for "same space"
    const outline = [
      boxMatrix(0, 0.02, -FLOOR.d / 2, FLOOR.w, 0.04, 0.14),
      boxMatrix(0, 0.02, FLOOR.d / 2, FLOOR.w, 0.04, 0.14),
      boxMatrix(-FLOOR.w / 2, 0.02, 0, 0.14, 0.04, FLOOR.d),
      boxMatrix(FLOOR.w / 2, 0.02, 0, 0.14, 0.04, FLOOR.d),
    ];

    // the wave's slots: the three bins on the picking face; the reserve slot whole
    const slotMarks = [
      ...PICKS.map((p) => boxMatrix(p.pos[0], RACK.levels[Number(p.code.slice(-1)) - 1] + 0.24, binZ(p), RACK.bay - 0.12, 0.5, 0.56)),
      boxMatrix(RESERVE_SLOT.pos[0], RACK.levels[3] + 0.4, RESERVE_SLOT.rowZ, RACK.bay - 0.12, 0.85, RACK.d + 0.06),
    ];

    return {
      uprights, beams, decks, bins, binColors, cartons, cartonColors, benches, legs, cams, recs, screens, frame, gate,
      exceptionFrame, dock, zonePaint, zoneColors, paint, rackShadows, benchShadows, outline, slotMarks,
    };
  }, []);
}

/* ---------------------------------------------------------- component */

export default function Warehouse({ beat, reduced }: { beat: MotionValue<number>; reduced: boolean }) {
  const L = useLayout();

  const mats = useMemo(() => {
    const belt = makeBeltTexture(CONVEYOR.x1 - CONVEYOR.x0);
    const soft = makeSoftTexture();
    return {
      steel: new MeshStandardMaterial({ color: "#2c74c4", metalness: 0.35, roughness: 0.4 }),
      beam: new MeshStandardMaterial({ color: "#ff7a2a", metalness: 0.2, roughness: 0.45 }),
      deck: new MeshStandardMaterial({ color: "#9aa7b5", metalness: 0.45, roughness: 0.5 }),
      bin: new MeshStandardMaterial({ color: "#ffffff", roughness: 0.55 }),
      carton: new MeshStandardMaterial({ color: "#ffffff", roughness: 0.85 }),
      heroCarton: new MeshStandardMaterial({ color: "#d09b62", roughness: 0.85 }),
      blockedCarton: new MeshStandardMaterial({ color: "#c08f5c", roughness: 0.85 }),
      frame: new MeshStandardMaterial({ color: "#6b7b8c", metalness: 0.6, roughness: 0.4 }),
      belt: new MeshStandardMaterial({ map: belt, roughness: 0.7 }),
      beltTex: belt,
      bench: new MeshStandardMaterial({ color: "#dfe6ee", roughness: 0.45 }),
      screen: new MeshBasicMaterial({ color: "#ffffff", toneMapped: false }),
      cam: new MeshStandardMaterial({ color: "#11161d", roughness: 0.4 }),
      rec: new MeshBasicMaterial({ color: glow("#ff3b3b", 3), toneMapped: false }),
      gate: new MeshBasicMaterial({ color: "#ffffff", toneMapped: false }),
      exception: new MeshBasicMaterial({ color: glow(PALETTE.orange, 1.4), toneMapped: false }),
      dock: new MeshBasicMaterial({ color: glow(PALETTE.cyan, 1.3), toneMapped: false }),
      zonePaint: new MeshBasicMaterial({ color: "#ffffff" }),
      paint: new MeshBasicMaterial({ color: new Color(PALETTE.amber).multiplyScalar(0.75) }),
      // `map`, not `alphaMap`: the blob's RGB is solid white, only its alpha fades
      shadow: new MeshBasicMaterial({ color: "#000000", map: soft, transparent: true, opacity: 0.5, depthWrite: false }),
      // no slab, no walls: a dark floor that the work lights pool on and that
      // fades into the page, so the whole page reads as the warehouse
      floor: new MeshStandardMaterial({ color: "#26354a", roughness: 0.8, map: makeFloorTexture(), transparent: true, depthWrite: false }),
      outline: new MeshBasicMaterial({ color: "#ffffff", toneMapped: false, transparent: true, opacity: 0 }),
      crew: {
        cloth: new MeshStandardMaterial({ color: "#ffffff", roughness: 0.6 }),
        skin: new MeshStandardMaterial({ color: "#f2c9a0", roughness: 0.6 }),
        glow: new MeshBasicMaterial({ color: "#ffffff", toneMapped: false }),
        eye: new MeshBasicMaterial({ color: "#1b1f27" }),
        hat: new MeshStandardMaterial({ color: "#ffffff", roughness: 0.35 }),
        legs: new MeshStandardMaterial({ color: "#2b3747", roughness: 0.7 }),
      },
      ghostCrew: {
        cloth: new MeshStandardMaterial({ color: "#ffffff", roughness: 0.6, transparent: true, opacity: 0 }),
        skin: new MeshStandardMaterial({ color: "#f2c9a0", roughness: 0.6, transparent: true, opacity: 0 }),
        glow: new MeshBasicMaterial({ color: "#ffffff", toneMapped: false, transparent: true, opacity: 0 }),
        eye: new MeshBasicMaterial({ color: "#1b1f27", transparent: true, opacity: 0 }),
        hat: new MeshStandardMaterial({ color: "#ffffff", roughness: 0.35, transparent: true, opacity: 0 }),
        legs: new MeshStandardMaterial({ color: "#2b3747", roughness: 0.7, transparent: true, opacity: 0 }),
      },
      ring: new MeshBasicMaterial({ color: glow(PALETTE.orange, 2.5), toneMapped: false, transparent: true, opacity: 0, side: DoubleSide, depthWrite: false }),
      follow: new MeshBasicMaterial({ color: glow(PALETTE.cyan, 2.2), toneMapped: false, transparent: true, opacity: 0, side: DoubleSide, depthWrite: false }),
      slotMark: new MeshBasicMaterial({ color: "#ffffff", toneMapped: false, transparent: true, opacity: 0, blending: AdditiveBlending, depthWrite: false, depthTest: false }),
      cart: new MeshStandardMaterial({ color: "#aab7c4", metalness: 0.6, roughness: 0.35 }),
      tote: new MeshStandardMaterial({ color: "#34485e", roughness: 0.5 }),
      item: new MeshStandardMaterial({ color: "#ffffff", roughness: 0.5 }),
      lid: new MeshStandardMaterial({ color: "#b98a5a", roughness: 0.85 }),
      labelPatch: new MeshBasicMaterial({ color: "#f4f7fb" }),
      amr: new MeshStandardMaterial({ color: "#2b3846", metalness: 0.5, roughness: 0.4, transparent: true, opacity: 0 }),
      amrLight: new MeshBasicMaterial({ color: glow(PALETTE.cyan, 3), toneMapped: false, transparent: true, opacity: 0 }),
      van: new MeshStandardMaterial({ color: "#e8eef4", roughness: 0.45, metalness: 0.2 }),
      vanDark: new MeshStandardMaterial({ color: "#121820", roughness: 0.6 }),
      tail: new MeshBasicMaterial({ color: glow("#ff4040", 2), toneMapped: false }),
      deskScreen: new MeshBasicMaterial({ color: glow(PALETTE.sky, 1.1), toneMapped: false }),
    };
  }, []);

  const geo = useMemo(
    () => ({
      ring: new RingGeometry(0.5, 0.66, 40).rotateX(-Math.PI / 2),
      blob: new CircleGeometry(0.55, 24).rotateX(-Math.PI / 2),
      disc: new CylinderGeometry(0.22, 0.22, 0.05, 16),
      wheel: new CylinderGeometry(0.42, 0.42, 0.3, 16).rotateX(Math.PI / 2),
      amr: new BoxGeometry(0.8, 0.3, 1.05),
    }),
    [],
  );

  const colors = useMemo(
    () => ({
      parcel: new Float32Array(Array.from({ length: POOL }, (_, i) => new Color(["#c8955f", "#b3834f", "#d6ac78"][i % 3]).toArray()).flat()),
      gate: new Float32Array(3 * 3).fill(1),
      screen: new Float32Array(STATIONS_X.length * 3).fill(1),
      slot: new Float32Array((PICKS.length + 1) * 3).fill(1),
      cartItem: new Float32Array(PICKS.flatMap((p) => new Color(p.color).toArray())),
    }),
    [],
  );

  const C = useMemo(
    () => ({
      gateIdle: glow(PALETTE.teal, 1.3),
      gateOk: glow(PALETTE.green, 4),
      gateBlock: glow(PALETTE.red, 4),
      screenIdle: glow(PALETTE.sky, 1.5),
      screenBusy: glow(PALETTE.amber, 2.6),
      slotTodo: glow(PALETTE.cyan, 1.8),
      slotDone: glow(PALETTE.green, 2.4),
      slotReserve: new Color("#6b7c90"),
      outlineIdle: new Color("#6d88a3"),
      outlineHot: glow(PALETTE.orange, 3.2),
      deskIdle: glow(PALETTE.sky, 1.1),
      deskHot: glow(PALETTE.cyan, 2.6),
      tmp: new Color(),
    }),
    [],
  );

  /* ---------------- refs ---------------- */
  const root = useRef<Group>(null);
  const parcels = useRef<InstancedMesh>(null);
  const rings = useRef<InstancedMesh>(null);
  const blobs = useRef<InstancedMesh>(null);
  const crew = useMemo(() => new CrewPoser(), []);
  const ghostCrew = useMemo(() => new CrewPoser(), []);
  const looks = useMemo(() => {
    const shirts = ["#3d7fd6", "#2fae97", "#7a62d8", "#e0736b", "#3d7fd6", "#2fae97", "#2c6fd1", "#e0874a", "#22303f", "#3fae6a", "#c25ea8"];
    const staff: CrewLook = {
      shirt: shirts.map((c) => new Color(c)),
      vest: shirts.map((_, i) => (i === PEOPLE.supervisor ? glow(PALETTE.cyan, 1.3) : glow(PALETTE.amber, 1.2))),
      hat: shirts.map((_, i) => new Color(i === PEOPLE.supervisor ? PALETTE.cyan : i === PEOPLE.heroPicker || i === PEOPLE.picker2 || i === PEOPLE.receiver ? "#ffc533" : "#f4f6f8")),
    };
    const ghost: CrewLook = {
      shirt: [0, 1, 2].map(() => new Color("#8b97a6")),
      vest: [0, 1, 2].map(() => glow(PALETTE.red, 1.5)),
      hat: [0, 1, 2].map(() => new Color(PALETTE.red)),
    };
    return { staff, ghost };
  }, []);
  const amrBodies = useRef<InstancedMesh>(null);
  const amrLights = useRef<InstancedMesh>(null);
  const gates = useRef<InstancedMesh>(null);
  const screens = useRef<InstancedMesh>(null);
  const slotMarks = useRef<InstancedMesh>(null);
  const cart = useRef<Group>(null);
  const cartItems = useRef<InstancedMesh>(null);
  const flying = useRef<Mesh>(null);
  const follow = useRef<Mesh>(null);
  const heroBox = useRef<Group>(null);
  const heroLid = useRef<Mesh>(null);
  const heroLabel = useRef<Mesh>(null);
  const blockedBox = useRef<Mesh>(null);
  const waveLine = useRef<Line2>(null);
  const ghostLines = useRef<(Line2 | null)[]>([]);

  const belt = useRef<Belt>({
    on: new Uint8Array(POOL),
    x: new Float32Array(POOL),
    from: new Float32Array(POOL),
    jz: new Float32Array(POOL),
    phase: new Float32Array(STATIONS_X.length).map((_, i) => hash(i + 40)),
    next: 0,
  });

  // fixed placements for the gate, screens and slot markers
  useLayoutEffect(() => {
    const pairs: [InstancedMesh | null, Matrix4[]][] = [
      [gates.current, L.gate],
      [screens.current, L.screens],
      [slotMarks.current, L.slotMarks],
    ];
    for (const [mesh, list] of pairs) {
      if (!mesh) continue;
      list.forEach((m, i) => mesh.setMatrixAt(i, m));
      mesh.instanceMatrix.needsUpdate = true;
      mesh.computeBoundingSphere();
    }
  }, [L]);

  // A busy floor from the first frame (and for reduced motion): run the belt ~20 s.
  useEffect(() => {
    for (let k = 0; k < 400; k++) stepBelt(belt.current, 0.06, 0.05 / 7, -1);
  }, []);

  useFrame((state, delta) => {
    const b = beat.get();
    const thr = throughput(b);
    const dt = reduced ? 0 : Math.min(delta, 0.1);
    const t = reduced ? 4 : state.clock.elapsedTime;
    const s = belt.current;
    const tmp = C.tmp;

    /* the warehouse shrinks into the Bangkok hub as the camera rises to the map;
       at map height its millimetre-thin floor layers would only flicker */
    const shrink = 1 - smoothstep(0.2, 0.7, mapBase(b));
    const g = root.current;
    if (g) {
      g.visible = shrink > 0.002;
      g.scale.setScalar(Math.max(0.0001, shrink));
    }

    /* ------------------------------------------------ boxes leaving */
    const speed = 1.2 + 1.5 * thr;
    mats.beltTex.offset.x = (mats.beltTex.offset.x - (speed * dt) / 2) % 1;
    // P-05 keeps its next box back while we follow its order
    stepBelt(s, dt * speed, (dt / 7) * (1 + 4 * thr), b > 2.4 && b < 4.6 ? HERO_STATION : -1);

    let flash = 0;
    const pm = parcels.current;
    if (pm) {
      for (let i = 0; i < POOL; i++) {
        if (!s.on[i]) {
          place(pm, i, 0, -5, 0, 0.0001);
          continue;
        }
        const x = s.x[i];
        const k = Math.max(0.0001, Math.min(1, (x - s.from[i]) / 0.5 + 0.2, (CONVEYOR.x1 - x) / 0.8));
        place(pm, i, x, CONVEYOR.y + 0.27, CONVEYOR.z + s.jz[i], BOX.w * k, BOX.h * k, BOX.d * k);
        flash = Math.max(flash, 1 - Math.abs(x - GATE_X) / 0.5);
      }
      pm.instanceMatrix.needsUpdate = true;
    }

    /* ------------------------------------- the order we follow: PK-10482 */
    const pack = packProgress(b);
    const disp = dispatchProgress(b);
    let hx = STATIONS_X[HERO_STATION] - 0.1;
    let hy = 1.12;
    let hz = BENCH_Z + 0.05;
    if (disp > 0) {
      const lift = seg(disp, 0, 0.08);
      hz = lerp(BENCH_Z + 0.05, CONVEYOR.z, lift);
      hy = lerp(1.12, CONVEYOR.y + 0.27, lift) + Math.sin(lift * Math.PI) * 0.35;
      hx = lerp(STATIONS_X[HERO_STATION], CONVEYOR.x1 - 0.3, seg(disp, 0.08, 0.95));
    }
    const heroVisible = b > 2.62 && b < 4.75 && disp < 0.97;
    if (heroBox.current) {
      heroBox.current.visible = heroVisible;
      heroBox.current.position.set(hx, hy, hz);
    }
    if (heroLid.current) heroLid.current.visible = pack > 0.7 || disp > 0;
    if (heroLabel.current) heroLabel.current.visible = pack > 0.78 || disp > 0;
    setAnchor("box.hero", hx, hy + 0.65, hz);
    if (heroVisible) flash = Math.max(flash, 1 - Math.abs(hx - GATE_X) / 0.6);

    /* --------------------------- PK-10477: cancelled in OMS → exception */
    let bx = 13;
    let bz: number = CONVEYOR.z;
    if (disp > 0) {
      bx = disp > 0.36 ? lerp(GATE_X, EXCEPTION.x, seg(disp, 0.36, 0.42)) : lerp(13, GATE_X, seg(disp, 0, 0.28));
      bz = lerp(CONVEYOR.z, EXCEPTION.z1 - 0.15, seg(disp, 0.42, 0.6));
    }
    const blockedAtGate = disp > 0.24 && disp < 0.4;
    if (blockedBox.current) {
      blockedBox.current.visible = b > 3.35 && b < 5.6;
      blockedBox.current.position.set(bx, CONVEYOR.y + 0.27, bz);
    }
    setAnchor("box.blocked", bx, CONVEYOR.y + 0.95, bz);

    /* ------------------------------------------------- Dispatch Gate */
    const gm = gates.current;
    if (gm) {
      tmp.copy(C.gateIdle).lerp(C.gateOk, Math.max(0, flash));
      if (blockedAtGate) tmp.copy(C.gateBlock);
      for (let g = 0; g < 3; g++) gm.setColorAt(g, tmp);
      if (gm.instanceColor) gm.instanceColor.needsUpdate = true;
    }

    /* --------------------------------------- screens; P-02 bottleneck */
    const neck = bottleneck(b);
    const sm = screens.current;
    if (sm) {
      for (let i = 0; i < STATIONS_X.length; i++) {
        tmp.copy(C.screenIdle);
        if (i === BUSY_STATION) tmp.lerp(C.screenBusy, neck * (0.75 + 0.25 * Math.sin(t * 6)));
        sm.setColorAt(i, tmp);
      }
      if (sm.instanceColor) sm.instanceColor.needsUpdate = true;
    }

    /* ------------------------------- the wave: slots, route, the picker */
    const route = routeLine(b);
    const walk = pickPath(pickProgress(b));
    const mm = slotMarks.current;
    if (mm) {
      PICKS.forEach((_, i) => mm.setColorAt(i, i < walk.picked ? C.slotDone : C.slotTodo));
      mm.setColorAt(PICKS.length, C.slotReserve);
      if (mm.instanceColor) mm.instanceColor.needsUpdate = true;
      mats.slotMark.opacity = route * 0.6;
      mm.visible = route > 0.01;
    }
    const wl = waveLine.current;
    if (wl) {
      wl.visible = route > 0.01;
      wl.material.opacity = route * 0.9;
      if (!reduced) wl.material.dashOffset = -t * 1.2;
    }
    const ghostOn = ghosts(b);
    ghostLines.current.forEach((line) => {
      if (!line) return;
      line.visible = ghostOn > 0.01;
      line.material.opacity = ghostOn * 0.75;
    });

    /* ------------------------------------------------------- people */
    const same = sameSpace(b);
    mats.outline.color.copy(C.outlineIdle).lerp(C.outlineHot, same);
    mats.outline.opacity = same;
    mats.ring.opacity = same * 0.9;
    const tempo = 1 + thr * 0.8;
    const rm = rings.current;
    const sh = blobs.current;
    /** radians of walk cycle per metre walked */
    const STRIDE = 3.4;
    if (rm && sh) {
      for (let w = 0; w < WORKER_COUNT; w++) {
        let x: number;
        let z: number;
        let heading: number;
        let phase = 0;
        let walking = 0;
        let work = 0;
        let show = 1;
        if (w < PACKERS.length) {
          [x, z] = PACKERS[w];
          // at the bench, arms busy; the hero packer works faster while packing our order
          const busy = w === HERO_STATION && pack > 0 && pack < 1 ? 1.6 : 1;
          heading = Math.PI + Math.sin(t * 0.9 * tempo * busy + w * 1.7) * 0.25;
          work = 0.85;
        } else if (w === PEOPLE.heroPicker) {
          // walks the wave as you scroll, stopping at each slot to pick;
          // afterwards keeps picking the next waves
          const following = b < 4.6;
          const u = following ? walk.u : (t * 0.012) % 1;
          const p = WAVE_ROUTE.at(u);
          x = p.x;
          z = p.z;
          const picking = following && walk.stop >= 0;
          // at a slot, turn to the rack and reach into the bin
          heading = picking ? (PICKS[walk.stop].side === 1 ? Math.PI : 0) : p.heading;
          walking = picking ? 0 : !following || (walk.u > 0 && walk.u < 1) ? 1 : 0;
          work = picking ? Math.sin(Math.PI * walk.dwell) : 0;
          phase = u * WAVE_ROUTE.length * STRIDE;
          show = 1 - ghostOn;

          // the cart rolls ahead along the aisle
          const cx = x + Math.sin(p.heading) * 1.0;
          const cz = z + Math.cos(p.heading) * 1.0;
          const c = cart.current;
          if (c) {
            c.visible = show > 0.05;
            c.position.set(cx, 0, cz);
            c.rotation.y = p.heading;
          }
          const items = cartItems.current;
          if (items) {
            const n = following ? walk.picked : 3;
            for (let k = 0; k < PICKS.length; k++) {
              const on = k < n ? 1 : 0.0001;
              place(items, k, ((k % 2) - 0.5) * 0.22, 0.72 + Math.floor(k / 2) * 0.16, -0.25 + (k % 3) * 0.2, on);
            }
            items.instanceMatrix.needsUpdate = true;
          }
          // the picked item travels from the bin into the cart
          const fly = flying.current;
          if (fly) {
            const arc = picking ? seg(walk.dwell, 0.15, 0.75) : 0;
            fly.visible = picking && arc > 0 && arc < 1;
            if (picking) {
              const slot = PICKS[walk.stop];
              const sy = RACK.levels[Number(slot.code.slice(-1)) - 1] + 0.3;
              fly.position.set(
                lerp(slot.pos[0], cx, arc),
                lerp(sy, 0.85, arc) + Math.sin(arc * Math.PI) * 0.5,
                lerp(binZ(slot), cz, arc),
              );
              (fly.material as MeshStandardMaterial).color.set(slot.color);
            }
          }
          const f = follow.current;
          if (f) {
            f.visible = following && show > 0.05 && b > 1.3;
            f.position.set(x, 0.035, z);
            mats.follow.opacity = 0.85 * routeLine(b);
          }
        } else if (w === PEOPLE.picker2) {
          const u = (t * 0.012 + 0.5) % 1;
          const p = WAVE_ROUTE.at(u);
          x = p.x;
          z = p.z;
          heading = p.heading;
          walking = 1;
          phase = u * WAVE_ROUTE.length * STRIDE;
          show = b < 0.4 || b > 4.6 ? 1 : 0;
        } else if (w === PEOPLE.receiver) {
          // between the staged pallets and the receiving bench: check, scan, put away
          const cyc = (t / 12) % 1;
          const ax = -19.6;
          const az = 12.6;
          const bx2 = RECEIVING.x;
          const bz2 = RECEIVING.z + 0.85;
          const go = cyc < 0.25 ? cyc / 0.25 : cyc < 0.42 ? 1 : cyc < 0.67 ? 1 - (cyc - 0.42) / 0.25 : 0;
          x = lerp(bx2, ax, go);
          z = lerp(bz2, az, go);
          const movingOut = cyc < 0.25;
          const movingBack = cyc >= 0.42 && cyc < 0.67;
          walking = movingOut || movingBack ? 1 : 0;
          heading = movingOut ? Math.atan2(ax - bx2, az - bz2) : movingBack ? Math.atan2(bx2 - ax, bz2 - az) : cyc < 0.42 ? 0 : Math.PI;
          work = walking ? 0 : 0.8;
          phase = t * 5.5;
        } else if (w === PEOPLE.returns) {
          x = RETURNS.x;
          z = RETURNS.z + 0.85;
          heading = Math.PI + Math.sin(t * 0.8 + 2) * 0.2;
          work = 0.85;
        } else {
          x = DESK.x;
          z = DESK.z + 0.85;
          heading = Math.PI + Math.sin(t * 0.6) * 0.25;
          work = 0.25;
        }
        const k = Math.max(0.0001, show);
        const top = crew.set(w, { x, z, heading, phase, walk: walking, work, t, scale: k * 1.3 });
        const pulse = k * (1 + same * 0.15 * Math.sin(t * 4 + w));
        place(rm, w, x, 0.03, z, pulse, 1, pulse);
        place(sh, w, x, 0.014, z, k);
        live.heads[w * 3] = x;
        live.heads[w * 3 + 1] = top - 0.2;
        live.heads[w * 3 + 2] = z;
        setAnchor(`head.${w}`, x, top + 0.2, z);
      }
      crew.commit();
      for (const m of [rm, sh]) m.instanceMatrix.needsUpdate = true;
    }

    /* ----------------------------- "before": one order per trip, ×3 */
    for (const m of Object.values(mats.ghostCrew)) m.opacity = ghostOn;
    GHOST_ROUTES.forEach((r, i) => {
      const u = (t * 0.03 + i * 0.31) % 1;
      const p = r.at(u);
      const top = ghostCrew.set(i, {
        x: p.x,
        z: p.z,
        heading: p.heading,
        phase: u * r.length * STRIDE,
        walk: 1,
        work: 0,
        t,
        scale: Math.max(0.0001, ghostOn) * 1.3,
      });
      setAnchor(`ghost.${i}`, p.x, top + 0.25, p.z);
    });
    ghostCrew.commit();

    /* ------------------------------- machines, next on the same brain */
    const machines = machinesOn(b);
    mats.amr.opacity = machines * 0.85;
    mats.amrLight.opacity = machines;
    const am = amrBodies.current;
    const al = amrLights.current;
    if (am && al) {
      for (let r = 0; r < AMR_COUNT; r++) {
        const z = AISLES[r + 1].z;
        const ph = t * 0.1 + r * 1.9;
        const x = lerp(AISLE_LEFT_X + 2, AISLE_RIGHT_X - 2, Math.sin(ph) * 0.5 + 0.5);
        const ry = Math.cos(ph) > 0 ? Math.PI / 2 : -Math.PI / 2;
        place(am, r, x, 0.2, z + 0.8, 1, 1, 1, ry);
        place(al, r, x, 0.39, z + 0.8, 1, 1, 1, ry);
        live.amrs[r * 3] = x;
        live.amrs[r * 3 + 1] = 0.9;
        live.amrs[r * 3 + 2] = z + 0.8;
        setAnchor(`amr.${r}`, x, 1.3, z + 0.8);
      }
      for (const m of [am, al]) {
        m.instanceMatrix.needsUpdate = true;
        m.visible = machines > 0.01;
      }
    }

    /* ----------------------------------- the supervisor's command desk */
    mats.deskScreen.color.copy(C.deskIdle).lerp(C.deskHot, control(b));

    /* ------------------------------------ every box is on video: REC */
    mats.rec.color.set("#ff3b3b").multiplyScalar(reduced || Math.sin(t * 4) > -0.2 ? 3 : 0.4);
    // -1: run before the brain (reads `live`) and the projector (reads anchors).
  }, -1);

  const wavePoints = useMemo(() => WAVE_ROUTE.pts.map(([x, z]) => new Vector3(x, 0.06, z)), []);
  const ghostPoints = useMemo(
    () => GHOST_ROUTES.map((r, i) => r.pts.map(([x, z]) => new Vector3(x + (i - 1) * 0.3, 0.05, z + (i - 1) * 0.3))),
    [],
  );
  const conveyorLen = CONVEYOR.x1 - CONVEYOR.x0;

  return (
    <group ref={root}>
      {/* the floor: dark like the page, lit by the work lights, fading out at
          the edges; a grid, paint and soft shadows on it */}
      <mesh scale={[FLOOR.w * 2, 1, FLOOR.d * 2.2]} geometry={FLOOR_PLANE} material={mats.floor} renderOrder={-2} />
      <Grid
        position={[0, 0.004, 0]}
        args={[200, 200]}
        cellSize={2}
        cellThickness={0.6}
        cellColor="#1d3046"
        sectionSize={8}
        sectionThickness={1}
        sectionColor="#2a4d70"
        fadeDistance={72}
        fadeStrength={1.4}
        fadeFrom={0}
      />
      <Static matrices={L.zonePaint} material={mats.zonePaint} colors={L.zoneColors} />
      <Static matrices={L.rackShadows} material={mats.shadow} geometry={FLOOR_PLANE} />
      <Static matrices={L.benchShadows} material={mats.shadow} geometry={FLOOR_PLANE} />
      <Static matrices={L.outline} material={mats.outline} />
      <Static matrices={L.paint} material={mats.paint} />
      <FloorZones reduced={reduced} />

      {/* racking: pick bins low (coloured by zone), reserve cartons high */}
      <Static matrices={L.uprights} material={mats.steel} />
      <Static matrices={L.beams} material={mats.beam} />
      <Static matrices={L.decks} material={mats.deck} />
      <Static matrices={L.bins} colors={L.binColors} material={mats.bin} />
      <Static matrices={L.cartons} colors={L.cartonColors} material={mats.carton} />
      <instancedMesh ref={slotMarks} args={[UNIT_BOX, mats.slotMark, PICKS.length + 1]} frustumCulled={false}>
        <instancedBufferAttribute attach="instanceColor" args={[colors.slot, 3]} />
      </instancedMesh>

      {/* the routes: before (red, one order per trip) and the wave (cyan) */}
      {ghostPoints.map((pts, i) => (
        <Line
          key={i}
          ref={(el) => {
            ghostLines.current[i] = el as Line2 | null;
          }}
          points={pts}
          color="#e5484d"
          lineWidth={2.5}
          dashed
          dashSize={0.6}
          gapSize={0.35}
          transparent
          opacity={0}
          toneMapped={false}
          depthTest={false}
          renderOrder={10}
        />
      ))}
      <Line
        ref={waveLine}
        points={wavePoints}
        color="#0a84d8"
        lineWidth={3.5}
        dashed
        dashSize={0.9}
        gapSize={0.45}
        transparent
        opacity={0}
        toneMapped={false}
        depthTest={false}
        renderOrder={10}
      />

      {/* pack stations */}
      <Static matrices={L.benches} material={mats.bench} />
      <Static matrices={L.legs} material={mats.frame} />
      <Static matrices={L.cams} material={mats.cam} />
      <Static matrices={L.recs} material={mats.rec} />
      <instancedMesh ref={screens} args={[UNIT_BOX, mats.screen, STATIONS_X.length]}>
        <instancedBufferAttribute attach="instanceColor" args={[colors.screen, 3]} />
      </instancedMesh>

      {/* PK-10482 on P-05's bench, then down the line; PK-10477 gets stopped */}
      <group ref={heroBox} visible={false}>
        <mesh geometry={UNIT_BOX} material={mats.heroCarton} scale={[BOX.w, BOX.h, BOX.d]} />
        <mesh ref={heroLid} geometry={UNIT_BOX} material={mats.lid} position={[0, BOX.h / 2 + 0.01, 0]} scale={[BOX.w + 0.02, 0.02, BOX.d + 0.02]} />
        <mesh ref={heroLabel} geometry={UNIT_BOX} material={mats.labelPatch} position={[0.05, BOX.h / 2 + 0.025, 0]} scale={[0.24, 0.01, 0.18]} />
      </group>
      <mesh ref={blockedBox} geometry={UNIT_BOX} material={mats.blockedCarton} scale={[BOX.w, BOX.h, BOX.d]} visible={false} />

      {/* the picker's cart, filling up slot by slot; the item in flight */}
      <group ref={cart}>
        <mesh geometry={UNIT_BOX} material={mats.cart} position={[0, 0.32, 0]} scale={[0.66, 0.06, 1.0]} />
        <mesh geometry={UNIT_BOX} material={mats.cart} position={[0, 0.6, -0.48]} scale={[0.64, 0.6, 0.04]} />
        <mesh geometry={UNIT_BOX} material={mats.tote} position={[0, 0.48, 0.05]} scale={[0.58, 0.26, 0.86]} />
        <instancedMesh ref={cartItems} args={[UNIT_BOX, mats.carton, PICKS.length]} frustumCulled={false}>
          <instancedBufferAttribute attach="instanceColor" args={[colors.cartItem, 3]} />
        </instancedMesh>
      </group>
      <mesh ref={flying} geometry={UNIT_BOX} material={mats.item} scale={[0.3, 0.2, 0.3]} visible={false} />
      <mesh ref={follow} geometry={geo.ring} material={mats.follow} scale={[1.3, 1, 1.3]} visible={false} />

      {/* conveyor → Dispatch Gate → van, with the exception lane */}
      <mesh position={[(CONVEYOR.x0 + CONVEYOR.x1) / 2, CONVEYOR.y, CONVEYOR.z]} material={mats.belt}>
        <boxGeometry args={[conveyorLen, 0.12, 1]} />
      </mesh>
      <mesh position={[EXCEPTION.x, CONVEYOR.y - 0.02, (EXCEPTION.z0 + 0.6 + EXCEPTION.z1) / 2]} material={mats.frame}>
        <boxGeometry args={[0.8, 0.08, EXCEPTION.z1 - EXCEPTION.z0 - 0.6]} />
      </mesh>
      <Static matrices={L.frame} material={mats.frame} />
      <instancedMesh ref={parcels} args={[UNIT_BOX, mats.carton, POOL]} frustumCulled={false}>
        <instancedBufferAttribute attach="instanceColor" args={[colors.parcel, 3]} />
      </instancedMesh>
      <instancedMesh ref={gates} args={[UNIT_BOX, mats.gate, 3]}>
        <instancedBufferAttribute attach="instanceColor" args={[colors.gate, 3]} />
      </instancedMesh>
      <Static matrices={L.exceptionFrame} material={mats.exception} />
      <Static matrices={L.dock} material={mats.dock} />

      {/* the supervisor's command desk */}
      <mesh geometry={UNIT_BOX} material={mats.bench} position={[DESK.x, 0.8, DESK.z]} scale={[2.2, 0.06, 0.9]} />
      <mesh geometry={UNIT_BOX} material={mats.frame} position={[DESK.x, 0.4, DESK.z]} scale={[2.0, 0.8, 0.7]} />
      <mesh geometry={UNIT_BOX} material={mats.deskScreen} position={[DESK.x, 1.55, DESK.z - 0.3]} scale={[2.0, 1.1, 0.05]} />

      {/* people: same team */}
      <instancedMesh ref={blobs} args={[geo.blob, mats.shadow, WORKER_COUNT]} frustumCulled={false} />
      <instancedMesh ref={rings} args={[geo.ring, mats.ring, WORKER_COUNT]} frustumCulled={false} />
      <Crew count={WORKER_COUNT} poser={crew} look={looks.staff} materials={mats.crew} />
      <Crew count={GHOST_ROUTES.length} poser={ghostCrew} look={looks.ghost} materials={mats.ghostCrew} />

      {/* machines — next */}
      <instancedMesh ref={amrBodies} args={[geo.amr, mats.amr, AMR_COUNT]} frustumCulled={false} />
      <instancedMesh ref={amrLights} args={[geo.disc, mats.amrLight, AMR_COUNT]} frustumCulled={false} />

      {/* delivery vans at the dock; the first is loading */}
      {[CONVEYOR.z, CONVEYOR.z + 6].map((z, i) => (
        <group key={z} position={[VAN_X, 0, z]}>
          <mesh position={[0, 1.55, 0]} material={mats.van}>
            <boxGeometry args={[4.4, 2.3, 2.1]} />
          </mesh>
          <mesh position={[2.95, 1.25, 0]} material={mats.van}>
            <boxGeometry args={[1.5, 1.7, 2.0]} />
          </mesh>
          <mesh position={[3.45, 1.6, 0]} material={mats.vanDark}>
            <boxGeometry args={[0.55, 0.6, 1.9]} />
          </mesh>
          {[[-1.4, -1.05], [-1.4, 1.05], [2.7, -1.05], [2.7, 1.05]].map(([wx, wz]) => (
            <mesh key={`${wx}${wz}`} position={[wx, 0.42, wz]} geometry={geo.wheel} material={mats.vanDark} />
          ))}
          {i === 0 ? null : (
            <mesh position={[-2.22, 1.5, 0]} material={mats.vanDark}>
              <boxGeometry args={[0.04, 2.1, 1.9]} />
            </mesh>
          )}
          {[-0.8, 0.8].map((tz) => (
            <mesh key={tz} position={[-2.22, 0.9, tz]} material={mats.tail}>
              <boxGeometry args={[0.04, 0.2, 0.3]} />
            </mesh>
          ))}
        </group>
      ))}
    </group>
  );
}
