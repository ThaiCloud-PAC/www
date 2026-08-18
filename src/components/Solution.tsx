import PlatformMap from "./PlatformMap";
import { nb } from "@/lib/th";

const solutions = [
  {
    "key": "inventory",
    "icon": "las la-boxes",
    "accent": "accent-teal",
    "t": "Inventory Control",
    "d": "เห็นสต็อกจริงในคลังแบบเรียลไทม์ แยกจากสต็อกขายบน OMS ของไม่หาย ไม่ขายเกินของที่มี"
  },
  {
    "key": "wave",
    "icon": "las la-route",
    "accent": "accent-blue",
    "t": "AI Wave & Pick Route",
    "d": "รวมออเดอร์เป็นเวฟและวางเส้นทางหยิบที่สั้นที่สุด พนักงานเดินน้อยลง หยิบได้มากขึ้น"
  },
  {
    "key": "packing",
    "icon": "las la-clipboard-check",
    "accent": "accent-blue",
    "t": "Packing Verification",
    "d": "สแกนยืนยันทุกชิ้นก่อนปิดกล่อง หยิบผิดรุ่น ผิดไซส์ หรือแพ็คไม่ครบ ระบบเตือนทันที"
  },
  {
    "key": "vdo",
    "icon": "las la-video",
    "accent": "accent-orange",
    "t": "VDO Proof",
    "d": "อัดวิดีโอทุกออเดอร์ขณะแพ็ค ค้นได้จากเลขออเดอร์ เวลา หรือชื่อคนแพ็ค ใช้ตอบเคลมได้ทันที"
  },
  {
    "key": "guard",
    "icon": "las la-shield-alt",
    "accent": "accent-orange",
    "t": "OMS Status Guard & Dispatch Gate",
    "d": "เช็คสถานะกับ OMS ก่อนแพ็คและก่อนส่ง ออเดอร์ที่ยกเลิกแล้วถูกบล็อกทันที ของทุกกล่องต้องผ่านด่านตรวจก่อนออกจากคลัง"
  },
  {
    "key": "people",
    "icon": "las la-user-check",
    "accent": "accent-yellow",
    "t": "Worker Identity & Performance",
    "d": "สแกนบัตรระบุตัวคนที่สถานีร่วม ทุกการหยิบ แพ็ค อนุมัติ ผูกกับคนจริง เห็นงานค้าง คอขวด และผลงานรายคนในหน้าเดียว"
  }
];

export default function Solution() {
  return (
    <section id="solution" className="solution-sec bg-gray">
      <div className="container">
        <div className="row align-items-start">
          <div className="col-12 col-lg-6 solution-copy">
            <div className="wow fadeInUp" data-wow-duration="1s">
              <p className="sub-heading">
                <span></span>The Solution
              </p>
              <h3 className="heading">{nb("คุมคลังได้จริง ตั้งแต่สต็อกจนของขึ้นรถ")}</h3>
              <p className="text">{nb("Packiko อยู่หลัง OMS ของคุณ ร้านยังขายบนช่องทางเดิม ส่วนสต็อกจริง หยิบ–แพ็ค–ส่ง หลักฐาน และคนหน้างาน ให้เราดูแล — ทั้งหมดบน API กลางตัวเดียว")}</p>
            </div>
            <div className="solution-list">
              {solutions.map((s, i) => (
                <div key={s.key} className={`solution-item wow fadeInUp ${s.accent}`} data-wow-duration="1s" data-wow-delay={`${i * 0.08}s`}>
                  <i className={s.icon}></i>
                  <div>
                    <b>{s.t}</b>
                    <span>{nb(s.d)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-12 col-lg-6 wow fadeIn" data-wow-duration="1.2s">
            <PlatformMap />
          </div>
        </div>
      </div>
    </section>
  );
}
