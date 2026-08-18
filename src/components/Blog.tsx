export default function Blog() {
  return (
    <section className="sponsor-sec" id="case-study">
      <div className="container">
        <div className="row blog-area">
          <div className="col-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
            <div className="case-band">
              <div className="row align-items-center">
                <div className="col-12 col-lg-6">
                  <div className="eyebrow">Featured Case Study</div>
                  <h4>
                    YUEDPAO <span className="d-block" style={{ fontWeight: 300 }}>ยืดเปล่า</span>
                  </h4>
                  <p>
                    การบริหารจัดการออเดอร์มหาศาลในช่วง Peak Season อย่างมีประสิทธิภาพ ด้วยเทคโนโลยี Fulfillment ของเรา —
                    ขยายจากหลักพันสู่ 5,000 ออเดอร์/วัน โดยไม่ต้องเพิ่มพื้นที่คลัง
                  </p>
                  <a href="#contact-sec" className="btn btn-medium btn-rounded btn-white scroll">
                    Talk to Us About Your Peak Season
                  </a>
                </div>
                <div className="col-12 col-lg-6 mt-5 mt-lg-0">
                  <div className="case-stats">
                    <div className="case-stat">
                      <span className="case-stat-num">5,000</span>
                      <span className="case-stat-label">orders / day at peak</span>
                    </div>
                    <div className="case-stat">
                      <span className="case-stat-num">80%</span>
                      <span className="case-stat-label">error reduction</span>
                    </div>
                    <div className="case-stat">
                      <span className="case-stat-num">30%</span>
                      <span className="case-stat-label">faster packing</span>
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
