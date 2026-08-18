import PlatformMap from "./PlatformMap";

const solutions = [
  { icon: "las la-boxes", accent: "accent-teal", t: "Inventory Control", d: "เห็นสถานะสินค้าในคลังแบบ real-time แยกสต็อกจริงออกจากสต็อกขาย ลดของหาย ลด oversell", fixes: "Stock ไม่ตรง" },
  { icon: "las la-clipboard-list", accent: "accent-blue", t: "Packing Verification", d: "สแกนยืนยันทุกชิ้นตอนหยิบและแพ็ค ลดการหยิบผิด ส่งผิด หรือแพ็คไม่ครบในช่วงออเดอร์พุ่ง", fixes: "แพ็คผิด" },
  { icon: "las la-video", accent: "accent-orange", t: "วิดีโอหลักฐานทุก Order", d: "บันทึกวิดีโอระหว่างแพ็คทุกออเดอร์ ค้นหาได้จากเลขออเดอร์ เวลา หรือพนักงาน ใช้ตอบเคลมและ dispute ได้ทันที", fixes: "ลูกค้าเคลม / Marketplace dispute" },
  { icon: "las la-route", accent: "accent-blue", t: "AI Wave & Pick Route", d: "รวมออเดอร์เป็นเวฟ (เช่น Same-SKU) และวางเส้นทางเดินหยิบที่สั้นที่สุด พนักงานเดินน้อยลง หยิบได้มากขึ้น", fixes: "เดินซ้ำ เดินไกล" },
  { icon: "las la-shield-alt", accent: "accent-orange", t: "OMS Status Guard", d: "เช็คสถานะกับ OMS ก่อนแพ็คและก่อนส่ง ออเดอร์ที่ถูกยกเลิกจะถูกบล็อกทันที หัวหน้าอนุมัติข้ามได้แบบมีบันทึก", fixes: "ส่งของที่ยกเลิกแล้ว" },
  { icon: "las la-truck-loading", accent: "accent-teal", t: "Dispatch Gate", d: "ด่านตรวจ 6 ขั้นก่อนของออกจากคลัง เชื่อมขนส่ง พิมพ์ลาเบล และอัปเดตสถานะกลับ OMS อัตโนมัติ", fixes: "ส่งผิด ส่งไม่ครบ" },
  { icon: "las la-user-tag", accent: "accent-yellow", t: "Worker Identity & Audit", d: "สแกนบัตรระบุตัวที่สถานีร่วม หรือ SSO บนเครื่องส่วนตัว — ทุกการหยิบ แพ็ค อนุมัติ ผูกกับคนจริง ตรวจย้อนหลังได้", fixes: "ระบุตัวคนทำไม่ได้" },
  { icon: "las la-tachometer-alt", accent: "accent-blue", t: "Operations Dashboard & Performance", d: "เห็นภาพรวมคลังในหน้าเดียว: งานค้างต่อสถานี SLA คอขวด และผลงานรายคน จัดกำลังคนจากข้อมูลจริง", fixes: "มองไม่เห็นคอขวด / วัดผลไม่ได้" },
];

export default function Solution() {
  return (
    <section id="solution" className="solution-sec bg-gray">
      <div className="container">
        <div className="row about-details text-center">
          <div className="col-12 col-md-10 col-lg-8 offset-md-1 offset-lg-2 wow zoomIn" data-wow-duration="1s">
            <p className="sub-heading text-center">
              <span></span>The Solution
            </p>
            <h3 className="heading text-center">
              Packiko ช่วยให้คุณ <span className="d-block">คุมคลังได้จริง</span>
            </h3>
            <p className="text text-center">
              Packiko เป็นชั้น Fulfilment ที่อยู่หลัง OMS ของคุณ — ร้านยังขายบนช่องทางเดิม
              ส่วนเรารับผิดชอบสต็อกจริง การหยิบ–แพ็ค–ส่ง หลักฐาน และคนหน้างาน ทั้งหมดบน API กลางตัวเดียว
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-12 wow fadeInUp" data-wow-duration="1.2s">
            <PlatformMap />
            <p className="map-caption">
              ช่องทางขาย → OMS → <b>LISA</b> (รับออเดอร์/ยกเลิก, ซิงก์สถานะ) → <b>Packiko Core</b> (สต็อก · เวฟ · หยิบ · แพ็ค+VDO · เกต) → ขนส่ง → ลูกค้า
              — โดยมี Add-in / Prime / Ultra / Hub เป็นหน้าบ้านที่เหมาะกับแต่ละธุรกิจ
            </p>
          </div>
        </div>

        <div className="row solution-row">
          {solutions.map((s, i) => (
            <div key={s.t} className={`col-12 col-md-6 col-lg-3 wow fadeInUp ${s.accent}`} data-wow-duration="1s" data-wow-delay={`${(i % 4) * 0.12}s`}>
              <div className="solution-card">
                <div className="icon-tile">
                  <i className={s.icon}></i>
                </div>
                <h5>{s.t}</h5>
                <p>{s.d}</p>
                <span className="fixes">แก้: {s.fixes}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
