import CountUp from "./CountUp";

const steps = [
  {
    no: "01",
    accent: "accent-blue",
    icon: "las la-shopping-cart",
    title: "รับออเดอร์จาก OMS",
    detail:
      "ร้านค้ายังขายบนช่องทางเดิม (Shopee / Lazada / TikTok / LINE / เว็บไซต์) ผ่าน OMS ของตัวเอง LISA ดึงออเดอร์ที่ชำระเงินแล้วเข้าสู่ Packiko อัตโนมัติ",
  },
  {
    no: "02",
    accent: "accent-orange",
    icon: "las la-route",
    title: "จัดเวฟ & หยิบสินค้า",
    detail:
      "AI จัดลำดับงานและเส้นทางเดินหยิบ รวมออเดอร์เป็นเวฟตามรูปแบบที่คุ้มที่สุด (เช่น Same SKU) พนักงานสแกนยืนยันทุกชิ้นที่สถานีหยิบ",
  },
  {
    no: "03",
    accent: "accent-teal",
    icon: "las la-video",
    title: "แพ็กพร้อม VDO Proof",
    detail:
      "สถานีแพ็กบันทึกวิดีโอทุกออเดอร์เป็นหลักฐาน ตรวจสถานะกับ OMS ก่อนแพ็ก (OMS Status Guard) ออเดอร์ที่ถูกยกเลิกจะถูกบล็อกทันที",
  },
  {
    no: "04",
    accent: "accent-blue",
    icon: "las la-truck",
    title: "Dispatch Gate & ขนส่ง",
    detail:
      "ด่านตรวจก่อนส่งออก 6 ขั้น เชื่อมขนส่งและอัปเดตสถานะกลับ OMS พร้อมรายงานประสิทธิภาพพนักงาน SLA และคอขวดแบบเรียลไทม์",
  },
];

export default function Portfolio() {
  return (
    <section id="how-it-works" className="portfolio">
      {/* Counter */}
      <div className="container">
        <div className="row my-4 my-md-0 stat-band wow fadeInUp" data-wow-duration="1s">
          <div className="col-12 col-md-3">
            <div className="parallax-box">
              <h2 className="count-num"><CountUp value={80} /></h2>
              <h5>% Error Reduction</h5>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="parallax-box">
              <h2 className="count-num text-orange"><CountUp value={30} /></h2>
              <h5>% Faster Packing</h5>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="parallax-box">
              <h2 className="count-num text-red"><CountUp value={80} /></h2>
              <h5>% Labor Efficiency</h5>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="parallax-box">
              <h2 className="count-num"><CountUp value={19765} /></h2>
              <h5>Orders / Day</h5>
            </div>
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="container wow fadeInUp" data-wow-duration="2s" data-wow-delay=".1s">
        <div className="row mt-5 mb-4">
          <div className="col-12 text-center">
            <h3 className="heading">
              The Future of Logistics <span className="text-orange d-block">is Autonomous</span>
            </h3>
            <p className="text mx-auto" style={{ maxWidth: "800px" }}>
              จากระบบช่วยตัดสินใจ (Operational Intelligence) สู่การทำคลังสินค้าบริหารจัดการตัวเองอัตโนมัติ (Autonomous Fulfillment)
              เพื่อรองรับการเติบโตของ eCommerce ในระดับภูมิภาค SEA — นี่คือเส้นทางของออเดอร์หนึ่งใบผ่าน Packiko
            </p>
          </div>
        </div>
        <div className="row step-row pt-4">
          {steps.map((s, i) => (
            <div key={s.no} className="col-12 col-md-6 col-lg-3 wow fadeInUp" data-wow-duration="1s" data-wow-delay={`${i * 0.15}s`}>
              <div className={`step-card ${s.accent}`}>
                <div className="step-badge">{s.no}</div>
                <i className={s.icon}></i>
                <h5>{s.title}</h5>
                <p>{s.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
