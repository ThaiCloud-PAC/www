/**
 * Problems — three groups: online merchants (copy from thaicloud.com),
 * warehouse floor (pick / pack / dispatch) and people / staff.
 */
const groups = [
  {
    key: "merchant",
    accent: "accent-orange",
    icon: "las la-store-alt",
    title: "ร้านค้าออนไลน์",
    lead: "พอออเดอร์เริ่มเยอะขึ้น งานหลังบ้านจะเริ่มพลาดง่ายขึ้น",
    items: [
      { t: "Stock ไม่ตรง", d: "ขายไปแล้วแต่ของในคลังหาไม่เจอ จนต้องยกเลิกออเดอร์ คืนเงินลูกค้า และเสียคะแนนร้าน" },
      { t: "แพ็คผิด", d: "หยิบผิดรุ่น สี ไซส์ หรือแพ็คของไม่ครบ จนต้องส่งของใหม่ เสียค่าขนส่ง และเสียเวลาทีมงาน" },
      { t: "ลูกค้าเคลมสินค้า", d: "ลูกค้าบอกว่าได้ของไม่ครบ ไม่ได้ของ หรือของไม่ตรง แต่ร้านไม่มีหลักฐานเอาไว้ตรวจสอบ" },
      { t: "Marketplace มักตัดสินให้ลูกค้า", d: "เมื่อไม่มีหลักฐานว่าแพ็คอะไรไปจริง ร้านมักจบที่คืนเงิน แม้ทีมงานจะทำถูกขั้นตอนแล้วก็ตาม" },
    ],
  },
  {
    key: "warehouse",
    accent: "accent-blue",
    icon: "las la-dolly",
    title: "หน้างานคลัง หยิบ–แพ็ค–ส่ง",
    lead: "ยิ่งออเดอร์พุ่ง ยิ่งเดินเยอะ ยิ่งพลาดง่าย และไม่มีใครเห็นภาพรวม",
    items: [
      { t: "หยิบทีละออเดอร์ เดินซ้ำทางเดิม", d: "ไม่มีการรวมเวฟหรือวางเส้นทาง พนักงานเดินไกลเกินจำเป็น ยิ่งช่วง Peak ยิ่งช้า" },
      { t: "แพ็คแล้วไม่มีหลักฐาน", d: "ปิดกล่องไปแล้วไม่รู้ว่าใครแพ็ค แพ็คอะไร ตอนไหน — พอมีเคลมก็ตอบไม่ได้" },
      { t: "ส่งของที่ลูกค้ายกเลิกไปแล้ว", d: "OMS ยกเลิกออเดอร์แต่หน้างานไม่รู้ ของออกจากคลังไปแล้ว ต้องตามคืนและเสียค่าส่งฟรี" },
      { t: "คอขวดมองไม่เห็นจนกว่าจะสาย", d: "ไม่รู้ว่าออเดอร์ค้างที่สถานีไหน SLA หลุดตอนไหน จนลูกค้าทักมาถามก่อน" },
    ],
  },
  {
    key: "people",
    accent: "accent-teal",
    icon: "las la-users",
    title: "พนักงานและทีม",
    lead: "งานคลังคือคน — แต่ระบบส่วนใหญ่ไม่รู้ว่าใครทำอะไร",
    items: [
      { t: "ใช้เครื่องร่วมกัน ระบุตัวคนทำไม่ได้", d: "หลายคนใช้เครื่องเดียวกันที่สถานี งานถูกบันทึกเป็น 'สถานี' ไม่ใช่ 'คน' ตรวจสอบย้อนหลังไม่ได้" },
      { t: "วัดผลงานไม่ได้ ให้แรงจูงใจไม่ถูก", d: "ไม่รู้ว่าใครหยิบเร็ว ใครแพ็คแม่น ใครพลาดบ่อย จัดกำลังคนและโบนัสจากความรู้สึกไม่ใช่ข้อมูล" },
      { t: "พนักงานใหม่ต้องจำทุกอย่างเอง", d: "ไม่มีระบบนำทางหน้างาน สอนงานนาน คุณภาพขึ้นกับคนเก่า พอคนลาออกก็เริ่มใหม่" },
      { t: "หัวหน้าตัดสินใจโดยไม่มีข้อมูล", d: "ไม่เห็นว่าโต๊ะไหนล้น โซนไหนว่าง วันนี้ต้องใช้กี่คน — จัดคนเกินหรือขาดตลอด" },
    ],
  },
];

export default function Problems() {
  return (
    <section id="problems" className="problems-sec">
      <div className="container">
        <div className="row about-details text-center">
          <div className="col-12 col-md-10 col-lg-8 offset-md-1 offset-lg-2 wow zoomIn" data-wow-duration="1s">
            <p className="sub-heading text-center">
              <span></span>The Problem
            </p>
            <h3 className="heading text-center">
              ร้านที่ขายดี <span className="d-block">มักเจอปัญหาเดียวกัน</span>
            </h3>
            <p className="text text-center">
              ทั้ง stock ไม่ตรง แพ็คผิด ตอบเคสลูกค้าได้ช้าเพราะไม่มีหลักฐาน — และเมื่อมองลึกเข้าไปในคลัง
              ปัญหาไม่ได้อยู่แค่ที่ร้าน แต่อยู่ที่หน้างานและที่คนทำงานด้วย
            </p>
          </div>
        </div>

        <div className="row problem-row">
          {groups.map((g, gi) => (
            <div key={g.key} className={`col-12 col-lg-4 wow fadeInUp ${g.accent}`} data-wow-duration="1s" data-wow-delay={`${gi * 0.15}s`}>
              <div className="problem-group">
                <div className="problem-head">
                  <i className={g.icon}></i>
                  <div>
                    <h4>{g.title}</h4>
                    <p>{g.lead}</p>
                  </div>
                </div>
                <ul>
                  {g.items.map((it) => (
                    <li key={it.t}>
                      <span className="problem-x" aria-hidden="true">✕</span>
                      <div>
                        <b>{it.t}</b>
                        <span>{it.d}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col-12 text-center wow fadeInUp" data-wow-duration="1s">
            <a href="#solution" className="btn btn-medium btn-rounded btn-red scroll">
              Packiko แก้ยังไง ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
