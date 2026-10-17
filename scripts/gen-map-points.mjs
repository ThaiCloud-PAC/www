// Precomputes the dotted grid of Thailand used by the network chapter's 3D
// field. Run once after changing a parameter:
//   node scripts/gen-map-points.mjs
// dotted-map is a devDependency only — the site ships just the JSON it writes.
import { writeFileSync } from "node:fs";
import DottedMap from "dotted-map";

const r = (n) => Math.round(n * 100) / 100;

function grid({ country, height, pins }) {
  const map = new DottedMap({ height, grid: "diagonal", countries: [country] });
  const points = map.getPoints().map((p) => [r(p.x), r(p.y)]);
  const xs = points.map((p) => p[0]);
  const ys = points.map((p) => p[1]);
  const out = {
    width: r(Math.max(...xs) + 1),
    height: r(Math.max(...ys) + 1),
    points,
    pins: Object.fromEntries(
      Object.entries(pins).map(([k, [lat, lng]]) => {
        const p = map.getPin({ lat, lng });
        return [k, [r(p.x), r(p.y)]];
      }),
    ),
  };
  console.log(country, points.length, "points", out.width, "x", out.height);
  return out;
}

const maps = {
  th: grid({
    country: "THA",
    height: 92,
    pins: {
      bangkok: [13.7563, 100.5018],
      chiangMai: [18.7883, 98.9853],
      chiangRai: [19.9105, 99.8406],
      phitsanulok: [16.8211, 100.2659],
      khonKaen: [16.4322, 102.8236],
      udonThani: [17.4138, 102.787],
      ubon: [15.2287, 104.8564],
      korat: [14.9799, 102.0978],
      pattaya: [12.9236, 100.8825],
      huaHin: [12.5684, 99.9577],
      suratThani: [9.1382, 99.3215],
      phuket: [7.8804, 98.3923],
      hatYai: [7.0084, 100.4747],
    },
  }),
};

writeFileSync(new URL("../src/data/maps.json", import.meta.url), JSON.stringify(maps));
