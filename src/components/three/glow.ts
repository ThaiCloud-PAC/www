import { Color } from "three";

/** A colour pushed past 1.0 so it crosses the bloom threshold. */
export const glow = (hex: string, intensity: number) => new Color(hex).multiplyScalar(intensity);
