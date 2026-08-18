export default function Pricing() {
  return (
    <section id="why-packiko" className="pricing-sec bg-gray">
      <div className="container">
        <div className="row">
          <div
            className="pricing-details col-10 offset-1 col-lg-8 offset-lg-2 text-center wow zoomIn"
            data-wow-duration="1s"
            data-wow-delay=".1s"
          >
            <p className="sub-heading text-red">
              <span></span>Why Choose Us
            </p>
            <h4 className="heading">จุดเด่นที่แตกต่าง</h4>
            <p className="text">
              เราให้ความสำคัญกับผลลัพธ์ที่จับต้องได้ ด้วยระบบที่สร้างจากความเข้าใจคลังสินค้าอย่างแท้จริง
            </p>
          </div>
        </div>
        <div className="row price-cards mt-5">
          {/* Price-1 */}
          <div
            className="pricing-card col-12 col-lg-4 text-center wow fadeInLeft"
            data-wow-duration="2s"
            data-wow-delay=".1s"
          >
            <div className="why-icon"><i className="las la-hard-hat"></i></div>
            <h4 className="pricing-card-heading">Built by Operators</h4>
            <p className="pricing-card-text">
              เราสร้างระบบจากความเข้าใจ &quot;หน้างานจริง&quot; ไม่ใช่แค่จากห้องแล็บ
            </p>
            <ul className="why-list">
              <li>ทีมบริหารคลังจริงกว่า 10 ปี</li>
              <li>ออกแบบจากสถานีหยิบ-แพ็กจริง</li>
              <li>ระบุตัวพนักงานทุกการกระทำ (audit trail)</li>
            </ul>

            <a href="#contact-sec" className="btn btn-medium btn-rounded btn-red scroll">
              Talk to Us
            </a>
          </div>
          {/* Price-2 */}
          <div
            className="pricing-card active col-12 col-lg-4 text-center wow fadeInUp"
            data-wow-duration="2s"
            data-wow-delay=".1s"
          >
            <div className="why-icon"><i className="las la-brain"></i></div>
            <h4 className="pricing-card-heading">Data-Driven Decisions</h4>
            <p className="pricing-card-text">
              เปลี่ยนจากระบบบันทึกข้อมูลแบบเดิม เป็นระบบที่ช่วย &quot;วางแผน&quot; และ &quot;คาดการณ์&quot;
            </p>
            <ul className="why-list">
              <li>AI จัดลำดับงานและเส้นทางเดินหยิบ</li>
              <li>OMS Status Guard กันส่งของที่ถูกยกเลิก</li>
              <li>VDO Proof เป็นหลักฐานทุกออเดอร์</li>
            </ul>

            <a href="#contact-sec" className="btn btn-medium btn-rounded btn-red scroll">
              Talk to Us
            </a>
          </div>
          {/* Price-3 */}
          <div
            className="pricing-card col-12 col-lg-4 text-center wow fadeInRight"
            data-wow-duration="2s"
            data-wow-delay=".1s"
          >
            <div className="why-icon"><i className="las la-rocket"></i></div>
            <h4 className="pricing-card-heading">Scale Without Limits</h4>
            <p className="pricing-card-text">
              ช่วยให้ธุรกิจขยายจากหลักพันสู่ 20,000 ออเดอร์/วัน ได้โดยไม่ต้องเพิ่มพื้นที่คลัง
            </p>
            <ul className="why-list">
              <li>เริ่มจาก Add-in / Prime แล้วโตสู่ Ultra</li>
              <li>ขยายเครือข่ายผ่าน Hub</li>
              <li>API กลางตัวเดียว ไม่ต้องย้ายระบบ</li>
            </ul>

            <a href="#contact-sec" className="btn btn-medium btn-rounded btn-red scroll">
              Talk to Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
