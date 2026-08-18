import { nb } from "@/lib/th";

const faqs = [
  {
    "q": "Packiko คืออะไร",
    "a": "ระบบคุมคลังสำหรับร้านออนไลน์ ทีมคลัง และ 3PL — คุมสต็อกจริง กันแพ็คผิด อัดวิดีโอทุกออเดอร์ และรู้ว่าใครทำอะไรหน้างาน ทั้งหมดบน API กลางตัวเดียว"
  },
  {
    "q": "ต้องเปลี่ยน OMS หรือระบบขายไหม",
    "a": "ไม่ต้อง Packiko อยู่หลัง OMS ของคุณ ร้านยังขายและจัดการออเดอร์บนช่องทางเดิม LISA ดึงออเดอร์ที่ชำระเงินแล้วเข้ามาให้ (ZORT เป็นเจ้าแรก เพิ่ม OMS อื่นได้) แล้วซิงก์สถานะกลับอัตโนมัติ หน้างานแค่ทำขั้นตอนหยิบ–แพ็คให้ชัดขึ้น"
  },
  {
    "q": "ต่างจากติดกล้องที่โต๊ะแพ็คยังไง",
    "a": "กล้องให้แค่ภาพย้อนหลัง Packiko ค้นวิดีโอจากเลขออเดอร์ เวลา หรือชื่อคนแพ็คได้ทันที และทำงานคู่กับการสแกนยืนยันของ คุมสต็อก และ OMS Status Guard ที่กันไม่ให้ส่งของที่ยกเลิกไปแล้ว"
  },
  {
    "q": "พนักงานใช้เครื่องร่วมกัน จะรู้ได้ยังไงว่าใครทำ",
    "a": "รู้ได้ เครื่องร่วมล็อกอินเป็นบัญชีสถานี พนักงานสแกนบัตรระบุตัวก่อนเริ่มงาน ส่วนเครื่องส่วนตัวใช้ SSO ทุกการหยิบ แพ็ค และอนุมัติจึงผูกกับคนจริง ย้อนดูและวัดผลรายคนได้"
  },
  {
    "q": "ถ้า OMS ล่มระหว่างวัน หน้างานต้องหยุดไหม",
    "a": "ไม่หยุด สถานีหยิบและแพ็คทำต่อได้ โดยออเดอร์จะติดธง OMS-unverified ไว้ และต้องเช็คสถานะกับ OMS ให้ผ่านที่ Dispatch Gate ก่อนปล่อยของออก ของที่ยกเลิกแล้วจึงหลุดออกไปไม่ได้"
  },
  {
    "q": "ควรเริ่มจากผลิตภัณฑ์ไหน",
    "a": "มี OMS แล้ว อยากคุมสต็อกจริง → Prime · อยากได้วิดีโอหลักฐานในระบบเดิม → Add-in · Fulfilment Center / 3PL → Ultra · เครือข่ายสาขา → Hub ไม่แน่ใจ ทักมาทางฟอร์มด้านล่าง ทีมเราช่วยดูหน้างานให้ได้"
  }
];

export default function Faq() {
  return (
    <section id="faq" className="faq-sec bg-gray">
      <div className="container">
        <div className="row about-details text-center">
          <div className="col-12 col-lg-8 offset-lg-2 wow zoomIn" data-wow-duration="1s">
            <p className="sub-heading text-center">
              <span></span>FAQ
            </p>
            <h3 className="heading text-center">คำถามที่พบบ่อย</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2 wow fadeInUp" data-wow-duration="1s">
            <div className="faq-list">
              {faqs.map((f) => (
                <details key={f.q} className="faq-item">
                  <summary>
                    <span>{nb(f.q)}</span>
                    <i className="las la-plus" aria-hidden="true"></i>
                  </summary>
                  <div className="faq-body">
                    <p>{nb(f.a)}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
