"use client";

import { useMemo } from "react";
import {
  CapsuleGeometry,
  Color,
  CylinderGeometry,
  Euler,
  InstancedMesh,
  Matrix4,
  Quaternion,
  SphereGeometry,
  Vector3,
  type Material,
} from "three";

/**
 * Cartoon warehouse staff, all instanced: a big round head with eyes, a hard
 * hat, a chunky body with a hi-vis vest, and arms and legs that swing as they
 * walk. Parts are posed every frame from one pose per person.
 */

export type Pose = {
  x: number;
  z: number;
  /** facing, radians (0 = +z) */
  heading: number;
  /** walk cycle phase, radians — advance it with distance walked */
  phase: number;
  /** 0 standing … 1 walking */
  walk: number;
  /** 0 … 1 arms busy in front (packing, scanning) */
  work: number;
  /** time, for idle motion */
  t: number;
  scale: number;
};

export type CrewLook = {
  shirt: Color[];
  vest: Color[];
  hat: Color[];
};

/** Part geometry, sized for a ~1.6 m cartoon person standing at y = 0. */
const GEO = {
  leg: new CapsuleGeometry(0.085, 0.2, 4, 8),
  body: new CapsuleGeometry(0.25, 0.2, 6, 12),
  vest: new CylinderGeometry(0.262, 0.262, 0.2, 14),
  arm: new CapsuleGeometry(0.065, 0.2, 4, 8),
  head: new SphereGeometry(0.28, 20, 14),
  eye: new SphereGeometry(0.034, 8, 6),
  hat: new SphereGeometry(0.29, 18, 8, 0, Math.PI * 2, 0, Math.PI / 2),
  brim: new CylinderGeometry(0.33, 0.33, 0.025, 18),
};

const HIP_Y = 0.4;
const SHOULDER_Y = 0.95;
const HEAD_Y = 1.36;

const _base = new Matrix4();
const _joint = new Matrix4();
const _part = new Matrix4();
const _q = new Quaternion();
const _e = new Euler();
const _v = new Vector3();
const _s = new Vector3();
const ONE = new Vector3(1, 1, 1);
const NO_ROT = new Quaternion();

/** base · T(pivot) · Rx(pitch) · T(offset) · S(size) */
function part(
  out: Matrix4,
  pivot: [number, number, number],
  pitch: number,
  offset: [number, number, number],
  size: [number, number, number] = [1, 1, 1],
) {
  _joint.compose(_v.set(...pivot), _q.setFromEuler(_e.set(pitch, 0, 0)), ONE);
  _part.compose(_v.set(...offset), NO_ROT, _s.set(...size));
  return out.copy(_base).multiply(_joint).multiply(_part);
}

const _out = new Matrix4();

export class CrewPoser {
  legs: InstancedMesh | null = null;
  body: InstancedMesh | null = null;
  vest: InstancedMesh | null = null;
  arms: InstancedMesh | null = null;
  head: InstancedMesh | null = null;
  eyes: InstancedMesh | null = null;
  hat: InstancedMesh | null = null;
  brim: InstancedMesh | null = null;

  /** Writes one person's parts. Returns the head-top height for labels. */
  set(i: number, p: Pose) {
    const { legs, body, vest, arms, head, eyes, hat, brim } = this;
    if (!legs || !body || !vest || !arms || !head || !eyes || !hat || !brim) return 0;
    const swing = Math.sin(p.phase) * 0.6 * p.walk;
    const bob = Math.abs(Math.cos(p.phase)) * 0.05 * p.walk + Math.sin(p.t * 2 + i) * 0.008;
    // a little side-to-side waddle when walking, a slow sway when standing
    const roll = Math.sin(p.phase) * 0.06 * p.walk;
    const s = Math.max(0.0001, p.scale);
    _base.compose(_v.set(p.x, bob * s, p.z), _q.setFromEuler(_e.set(0, p.heading, roll)), _s.set(s, s, s));

    legs.setMatrixAt(i * 2, part(_out, [-0.11, HIP_Y, 0], swing, [0, -0.17, 0]));
    legs.setMatrixAt(i * 2 + 1, part(_out, [0.11, HIP_Y, 0], -swing, [0, -0.17, 0]));
    body.setMatrixAt(i, part(_out, [0, 0.72, 0], 0, [0, 0, 0], [1, 1, 0.9]));
    vest.setMatrixAt(i, part(_out, [0, 0.74, 0], 0, [0, 0, 0], [1, 1, 0.92]));

    // arms: swing opposite the legs when walking; reach forward when working
    const reach = -1.1 * p.work;
    const busy = Math.sin(p.t * 5 + i * 1.3) * 0.35 * p.work;
    arms.setMatrixAt(i * 2, part(_out, [-0.3, SHOULDER_Y, 0], -swing * 0.9 + reach + busy, [0, -0.15, 0]));
    arms.setMatrixAt(i * 2 + 1, part(_out, [0.3, SHOULDER_Y, 0], swing * 0.9 + reach - busy, [0, -0.15, 0]));

    // head, with a small nod while walking
    const nod = Math.sin(p.phase * 2) * 0.04 * p.walk;
    head.setMatrixAt(i, part(_out, [0, HEAD_Y, 0], nod, [0, 0, 0]));
    eyes.setMatrixAt(i * 2, part(_out, [0, HEAD_Y, 0], nod, [-0.095, 0.03, 0.255]));
    eyes.setMatrixAt(i * 2 + 1, part(_out, [0, HEAD_Y, 0], nod, [0.095, 0.03, 0.255]));
    hat.setMatrixAt(i, part(_out, [0, HEAD_Y + 0.06, 0], nod - 0.08, [0, 0, 0]));
    brim.setMatrixAt(i, part(_out, [0, HEAD_Y + 0.06, 0], nod - 0.08, [0, 0, 0.05]));
    return (HEAD_Y + 0.4) * s + bob * s;
  }

  commit() {
    for (const m of [this.legs, this.body, this.vest, this.arms, this.head, this.eyes, this.hat, this.brim]) {
      if (m) m.instanceMatrix.needsUpdate = true;
    }
  }
}

/** The instanced meshes for `count` people; pose them through `poser`. */
export function Crew({
  count,
  poser,
  look,
  materials,
}: {
  count: number;
  poser: CrewPoser;
  look: CrewLook;
  materials: { cloth: Material; skin: Material; glow: Material; eye: Material; hat: Material; legs: Material };
}) {
  const colors = useMemo(
    () => ({
      shirt: new Float32Array(look.shirt.flatMap((c) => c.toArray())),
      vest: new Float32Array(look.vest.flatMap((c) => c.toArray())),
      hat: new Float32Array(look.hat.flatMap((c) => c.toArray())),
    }),
    [look],
  );
  return (
    <group>
      <instancedMesh ref={(m) => void (poser.legs = m)} args={[GEO.leg, materials.legs, count * 2]} frustumCulled={false} />
      <instancedMesh ref={(m) => void (poser.body = m)} args={[GEO.body, materials.cloth, count]} frustumCulled={false}>
        <instancedBufferAttribute attach="instanceColor" args={[colors.shirt, 3]} />
      </instancedMesh>
      <instancedMesh ref={(m) => void (poser.vest = m)} args={[GEO.vest, materials.glow, count]} frustumCulled={false}>
        <instancedBufferAttribute attach="instanceColor" args={[colors.vest, 3]} />
      </instancedMesh>
      <instancedMesh ref={(m) => void (poser.arms = m)} args={[GEO.arm, materials.skin, count * 2]} frustumCulled={false} />
      <instancedMesh ref={(m) => void (poser.head = m)} args={[GEO.head, materials.skin, count]} frustumCulled={false} />
      <instancedMesh ref={(m) => void (poser.eyes = m)} args={[GEO.eye, materials.eye, count * 2]} frustumCulled={false} />
      <instancedMesh ref={(m) => void (poser.hat = m)} args={[GEO.hat, materials.hat, count]} frustumCulled={false}>
        <instancedBufferAttribute attach="instanceColor" args={[colors.hat, 3]} />
      </instancedMesh>
      <instancedMesh ref={(m) => void (poser.brim = m)} args={[GEO.brim, materials.hat, count]} frustumCulled={false}>
        <instancedBufferAttribute attach="instanceColor" args={[colors.hat, 3]} />
      </instancedMesh>
    </group>
  );
}
