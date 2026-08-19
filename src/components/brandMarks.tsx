/**
 * Brand tiles for the platform map.
 * - Channels: square 36×36 tiles with the icon part of each brand mark.
 * - Carriers: 84×36 logo pills with the official wordmark.
 * Files live in /public/brand/ (Wikimedia Commons SVGs; ShopSCAPE from
 * digithun.com; Storefront is our own glyph). Swap any file in place.
 */
export type Mark = {
  key: string;
  label: string;
  bg: string;
  border?: boolean;
  img?: string;
  pad?: number; // inner padding for img tiles
  draw?: () => React.ReactNode; // fallback vector, drawn inside a 36×36 box
};

export const CHANNEL_MARKS: Mark[] = [
  { key: "shopee", label: "Shopee", bg: "#ffffff", border: true, img: "/brand/shopee-bag.svg", pad: 6 },
  { key: "lazada", label: "Lazada", bg: "#ffffff", border: true, img: "/brand/lazada-heart.svg", pad: 6 },
  { key: "tiktok", label: "TikTok Shop", bg: "#ffffff", border: true, img: "/brand/tiktok.svg", pad: 3 },
  { key: "line", label: "LINE", bg: "#ffffff", border: true, img: "/brand/line.svg", pad: 3 },
  { key: "shopscape", label: "ShopSCAPE", bg: "#ffffff", border: true, img: "/brand/shopscape-s.png", pad: 7 },
  {
    key: "storefront", label: "Storefront", bg: "#035897",
    draw: () => (
      <g fill="#ffffff">
        <path d="M7 12 L9.5 7 H26.5 L29 12 Z" />
        <path d="M7 12 H29 V15.5 a3.6 3.6 0 0 1 -7.2 0 a3.6 3.6 0 0 1 -7.6 0 a3.6 3.6 0 0 1 -7.2 0 Z" opacity="0.9" />
        <rect x="9" y="18" width="18" height="11" rx="1" />
        <rect x="12" y="21" width="5" height="8" fill="#035897" />
        <rect x="19.5" y="21" width="5" height="4" fill="#035897" />
      </g>
    ),
  },
];

export const CARRIER_MARKS: Mark[] = [
  { key: "kerry", label: "Kerry Express", bg: "#ffffff", border: true, img: "/brand/kerry.svg", pad: 4 },
  { key: "flash", label: "Flash Express", bg: "#ffffff", border: true, img: "/brand/flash.svg", pad: 8 },
  { key: "jnt", label: "J&T Express", bg: "#ffffff", border: true, img: "/brand/jnt.svg", pad: 8 },
  { key: "thaipost", label: "Thailand Post", bg: "#ffffff", border: true, img: "/brand/thaipost.svg", pad: 4 },
  { key: "ninjavan", label: "Ninja Van", bg: "#ffffff", border: true, img: "/brand/ninjavan.svg", pad: 7 },
  { key: "dhl", label: "DHL", bg: "#FFCC00", img: "/brand/dhl.svg", pad: 8 },
];

/** Square icon tile (36×36) or logo pill (w×36) rendered inside the map SVG. */
export function BrandTile({ m, x, y, w = 36, h = 36 }: { m: Mark; x: number; y: number; w?: number; h?: number }) {
  const pad = m.pad ?? 4;
  const r = Math.min(10, h / 3);
  return (
    <g transform={`translate(${x} ${y})`}>
      <title>{m.label}</title>
      <rect x="0" y="0" width={w} height={h} rx={r} fill={m.bg} stroke={m.border ? "#d6e1ec" : "none"} />
      {m.img ? (
        <image href={m.img} x={pad} y={pad} width={w - pad * 2} height={h - pad * 2} preserveAspectRatio="xMidYMid meet" />
      ) : (
        <g transform={`scale(${h / 36})`}>{m.draw?.()}</g>
      )}
    </g>
  );
}
