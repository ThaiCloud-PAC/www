import FlowVisual from "./FlowVisual";
import { nb } from "@/lib/th";

export default function Hero() {
  return (
    <section className="banner py-0 cursor-light" id="home">
      <div className="row no-gutters">
        <div id="carouselFade" className="carousel slide carousel-fade" data-ride="carousel" suppressHydrationWarning>
          <div className="carousel-inner">
            <div className="carousel-item active"></div>
            <div className="carousel-item"></div>
            <div className="carousel-item"></div>
          </div>
        </div>
        {/* Social Icons */}
        <ul className="social-icons social-icons-simple revicon d-none d-md-block d-lg-block cursor-light">
          <li className="d-table animated-wrap">
            <a href="#" className="animated-element">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li className="d-table animated-wrap">
            <a href="#" className="animated-element">
              <i className="fab fa-x-twitter"></i>
            </a>
          </li>
          <li className="d-table animated-wrap">
            <a href="#" className="animated-element">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li className="d-table animated-wrap">
            <a href="#" className="animated-element">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>

        <div className="container">
          <div className="row content-carousal">
            <div
              className="col-sm-12 col-lg-6 d-flex align-items-center col-height text-center text-lg-left wow fadeInLeft"
              data-wow-duration="2s"
              data-wow-delay=".1s"
            >
              <div className="detail-sec">
                <span className="hero-eyebrow">Packiko by ThaiCloud</span>
                <h1 className="main-heading">
                  Intelligence Layer <span className="d-block text-orange js-rotating">for Logistics., for Fulfilment., for eCommerce.</span>
                </h1>
                <p className="sub-para margin-sub-heading">
                  {nb("Packiko อยู่หลัง OMS ของคุณ ช่วยร้านออนไลน์และทีมคลังเห็นสต็อกจริง แพ็คไม่พลาด และมีวิดีโอหลักฐานทุกออเดอร์ ออกแบบโดยทีมที่บริหารคลังจริงมากว่า 10 ปี")}
                </p>
                <div className="hero-actions">
                  <a href="#contact-sec" className="btn btn-medium btn-rounded btn-red scroll">
                    Book a Demo
                  </a>
                  <a href="#solution" className="btn btn-medium btn-rounded btn-ghost scroll">
                    See How It Works
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-6 d-flex align-items-center">
              <div className="hero-visual w-100 wow fadeInRight" data-wow-duration="1.5s" data-wow-delay=".2s">
                <FlowVisual />
                <div className="hero-chips">
                  <div className="hero-chip"><b>10+ years</b><small>real warehouse ops</small></div>
                  <div className="hero-chip is-orange"><b>80%</b><small>error reduction</small></div>
                  <div className="hero-chip is-teal"><b>30%</b><small>faster packing</small></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
