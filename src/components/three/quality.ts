/**
 * Phones, tablets and narrow windows get a lighter render: no bloom pass, a
 * lower pixel ratio, no brain light. Read once at load; the scene is only ever
 * imported in the browser (Story loads it with ssr: false).
 */
export const LITE =
  typeof window !== "undefined" && (window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 1024);
