import maps from "@/data/maps.json";

/**
 * World layout for the story scene, in metres. Plain data and maths only (no
 * three.js import), so the DOM side can read slot codes and routes too.
 * The warehouse sits at the
 * origin and reads left → right like the real flow: storage racks at the back,
 * pack stations in the middle, the Dispatch Gate and the carrier on the right.
 * +z is the camera's usual side. The dotted map of Thailand is laid out around
 * the warehouse with Bangkok at the origin.
 */

export const BG = "#04070c";

export const PALETTE = {
  orange: "#f37521",
  cyan: "#5ec9d3",
  teal: "#48bfaa",
  blue: "#0d5f9f",
  sky: "#4aa8f0",
  amber: "#fab217",
  red: "#ff4d4d",
  green: "#4dff9a",
} as const;

export const FLOOR = { w: 56, d: 40 } as const;

/* ------------------------------------------------------------- storage */

/** Rows are 4.6 m apart, so each aisle is ~3.5 m wide — wide enough to see
    a picker and a cart in it from above. Levels 1–2 are pick slots (bins),
    3–4 reserve (cartons). */
export const RACK = {
  rows: [-17.2, -12.6, -8.0, -3.4],
  x0: -25,
  bay: 2.4,
  bays: 13,
  levels: [0.12, 1.15, 2.2, 3.25],
  h: 4.3,
  d: 1.1,
} as const;
export const ROW_GAP = 4.6;
export const RACK_X1 = RACK.x0 + RACK.bays * RACK.bay; // 6.2

/** Aisles between the rack rows; each is one zone (A, B, C). */
export const AISLES = [
  { zone: "A", z: -14.9, color: "#4aa8f0" },
  { zone: "B", z: -10.3, color: "#48bfaa" },
  { zone: "C", z: -5.7, color: "#fab217" },
] as const;
export const FRONT_AISLE_Z = -1.3;
export const AISLE_LEFT_X = -26.6;
export const AISLE_RIGHT_X = 7.8;

export const bayX = (bay: number) => RACK.x0 + (bay + 0.5) * RACK.bay;

/** A slot faces an aisle: side 1 is the rack on the aisle's north side, 2 the south. */
export function slot(aisle: 0 | 1 | 2, side: 1 | 2, bay: number, level: number) {
  const a = AISLES[aisle];
  const z = a.z + (side === 1 ? -1 : 1) * (ROW_GAP / 2 - RACK.d / 2 - 0.02);
  return {
    code: `${a.zone}${side}-${String(bay + 1).padStart(2, "0")}-${level + 1}`,
    pos: [bayX(bay), RACK.levels[level] + 0.42, z] as [number, number, number],
    /** centre of the rack row the slot belongs to */
    rowZ: a.z + (side === 1 ? -1 : 1) * (ROW_GAP / 2),
    side,
    stand: [bayX(bay), a.z] as [number, number],
    color: a.color,
  };
}

/* ---------------------------------------------------------------- pack */

export const STATIONS_X = [-16, -10, -4, 2, 8, 14] as const;
export const STATION_IDS = STATIONS_X.map((_, i) => `P-0${i + 1}`);
export const BENCH_Z = 1.5;
export const PACKER_Z = 2.65;
export const CART_Z = 0.15;
/** The station that packs the order we follow, and the one that gets congested. */
export const HERO_STATION = 4; // P-05
export const BUSY_STATION = 1; // P-02

/* ------------------------------------------------------------ dispatch */

export const CONVEYOR = { x0: -20, x1: 29.2, z: 4.4, y: 0.8 } as const;
export const GATE_X = 19.5;
export const EXCEPTION = { x: 21.5, z0: CONVEYOR.z, z1: 9.2 } as const;
export const VAN_X = 32;
/* ------------------------------------------------- the rest of the floor */

/** Inbound: dock doors in the left wall, pallets staged for receiving. */
export const INBOUND = { x0: -26, x1: -17.5, z0: 7.5, z1: 17, doors: [10, 15] } as const;
export const RECEIVING = { x: -15.5, z: 9.2 } as const;
/** Returns: a bench with tubs of returned items. */
export const RETURNS = { x: -9.5, z: 12 } as const;
/** The command centre: a glass room with the supervisor's desk. */
export const OFFICE = { x0: -4, x1: 7.5, z0: 8.4, z1: 16 } as const;
export const DESK = { x: 1.75, z: 12 } as const; // supervisor's command desk
/** Outbound staging: a lane per carrier, roll cages of sorted parcels. */
export const STAGING = { x0: 10, x1: 17.6, z0: 8.2, z1: 16.5, colors: ["#f37521", "#fab217", "#e5484d"] } as const;

/** Where the brain hangs over the floor in the Intelligence chapter. */
export const BRAIN_POS: [number, number, number] = [0, 15, -4];

/* --------------------------------------------------- the wave we follow */

/** Pick tasks of wave W-0193 in walk order (the pick sheet's order), all on
    low pick slots; the reserve slot above one of them is passed over. */
export const PICKS = [
  slot(0, 1, 2, 0),
  slot(0, 2, 8, 0),
  slot(1, 1, 11, 1),
  slot(1, 2, 4, 0),
  slot(2, 1, 6, 1),
];
export const RESERVE_SLOT = slot(0, 2, 8, 3);

type P2 = [number, number];

/** A walkable polyline with arc-length lookup. */
export class Route {
  readonly pts: P2[];
  readonly cum: number[];
  readonly length: number;
  constructor(pts: P2[]) {
    this.pts = pts;
    this.cum = [0];
    for (let i = 1; i < pts.length; i++) {
      this.cum.push(this.cum[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
    }
    this.length = this.cum[this.cum.length - 1];
  }
  /** Position and heading at fraction u (0–1) of the way along. */
  at(u: number): { x: number; z: number; heading: number } {
    const d = Math.min(Math.max(u, 0), 1) * this.length;
    let i = 1;
    while (i < this.cum.length - 1 && this.cum[i] < d) i++;
    const [ax, az] = this.pts[i - 1];
    const [bx, bz] = this.pts[i];
    const seg = this.cum[i] - this.cum[i - 1] || 1;
    const f = (d - this.cum[i - 1]) / seg;
    return { x: ax + (bx - ax) * f, z: az + (bz - az) * f, heading: Math.atan2(bx - ax, bz - az) };
  }
  /** Fraction along the route closest to a point (used to tick off stops). */
  fractionAt(x: number, z: number) {
    let best = 0;
    let bestD = Infinity;
    for (let i = 1; i < this.pts.length; i++) {
      const [ax, az] = this.pts[i - 1];
      const [bx, bz] = this.pts[i];
      const vx = bx - ax;
      const vz = bz - az;
      const len2 = vx * vx + vz * vz || 1;
      const t = Math.min(1, Math.max(0, ((x - ax) * vx + (z - az) * vz) / len2));
      const dd = (ax + vx * t - x) ** 2 + (az + vz * t - z) ** 2;
      if (dd < bestD) {
        bestD = dd;
        best = (this.cum[i - 1] + Math.sqrt(len2) * t) / this.length;
      }
    }
    return best;
  }
}

const A = AISLES[0].z;
const B = AISLES[1].z;
const C = AISLES[2].z;
const L = AISLE_LEFT_X;
const R = AISLE_RIGHT_X;
const F = FRONT_AISLE_Z;
const heroCart = STATIONS_X[HERO_STATION];

/** The wave route: every aisle once, in walking order, ending at P-05. */
export const WAVE_ROUTE = new Route([
  // ends a cart-length short of the bench, so the cart parks beside it
  [L, F], [L, A], [R, A], [R, B], [L, B], [L, C], [R, C], [R, F], [heroCart, F], [heroCart, CART_Z - 0.9],
]);
export const PICK_STOPS = PICKS.map((p) => WAVE_ROUTE.fractionAt(p.stand[0], p.stand[1]));

/** Share of the walk spent standing at each slot, picking. */
const DWELL = 0.07;

/**
 * Where the picker is for a pick progress p (0–1): walking between slots, or
 * stopped at slot `stop` and `dwell` (0–1) of the way through picking it.
 * `picked` counts slots finished — the pick sheet and the cart follow it.
 */
export function pickPath(p: number) {
  const n = PICK_STOPS.length;
  const travel = 1 - DWELL * n;
  let acc = 0;
  let prevU = 0;
  for (let i = 0; i < n; i++) {
    const leg = (PICK_STOPS[i] - prevU) * travel;
    if (p < acc + leg) return { u: prevU + (p - acc) / travel, stop: -1, dwell: 0, picked: i };
    acc += leg;
    if (p < acc + DWELL) {
      const dwell = (p - acc) / DWELL;
      return { u: PICK_STOPS[i], stop: i, dwell, picked: dwell > 0.6 ? i + 1 : i };
    }
    acc += DWELL;
    prevU = PICK_STOPS[i];
  }
  return { u: Math.min(1, prevU + (p - acc) / travel), stop: -1, dwell: 0, picked: n };
}

/** "Before": one order per trip, back and forth through the same aisles. */
export const GHOST_ROUTES = [
  new Route([[L, F], [L, C], [0, C], [L, C], [L, A], [-9, A], [L, A], [L, F], [STATIONS_X[1], F], [STATIONS_X[1], CART_Z]]),
  new Route([[L, F], [L, B], [4, B], [L, B], [L, C], [-15, C], [L, C], [L, F], [STATIONS_X[2], F], [STATIONS_X[2], CART_Z]]),
  new Route([[R, F], [R, A], [-20, A], [R, A], [R, B], [-6, B], [R, B], [R, F], [STATIONS_X[3], F], [STATIONS_X[3], CART_Z]]),
];

/* --------------------------------------------------------------- people */

export const PACKERS = STATIONS_X.map((x) => [x, PACKER_Z] as const);

/** Everyone on the floor, by index. The brain's beams and the DOM labels
    index into `live.heads` with these. */
export const PEOPLE = {
  heroPicker: 6,
  picker2: 7,
  supervisor: 8,
  receiver: 9,
  returns: 10,
} as const;
export const WORKER_COUNT = 11;
export const AMR_COUNT = 2;

/* ------------------------------------------------------- live positions */

/** World positions the scene writes every frame and the brain's beams read. */
export const live = {
  heads: new Float32Array(WORKER_COUNT * 3),
  amrs: new Float32Array(AMR_COUNT * 3),
};

/* ------------------------------------------------------------------ map */

export const MAP_SCALE = 9.5;
const TH = maps.th;
const [BKK_X, BKK_Y] = TH.pins.bangkok;

export const mapToWorld = (x: number, y: number): [number, number] => [(x - BKK_X) * MAP_SCALE, (y - BKK_Y) * MAP_SCALE];

export const MAP_POINTS = TH.points;
export const MAP_PINS: Record<string, [number, number]> = Object.fromEntries(
  Object.entries(TH.pins).map(([k, [x, y]]) => [k, [x, y]]),
);
export const MAP_SIZE = { w: TH.width * MAP_SCALE, h: TH.height * MAP_SCALE };
export const MAP_CENTER = mapToWorld(TH.width / 2, TH.height / 2);

/** Map cities in world space. */
export const CITY = Object.fromEntries(Object.entries(MAP_PINS).map(([k, [x, y]]) => [k, mapToWorld(x, y)])) as Record<
  string,
  [number, number]
>;

/** The dotted-map point nearest a city plus an offset — "a shop nearby". */
function nearbyPoint(city: string, dx: number, dy: number): [number, number] {
  const [cx, cy] = MAP_PINS[city];
  let best = MAP_POINTS[0];
  let bestD = Infinity;
  for (const p of MAP_POINTS) {
    const d = (p[0] - (cx + dx)) ** 2 + (p[1] - (cy + dy)) ** 2;
    if (d < bestD) {
      bestD = d;
      best = p;
    }
  }
  return mapToWorld(best[0], best[1]);
}

/** Micro-fulfillment centres used in the "closer" beat, each next to a city.
    Chiang Mai first: it is where the order we follow is going. */
export const LOCAL_HOPS = [
  { city: "chiangMai", from: nearbyPoint("chiangMai", 1.6, 1.2) },
  { city: "khonKaen", from: nearbyPoint("khonKaen", -1.4, 1.4) },
  { city: "hatYai", from: nearbyPoint("hatYai", 1.2, -1.6) },
  { city: "ubon", from: nearbyPoint("ubon", -1.6, -1.0) },
];

export { hash } from "@/lib/hash";
