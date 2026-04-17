export default function Pricing() {
  return (
    <section id="pricing-sec" className="pricing-sec bg-gray">
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
            <h4 className="pricing-card-heading">Built by Operators</h4>
            <p className="pricing-card-text">
              เราสร้างระบบจากความเข้าใจ &quot;หน้างานจริง&quot; ไม่ใช่แค่จากห้องแล็บ
            </p>

            <a href="#" className="btn btn-medium btn-rounded btn-black">
              Learn More
            </a>
          </div>
          {/* Price-2 */}
          <div
            className="pricing-card active col-12 col-lg-4 text-center wow fadeInUp"
            data-wow-duration="2s"
            data-wow-delay=".1s"
          >
            <h4 className="pricing-card-heading">Data-Driven Decisions</h4>
            <p className="pricing-card-text">
              เปลี่ยนจากระบบบันทึกข้อมูลแบบเดิม เป็นระบบที่ช่วย &quot;วางแผน&quot; และ &quot;คาดการณ์&quot;
            </p>

            <a href="#" className="btn btn-medium btn-rounded btn-black">
              Learn More
            </a>
          </div>
          {/* Price-3 */}
          <div
            className="pricing-card col-12 col-lg-4 text-center wow fadeInRight"
            data-wow-duration="2s"
            data-wow-delay=".1s"
          >
            <h4 className="pricing-card-heading">Scale Without Limits</h4>
            <p className="pricing-card-text">
              ช่วยให้ธุรกิจขยายจาก 1,000 เป็น 5,000 ออเดอร์/วัน ได้โดยไม่ต้องเพิ่มพื้นที่คลัง
            </p>

            <a href="#" className="btn btn-medium btn-rounded btn-black">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
