const products = [
  {
    tag: "Add-in",
    accent: "accent-orange",
    icon: "las la-video",
    title: "Packiko Add-in",
    fit: "สำหรับพาร์ทเนอร์ OMS / มาร์เก็ตเพลส และร้านค้าบนนั้น",
    detail:
      "VDO Proof / Recorder แบบ Web SDK ที่ฝังในหน้าแพ็กของพาร์ทเนอร์ (เช่น ZORT) ได้ทันที เก็บหลักฐานวิดีโอทุกออเดอร์ ลดข้อพิพาท ลดเคลม",
    anim: "fadeInUp",
  },
  {
    tag: "Prime",
    accent: "accent-teal",
    icon: "las la-boxes",
    title: "Packiko Prime",
    fit: "สำหรับร้านออนไลน์ที่มี OMS อยู่แล้ว",
    detail:
      "แยก \"สต็อกจริงในคลัง\" ออกจาก \"สต็อกขาย\" — SKU, รับเข้า, แพ็ก, คืนสินค้า, VDO เสริม และแดชบอร์ดพื้นฐาน เริ่มใช้ได้เร็ว ไม่ต้องเปลี่ยนระบบขาย",
    anim: "fadeInUp",
  },
  {
    tag: "Ultra",
    accent: "accent-blue",
    icon: "las la-warehouse",
    title: "Packiko Ultra",
    fit: "สำหรับ Fulfilment Center / 3PL / แบรนด์ที่มีคลังของตัวเอง",
    detail:
      "แพลตฟอร์มปฏิบัติการคลังขั้นสูง — เวฟ, สถานีหยิบ-แพ็ก, Dispatch Gate, OMS Status Guard, ประสิทธิภาพพนักงาน, SLA และรายงานระดับองค์กร",
    anim: "fadeInUp",
  },
  {
    tag: "Hub",
    accent: "accent-yellow",
    icon: "las la-store",
    title: "Packiko Hub",
    fit: "สำหรับเครือข่ายสาขา ร้านพัสดุ และหน้าร้านพาร์ทเนอร์",
    detail:
      "เปลี่ยนสาขาให้เป็นจุด Fulfilment ย่อย — รับพัสดุ บริการแพ็ก สต็อกลูกค้า และแดชบอร์ดสาขา ขยายเครือข่ายทางกายภาพใกล้ลูกค้า",
    anim: "fadeInUp",
  },
];

export default function About() {
  return (
    <section id="products" className="about-sec bg-gray">
      <div className="container">
        <div className="row about-details text-center">
          <div
            className="col-12 col-md-10 col-lg-8 offset-md-1 offset-lg-2 wow zoomIn"
            data-wow-duration="1s"
            data-wow-delay=".1s"
          >
            <p className="sub-heading text-center">
              <span></span>Our Products
            </p>
            <h3 className="heading text-center">
              One Platform. <span className="d-block">Four Ways In.</span>
            </h3>
            <p className="text text-center">
              สี่ผลิตภัณฑ์บน Packiko Core API ตัวเดียว เลือกจุดเริ่มที่พอดีกับธุรกิจ — ตั้งแต่ปุ่มบันทึกวิดีโอในระบบเดิม
              จนถึงคลัง 3PL ระดับองค์กร แล้วเติบโตไปด้วยกันโดยไม่ต้องย้ายระบบ
            </p>
          </div>
        </div>

        <div className="row product-row mt-4">
          {products.map((p, i) => (
            <div key={p.tag} className={`col-12 col-md-6 col-lg-3 wow ${p.anim}`} data-wow-duration="1s" data-wow-delay={`${i * 0.12}s`}>
              <a href="#contact-sec" className={`product-card scroll ${p.accent}`}>
                <div className="icon-tile">
                  <i className={p.icon}></i>
                </div>
                <span className="tag">{p.tag}</span>
                <h3>{p.title}</h3>
                <div className="fit">{p.fit}</div>
                <p className="detail">{p.detail}</p>
                <span className="more">Talk to us</span>
              </a>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col-12 wow fadeInUp" data-wow-duration="1s">
            <div className="platform-strip">
              <div className="row">
                <div className="col-12 col-lg-4">
                  <h4>Under the hood</h4>
                  <p className="lead-line">
                    ทุกผลิตภัณฑ์ใช้โครงสร้างเดียวกัน — ลูกค้าเริ่มจากจุดไหนก็ต่อยอดไปอีกจุดได้ทันที
                  </p>
                </div>
                <div className="col-12 col-lg-8">
                  <div className="row">
                    <div className="col-12 col-md-4">
                      <div className="platform-item">
                        <i className="las la-layer-group"></i>
                        <div>
                          <b>Packiko Core API</b>
                          <span>API กลาง multi-tenant: สต็อกจริง เอกสารคลัง ขนส่ง และ AI จัดลำดับงาน/เส้นทางหยิบ</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="platform-item">
                        <i className="las la-sync"></i>
                        <div>
                          <b>LISA</b>
                          <span>Logistics Integration &amp; Sync Automation — สะพาน OMS (ZORT เจ้าแรก) เข้าสู่ Packiko แบบ event-driven</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="platform-item">
                        <i className="las la-user-tie"></i>
                        <div>
                          <b>Implementation &amp; Consulting</b>
                          <span>เชื่อม ERP/WMS เดิมอย่างไร้รอยต่อ โดยทีมที่บริหารคลังจริงกว่า 10 ปี</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
