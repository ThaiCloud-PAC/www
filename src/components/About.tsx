const products = [
  {
    tag: "Add-in",
    icon: "lni-video",
    title: "Packiko Add-in",
    detail:
      "VDO Proof / Recorder แบบ Web SDK ที่พาร์ทเนอร์ (เช่น ZORT) ฝังในหน้าแพ็กของตัวเองได้ทันที เก็บหลักฐานวิดีโอทุกออเดอร์ ลดข้อพิพาท ลดเคลม",
    anim: "slideInLeft",
  },
  {
    tag: "Prime",
    icon: "lni-package",
    title: "Packiko Prime",
    detail:
      "แยก \"สต็อกจริงในคลัง\" ออกจาก \"สต็อกขาย\" สำหรับร้านค้าออนไลน์ที่มี OMS อยู่แล้ว — SKU, รับเข้า, แพ็ก, คืนสินค้า และแดชบอร์ดพื้นฐาน เริ่มใช้ได้เร็ว",
    anim: "slideInUp",
  },
  {
    tag: "Ultra",
    icon: "lni-cog",
    title: "Packiko Ultra",
    detail:
      "แพลตฟอร์มปฏิบัติการคลังขั้นสูงสำหรับ Fulfilment Center / 3PL — เวฟ, สถานีหยิบ-แพ็ก, Dispatch Gate, OMS Status Guard, ประสิทธิภาพพนักงาน, SLA และรายงานระดับองค์กร",
    anim: "slideInUp",
  },
  {
    tag: "Hub",
    icon: "lni-network",
    title: "Packiko Hub",
    detail:
      "เปลี่ยนสาขา ร้านพัสดุ และหน้าร้านพาร์ทเนอร์ให้เป็นจุด Fulfilment ย่อย — รับพัสดุ บริการแพ็ก สต็อกลูกค้า และแดชบอร์ดสาขา ขยายเครือข่ายทางกายภาพ",
    anim: "slideInRight",
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
              Packiko <span className="d-block">Fulfilment Ecosystem</span>
            </h3>
            <p className="text text-center">
              สี่ผลิตภัณฑ์บนแพลตฟอร์มเดียว ใช้ API กลางร่วมกัน เลือกใช้ตามขนาดธุรกิจ ตั้งแต่ร้านออนไลน์จนถึงคลัง 3PL ระดับองค์กร
            </p>
            <a href="#how-it-works" className="btn btn-medium btn-rounded btn-red scroll">
              See How It Works
            </a>
          </div>
        </div>
        <div className="row our-about-sec">
          {products.map((p) => (
            <div key={p.tag} className={`col-12 col-md-6 col-lg-3 wow ${p.anim}`} data-wow-duration="1s">
              <div className="about-card text-center">
                <a href="#contact-sec" className="scroll">
                  <div className="image-holder">
                    <i className={p.icon}></i>
                  </div>
                  <span className="about-card-tag">{p.tag}</span>
                  <h3 className="about-card-heading">{p.title}</h3>
                  <p className="about-card-detail">{p.detail}</p>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="row our-about-sec pt-0">
          <div className="col-12 col-lg-4 wow fadeInUp" data-wow-duration="1s">
            <div className="about-card text-center">
              <a href="#contact-sec" className="scroll">
                <div className="image-holder">
                  <i className="lni-layers"></i>
                </div>
                <h3 className="about-card-heading">Packiko Core Platform</h3>
                <p className="about-card-detail">
                  API กลางตัวเดียวสำหรับทุกผลิตภัณฑ์ — Multi-tenant, สต็อกจริง, เอกสารคลัง, ขนส่ง และ AI ช่วยจัดลำดับงานและเส้นทางเดินหยิบของ
                </p>
              </a>
            </div>
          </div>
          <div className="col-12 col-lg-4 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".15s">
            <div className="about-card text-center">
              <a href="#contact-sec" className="scroll">
                <div className="image-holder">
                  <i className="lni-reload"></i>
                </div>
                <h3 className="about-card-heading">LISA Integration</h3>
                <p className="about-card-detail">
                  Logistics Integration &amp; Sync Automation — สะพานเชื่อม OMS (ZORT เป็นเจ้าแรก) เข้าสู่ Packiko แบบ event-driven รับออเดอร์ ยกเลิก และซิงก์สถานะอัตโนมัติ
                </p>
              </a>
            </div>
          </div>
          <div className="col-12 col-lg-4 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
            <div className="about-card text-center">
              <a href="#contact-sec" className="scroll">
                <div className="image-holder">
                  <i className="lni-users"></i>
                </div>
                <h3 className="about-card-heading">Implementation &amp; Consulting</h3>
                <p className="about-card-detail">
                  เชื่อมต่อกับระบบเดิมของคุณ (ERP/WMS) อย่างไร้รอยต่อ พร้อมคำปรึกษาจากทีมที่มีประสบการณ์บริหารคลังจริงกว่า 10 ปี
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
