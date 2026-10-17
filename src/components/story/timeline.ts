/**
 * The story timeline, shared by the DOM overlays and the 3D scene.
 *
 * Scroll position is turned into one continuous number, the *beat*. Beat `n` is
 * exactly `n` when panel `n` sits in the middle of the viewport and moves
 * linearly in between. Everything that animates with the story is a function
 * of the beat, so the text, the labels and the scene can never drift apart —
 * and the demo moves at the reader's pace.
 *
 *   0  hero
 *   1  Speed — the problem: one order per trip
 *   2  a wave, stock allocated, picked in walking order
 *   3  packed at P-05: scan-verified, on VDO Proof
 *   4  Dispatch Gate: OMS check, a cancelled order blocked, carrier handover
 *   5  4,000 → 20,000 orders a day — same space, same team
 *   6  Intelligence — the floor runs on people's memory
 *   7  the brain hands out the work
 *   8  people stay in control
 *   9  Network — far from Bangkok
 *  10  25,000+ parcel shops
 *  11  served from a shop nearby
 */
export const clamp01 = (x: number) => (x < 0 ? 0 : x > 1 ? 1 : x);

export function smoothstep(e0: number, e1: number, x: number) {
  const t = clamp01((x - e0) / (e1 - e0));
  return t * t * (3 - 2 * t);
}

/** 0 before `from`, 1 after `to`, eased in between. */
export const ramp = (beat: number, from: number, to: number) => smoothstep(from, to, beat);
/** Same, without easing — for things that should move at scroll speed. */
export const lin = (beat: number, from: number, to: number) => clamp01((beat - from) / (to - from));
/** Visible inside a window, with soft edges: fades in a→b0, out b1→c. */
export const win = (b: number, a: number, b0: number, b1: number, c: number) => ramp(b, a, b0) * (1 - ramp(b, b1, c));

/* ---------- Speed ---------- */
/** Three pickers, one order each, criss-crossing the same aisles. */
export const ghosts = (b: number) => win(b, 0.45, 0.9, 1.45, 1.85);
/** The wave's route drawn on the floor. */
export const routeLine = (b: number) => win(b, 1.3, 1.65, 2.6, 2.85);
/** How far the picker has walked the wave route. */
export const pickProgress = (b: number) => lin(b, 1.55, 2.45);
/** Packing the order at P-05: scans, the wrong-size catch, closing the box. */
export const packProgress = (b: number) => lin(b, 2.7, 3.5);
/** The box's ride to the Dispatch Gate and onto the van. */
export const dispatchProgress = (b: number) => lin(b, 3.65, 4.45);

export const ORDERS_FROM = 4000;
export const ORDERS_TO = 20000;
/** 0 → 1 as the customer grows from 4,000 to 20,000 orders a day. */
export const throughput = (b: number) => ramp(b, 4.3, 4.95);
export const ordersPerDay = (b: number) => ORDERS_FROM + (ORDERS_TO - ORDERS_FROM) * throughput(b);
/** "Same space. Same team." — the footprint outline and the people light up. */
export const sameSpace = (b: number) => win(b, 4.55, 4.85, 5.45, 5.8);

/* ---------- Intelligence ---------- */
export const questions = (b: number) => win(b, 5.55, 5.85, 6.4, 6.65);
export const brainOn = (b: number) => win(b, 6.3, 6.85, 8.5, 9.0);
export const beamsOn = (b: number) => win(b, 6.6, 7.0, 8.35, 8.75);
export const tasks = (b: number) => win(b, 6.65, 7.0, 7.55, 7.85);
export const machinesOn = (b: number) => win(b, 6.7, 7.15, 8.5, 9.0);
export const bottleneck = (b: number) => win(b, 6.8, 7.1, 7.6, 7.9);
export const control = (b: number) => win(b, 7.5, 7.85, 8.45, 8.75);

/* ---------- Network ---------- */
export const mapBase = (b: number) => ramp(b, 8.4, 9.05);
/** Bangkok → Chiang Mai, the long way. */
export const longArc = (b: number) => ramp(b, 8.8, 9.15);
/** Radius of the wave of parcel shops lighting up outward from Bangkok. */
export const mapWave = (b: number) => ramp(b, 9.4, 9.95);
export const mfcOn = (b: number) => ramp(b, 10.25, 10.75);
/** Short hops from a shop nearby, and the long arc stepping back. */
export const localArcs = (b: number) => ramp(b, 10.5, 10.9);
