export default function Blog() {
  return (
    <section className="sponsor-sec" id="case-study">
      <div className="container">
        <div className="row align-items-center blog-area">
          <div className="col-12 col-md-6 wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".1s">
            <h4 className="heading">
              Featured <span className="d-block text-orange">Case Study</span>
            </h4>
            <p className="text">
              YUEDPAO (ยืดเปล่า) – การบริหารจัดการออเดอร์มหาศาลในช่วง Peak Season อย่างมีประสิทธิภาพ ด้วยเทคโนโลยี Fulfillment ของเรา
              ขยายจากหลักพันสู่ 5,000 ออเดอร์/วัน โดยไม่ต้องเพิ่มพื้นที่คลัง
            </p>
            <a href="#contact-sec" className="btn btn-medium btn-rounded btn-red mb-5 mb-md-0 scroll">
              Talk to Us About Your Peak Season
            </a>
          </div>
          <div className="col-12 col-md-6 d-flex align-items-center">
            <div className="row no-gutters w-100">
              <div
                className="col-12 col-lg-6 mini-slider p-0 d-inline-block d-lg-flex justify-content-center align-items-center wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".1s"
              >
                <div className="case-stat w-100">
                  <span className="case-stat-num">5,000</span>
                  <span className="case-stat-label">Orders / Day at Peak</span>
                  <span className="case-stat-foot">Same warehouse footprint</span>
                </div>
              </div>
              <div className="col-12 col-lg-6 p-0 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".1s">
                <a href="#contact-sec" className="text-decoration-none scroll">
                  <div className="blog-box bg-orange">
                    <h1 className="box-text">Discover How YUEDPAO Scaled with Us</h1>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
