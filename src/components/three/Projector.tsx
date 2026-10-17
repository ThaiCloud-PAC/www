"use client";

import { useLayoutEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";
import { anchors, labelEls, setAnchor } from "@/components/story/labels";
import {
  AISLES,
  BENCH_Z,
  CITY,
  CONVEYOR,
  EXCEPTION,
  FLOOR,
  GATE_X,
  HERO_STATION,
  INBOUND,
  OFFICE,
  RETURNS,
  STAGING,
  BUSY_STATION,
  LOCAL_HOPS,
  PICKS,
  RESERVE_SLOT,
  STATIONS_X,
  VAN_X,
} from "./world";

const v = new Vector3();
/** Each label's height, measured once it first shows (labels grow upward from their anchor). */
const heights = new WeakMap<HTMLElement, number>();

/** Desktop only (the `lg` layout): where the story's copy column ends. Mirrors
    Beat.tsx — a max-w-7xl container with px-8, holding a 34rem panel. */
function copyEdge(width: number) {
  if (width < 1024) return 0;
  return (width - Math.min(width, 1280)) / 2 + 32 + 544 + 12;
}

/** Fixed anchors; moving ones (people, boxes) are written by the warehouse. */
function setStaticAnchors() {
  setAnchor("zone.storage", -9.5, 5.8, AISLES[1].z);
  setAnchor("zone.pack", -1, 2.3, BENCH_Z);
  setAnchor("zone.gate", GATE_X, 3.1, CONVEYOR.z);
  setAnchor("zone.carrier", VAN_X, 3.2, CONVEYOR.z);
  setAnchor("zone.inbound", (INBOUND.x0 + INBOUND.x1) / 2, 2.4, (INBOUND.z0 + INBOUND.z1) / 2);
  setAnchor("zone.returns", RETURNS.x, 2.0, RETURNS.z);
  setAnchor("zone.office", (OFFICE.x0 + OFFICE.x1) / 2, 3.0, (OFFICE.z0 + OFFICE.z1) / 2);
  setAnchor("zone.staging", (STAGING.x0 + STAGING.x1) / 2, 2.2, (STAGING.z0 + STAGING.z1) / 2);
  PICKS.forEach((p, i) => setAnchor(`pick.${i}`, p.pos[0], p.pos[1] + 0.35, p.pos[2]));
  setAnchor("reserve", RESERVE_SLOT.pos[0], RESERVE_SLOT.pos[1] + 0.35, RESERVE_SLOT.pos[2]);
  setAnchor("station.hero", STATIONS_X[HERO_STATION], 2.05, BENCH_Z);
  setAnchor("station.busy", STATIONS_X[BUSY_STATION], 2.05, BENCH_Z);
  setAnchor("exception", EXCEPTION.x, 1.5, EXCEPTION.z1);
  setAnchor("same.space", -FLOOR.w / 2 + 4, 0.2, FLOOR.d / 2);
  setAnchor("city.bangkok", 0, 8, 0);
  setAnchor("city.chiangMai", CITY.chiangMai[0], 8, CITY.chiangMai[1]);
  setAnchor("mfc.chiangMai", LOCAL_HOPS[0].from[0], 12, LOCAL_HOPS[0].from[1]);
}

/**
 * Projects every label's anchor to the screen and moves its DOM element — in
 * the same frame the scene renders, so labels never trail their objects.
 * Mounted last in the canvas so the warehouse has already written this
 * frame's moving anchors.
 */
export default function Projector() {
  useLayoutEffect(setStaticAnchors, []);

  useFrame(({ camera, size }) => {
    labelEls.forEach((id, el) => {
      const a = anchors.get(id);
      if (!a) return;
      v.set(a[0], a[1], a[2]).project(camera); // includes the CameraRig's lens shift
      const behind = v.z > 1 || v.z < -1;
      // Keep labels on screen: a pill near the edge slides in rather than clipping.
      let h = heights.get(el);
      if (h === undefined) {
        const m = (el.firstElementChild as HTMLElement | null)?.offsetHeight ?? 0;
        if (m > 0) heights.set(el, (h = m));
      }
      const rx = (v.x * 0.5 + 0.5) * size.width;
      const ry = (-v.y * 0.5 + 0.5) * size.height;
      // off screen: hide; near an edge: slide the label in rather than clip it
      const off = rx < -40 || rx > size.width + 40 || ry < 40 || ry > size.height + 40;
      const margin = Math.min(120, size.width / 4);
      // On desktop the copy column is the left edge: a label that would run
      // into the text slides right instead (a picker in the far-left aisle).
      const edge = copyEdge(size.width);
      const left = edge ? edge + (el.firstElementChild as HTMLElement | null)!.offsetWidth / 2 : margin;
      const x = Math.min(size.width - margin, Math.max(left, rx));
      // below the floating header, whole label included
      const y = Math.min(size.height - 12, Math.max(84 + (h ?? 0), ry));
      el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
      el.style.visibility = behind || off ? "hidden" : "";
    });
  });

  return null;
}
