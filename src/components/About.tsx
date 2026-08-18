import { nb } from "@/lib/th";

const products = [
  {
    "tag": "Add-in",
    "accent": "accent-orange",
    "icon": "las la-video",
    "title": "Packiko Add-in",
    "fit": "สำหรับพาร์ทเนอร์ OMS / Marketplace และร้านค้าบนแพลตฟอร์มนั้น",
    "detail": "VDO Proof แบบ Web SDK ฝังในหน้าแพ็คของพาร์ทเนอร์ (เช่น ZORT) ได้ทันที เก็บวิดีโอหลักฐานทุกออเดอร์ ลดเคลม ลดข้อพิพาท โดยร้านไม่ต้องเปลี่ยนระบบ"
  },
  {
    "tag": "Prime",
    "accent": "accent-teal",
    "icon": "las la-boxes",
    "title": "Packiko Prime",
    "fit": "สำหรับร้านออนไลน์ที่มี OMS แล้ว และเริ่มปวดหัวกับสต็อกจริง",
    "detail": "แยกสต็อกจริงในคลังออกจากสต็อกขาย — SKU รับเข้า แพ็ค คืนสินค้า VDO เสริม และแดชบอร์ดพื้นฐาน เริ่มได้เร็ว ไม่ต้องเปลี่ยนระบบขาย"
  },
  {
    "tag": "Ultra",
    "accent": "accent-blue",
    "icon": "las la-warehouse",
    "title": "Packiko Ultra",
    "fit": "สำหรับ Fulfilment Center / 3PL / แบรนด์ที่มีคลังของตัวเอง",
    "detail": "คุมปฏิบัติการคลังเต็มรูปแบบ — เวฟ สถานีหยิบ–แพ็ค Dispatch Gate OMS Status Guard ผลงานพนักงาน SLA คอขวด และรายงานระดับองค์กร"
  },
  {
    "tag": "Hub",
    "accent": "accent-yellow",
    "icon": "las la-store",
    "title": "Packiko Hub",
    "fit": "สำหรับเครือข่ายสาขา ร้านพัสดุ และหน้าร้านพาร์ทเนอร์",
    "detail": "เปลี่ยนสาขาให้เป็นจุด Fulfilment ย่อย — รับพัสดุ บริการแพ็ค เก็บสต็อกลูกค้า และแดชบอร์ดสาขา ขยายเครือข่ายให้ใกล้ลูกค้าขึ้น"
  }
];

// 2 = core strength, 1 = supported, 0 = not the target — columns: Add-in, Prime, Ultra, Hub
const fit = [
  {
    "need": "มี OMS แล้ว อยากได้วิดีโอหลักฐานโดยไม่เปลี่ยนระบบ",
    "v": [
      2,
      1,
      1,
      0
    ]
  },
  {
    "need": "แยกสต็อกจริงออกจากสต็อกขาย รับเข้า แพ็ค คืน",
    "v": [
      0,
      2,
      2,
      1
    ]
  },
  {
    "need": "คลังใหญ่ / 3PL หลายลูกค้า หลายสถานี",
    "v": [
      0,
      0,
      2,
      0
    ]
  },
  {
    "need": "เวฟ · Dispatch Gate · OMS Status Guard · วัดผลรายคน",
    "v": [
      0,
      1,
      2,
      0
    ]
  },
  {
    "need": "เปลี่ยนสาขา / ร้านพัสดุ เป็นจุด Fulfilment",
    "v": [
      0,
      0,
      0,
      2
    ]
  }
];

export default function About() {
  return (
    <section id="products" className="about-sec">
      <div className="container">
        <div className="row about-details text-center">
          <div className="col-12 col-lg-8 offset-lg-2 wow zoomIn" data-wow-duration="1s">
            <p className="sub-heading text-center">
              <span></span>Our Products
            </p>
            <h3 className="heading text-center">One Platform. Four Ways In.</h3>
            <p className="text text-center">{nb("สี่ผลิตภัณฑ์บน Packiko Core ตัวเดียว ตั้งแต่ปุ่มอัดวิดีโอในระบบเดิม ไปจนถึงคลัง 3PL ระดับองค์กร — เริ่มจากจุดที่พอดีกับธุรกิจ แล้วโตต่อได้โดยไม่ต้องย้ายระบบ")}</p>
          </div>
        </div>

        <div className="row product-row">
          {products.map((p, i) => (
            <div key={p.tag} className="col-12 col-md-6 col-lg-3 wow fadeInUp" data-wow-duration="1s" data-wow-delay={`${i * 0.1}s`}>
              <a href="#contact-sec" className={`product-card scroll ${p.accent}`}>
                <div className="icon-tile">
                  <i className={p.icon}></i>
                </div>
                <span className="tag">{p.tag}</span>
                <h3>{p.title}</h3>
                <div className="fit">{nb(p.fit)}</div>
                <p className="detail">{nb(p.detail)}</p>
                <span className="more">Talk to us</span>
              </a>
            </div>
          ))}
        </div>

        <div className="row d-none d-lg-block">
          <div className="col-12 wow fadeInUp" data-wow-duration="1s">
            <div className="fit-matrix-wrap">
              <table className="fit-matrix">
                <thead>
                  <tr>
                    <th>คุณคือ… / คุณต้องการ…</th>
                    <th className="accent-orange">Add-in</th>
                    <th className="accent-teal">Prime</th>
                    <th className="accent-blue">Ultra</th>
                    <th className="accent-yellow">Hub</th>
                  </tr>
                </thead>
                <tbody>
                  {fit.map((r) => (
                    <tr key={r.need}>
                      <td>{nb(r.need)}</td>
                      {r.v.map((v, i) => (
                        <td key={i} className={v === 2 ? "is-core" : v === 1 ? "is-ok" : ""}>
                          {v === 2 ? "●" : v === 1 ? "○" : "–"}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="fit-legend">● จุดแข็งหลัก · ○ รองรับ · – ไม่ใช่เป้าหมายของผลิตภัณฑ์นี้</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
