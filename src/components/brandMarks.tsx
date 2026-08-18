import { BRAND_PATHS } from "./brandIcons";

/**
 * Icon-only brand tiles for the platform map (36×36, rounded).
 * Real logo files can replace any of these: drop `/public/brand/<key>.png|svg`
 * and set `img: "/brand/<key>.png"` on the entry — the tile renders the image
 * clipped to the same rounded square.
 */
export type Mark = {
  key: string;
  label: string;
  bg: string;
  border?: boolean;
  img?: string;
  draw: () => React.ReactNode; // drawn inside a 36×36 box
};

const glyph = (slug: keyof typeof BRAND_PATHS, fill: string, s = 0.9) => (
  <g transform={`translate(${18 - 12 * s} ${18 - 12 * s}) scale(${s})`}>
    <path d={BRAND_PATHS[slug].path} fill={fill} />
  </g>
);

const word = (t: string, fill: string, size = 7.5, extra = "") => (
  <text x="18" y="21.5" textAnchor="middle" fontSize={size} fontWeight="800" fill={fill} fontFamily="Kanit, Arial, sans-serif" style={{ letterSpacing: extra ? undefined : "0.5px", fontStyle: extra ? "italic" : "normal" }}>
    {t}
  </text>
);

export const CHANNEL_MARKS: Mark[] = [
  { key: "shopee", label: "Shopee", bg: "#EE4D2D", draw: () => glyph("shopee", "#ffffff") },
  {
    key: "lazada", label: "Lazada", bg: "#ffffff", border: true,
    draw: () => (
      <>
        <defs>
          <linearGradient id="lzGrad" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#F5A623" />
            <stop offset="0.5" stopColor="#F36F21" />
            <stop offset="1" stopColor="#F5057E" />
          </linearGradient>
        </defs>
        {/* Lazada origami heart */}
        <path d="M6 9 L18 15.5 L30 9 V21.5 L18 29 L6 21.5 Z" fill="url(#lzGrad)" />
        <path d="M18 15.5 V29 L30 21.5 V9 Z" fill="#000" opacity="0.12" />
        <path d="M6 9 L18 15.5 L30 9 L18 4 Z" fill="#fff" opacity="0.18" />
      </>
    ),
  },
  { key: "tiktok", label: "TikTok Shop", bg: "#000000", draw: () => glyph("tiktok", "#ffffff") },
  { key: "line", label: "LINE", bg: "#06C755", draw: () => glyph("line", "#ffffff") },
  { key: "shopscape", label: "ShopSCAPE", bg: "#1F6FEB", draw: () => word("S", "#ffffff", 20) },
  {
    key: "storefront", label: "Storefront", bg: "#035897",
    draw: () => (
      <g fill="#ffffff">
        {/* awning */}
        <path d="M7 12 L9.5 7 H26.5 L29 12 Z" />
        <path d="M7 12 H29 V15.5 a3.6 3.6 0 0 1 -7.2 0 a3.6 3.6 0 0 1 -7.6 0 a3.6 3.6 0 0 1 -7.2 0 Z" opacity="0.9" />
        {/* body + door + window */}
        <rect x="9" y="18" width="18" height="11" rx="1" />
        <rect x="12" y="21" width="5" height="8" fill="#035897" />
        <rect x="19.5" y="21" width="5" height="4" fill="#035897" />
      </g>
    ),
  },
];

export const CARRIER_MARKS: Mark[] = [
  { key: "kerry", label: "Kerry Express", bg: "#F37021", draw: () => word("KERRY", "#ffffff", 7) },
  {
    key: "flash", label: "Flash Express", bg: "#FFE600",
    draw: () => (
      <>
        <path d="M20 5 L13.5 17 H18 L16 26 L23 13.5 H18.6 Z" fill="#111" />
        <text x="18" y="33" textAnchor="middle" fontSize="6.2" fontWeight="800" fontStyle="italic" fill="#111" fontFamily="Kanit, Arial, sans-serif">FLASH</text>
      </>
    ),
  },
  { key: "jnt", label: "J&T Express", bg: "#E31E24", draw: () => word("J&T", "#ffffff", 11) },
  {
    key: "thaipost", label: "Thailand Post", bg: "#ffffff", border: true,
    draw: () => (
      <>
        {/* wing: navy sweep + red tip */}
        <path d="M5 12 L26 9 L20 18 L9 20 Z" fill="#2E3192" />
        <path d="M26 9 L31 11 L22 15 Z" fill="#E11D2A" />
        <path d="M9 20 L20 18 L14 24 Z" fill="#B7BCC6" />
        <text x="18" y="30" textAnchor="middle" fontSize="6" fontWeight="700" fill="#2E3192" fontFamily="Kanit, Arial, sans-serif">POST</text>
      </>
    ),
  },
  {
    key: "ninjavan", label: "Ninja Van", bg: "#ffffff", border: true,
    draw: () => (
      <>
        <path d="M18 5 C 12 5, 8 9.5, 8 15 C 8 22, 18 31, 18 31 C 18 31, 28 22, 28 15 C 28 9.5, 24 5, 18 5 Z" fill="#C41230" />
        <circle cx="18" cy="14.5" r="6.5" fill="#fff" />
        <circle cx="18" cy="14.5" r="5.4" fill="#111" />
        <rect x="13" y="12.6" width="10" height="3.6" rx="1.8" fill="#fff" />
        <circle cx="15.8" cy="14.4" r="1" fill="#111" />
        <circle cx="20.2" cy="14.4" r="1" fill="#111" />
      </>
    ),
  },
  { key: "dhl", label: "DHL", bg: "#FFCC00", draw: () => glyph("dhl", "#D40511", 1.1) },
];

export function BrandTile({ m, x, y, size = 36 }: { m: Mark; x: number; y: number; size?: number }) {
  const s = size / 36;
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <title>{m.label}</title>
      <clipPath id={`clip-${m.key}`}>
        <rect x="0" y="0" width="36" height="36" rx="10" />
      </clipPath>
      <rect x="0" y="0" width="36" height="36" rx="10" fill={m.bg} stroke={m.border ? "#d6e1ec" : "none"} />
      {m.img ? <image href={m.img} x="0" y="0" width="36" height="36" clipPath={`url(#clip-${m.key})`} preserveAspectRatio="xMidYMid slice" /> : m.draw()}
    </g>
  );
}
