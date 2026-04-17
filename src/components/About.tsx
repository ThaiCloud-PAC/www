export default function About() {
  return (
    <section id="about" className="about-sec bg-gray">
      <div className="container">
        <div className="row about-details text-center">
          <div
            className="col-12 col-md-10 col-lg-8 offset-md-1 offset-lg-2 wow zoomIn"
            data-wow-duration="1s"
            data-wow-delay=".1s"
          >
            <p className="sub-heading text-center">
              <span></span>Our Core Offerings
            </p>
            <h3 className="heading text-center">
              Services <span className="d-block">Minimal Approach</span>
            </h3>
            <p className="text text-center">
              เทคโนโลยีที่ถูกออกแบบมาให้เข้าถึงง่ายและใช้งานได้จริง
            </p>
            <a href="#portfolio" className="btn btn-medium btn-rounded btn-red scroll">
              Learn More
            </a>
          </div>
        </div>
        <div className="row our-about-sec">
          <div className="col-12 col-lg-4 wow slideInLeft" data-wow-duration="1s">
            <div className="about-card text-center">
              <a href="#">
                <div className="image-holder">
                  <i className="lni-pencil-alt"></i>
                </div>
                <h3 className="about-card-heading">Packiko Platform</h3>
                <p className="about-card-detail">
                  ระบบ SaaS อัจฉริยะที่ใช้ AI ช่วยจัดลำดับงานและเส้นทางเดินหยิบของในคลัง
                </p>
              </a>
            </div>
          </div>
          <div className="col-12 col-lg-4 wow slideInUp" data-wow-duration="1s">
            <div className="about-card text-center">
              <a href="#">
                <div className="image-holder">
                  <i className="lni-cog"></i>
                </div>
                <h3 className="about-card-heading">Custom Implementation</h3>
                <p className="about-card-detail">
                  บริการเชื่อมต่อเทคโนโลยีของเราเข้ากับระบบเดิมของคุณ (ERP/WMS) อย่างไร้รอยต่อ
                </p>
              </a>
            </div>
          </div>
          <div className="col-12 col-lg-4 wow slideInRight" data-wow-duration="1s">
            <div className="about-card text-center ">
              <a href="#">
                <div className="image-holder">
                  <i className="lni-code"></i>
                </div>
                <h3 className="about-card-heading">Expert Consulting</h3>
                <p className="about-card-detail">
                  ให้คำปรึกษาโดยทีมที่มีประสบการณ์บริหารคลังจริงกว่า 10 ปี เพื่อแก้ปัญหาที่ต้นตอ
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
