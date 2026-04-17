import Image from "next/image";

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
                <h1 className="main-heading">
                  Design makes <span className="d-block text-orange js-rotating">creativity., artistry.</span>
                </h1>
                <p className="sub-para margin-sub-heading">
                  Donec quis nunc mollis, tincidunt mi vel, pellentesque arcu. Nam nec tristique ex, vitae posuere enim. Nunc vulputate metus id ex pretium fermentum.
                </p>
                <a href="#about" className="btn btn-medium btn-rounded btn-red scroll">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-sm-12 col-lg-6 d-flex align-items-center">
              <div className="row no-gutters">
                <div className="col-12 col-md-6 mini-slider p-0 d-inline-block d-lg-flex justify-content-center align-items-center">
                  <div id="carouselExampleSlidesOnly" className="carousel slide image-div" data-ride="carousel" suppressHydrationWarning>
                    <div className="carousel-inner" suppressHydrationWarning>
                      <div className="carousel-item active wow fadeIn" data-wow-duration="1s" data-wow-delay=".1s">
                        <Image className="d-block w-100" src="/minimal-creative/images/box-img-1.jpg" alt="First slide" width={600} height={400} priority style={{ width: "100%", height: "auto" }} />
                      </div>
                      <div className="carousel-item animation1">
                        <Image className="d-block w-100" src="/minimal-creative/images/box-img-2.jpg" alt="Second slide" width={600} height={400} priority style={{ width: "100%", height: "auto" }} />
                      </div>
                      <div className="carousel-item animation2">
                        <Image className="d-block w-100" src="/minimal-creative/images/box-img-3.jpg" alt="Second slide" width={600} height={400} priority style={{ width: "100%", height: "auto" }} />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Box-1 */}
                <div className="col-12 col-md-6 p-0 wow fadeIn" data-wow-duration="1s" data-wow-delay=".1s">
                  <a href="#portfolio" className="text-decoration-none scroll">
                    <div className="custom-box bg-red box-1">
                      <div className="bg-study-icon">
                        <i className="las la-address-book"></i>
                      </div>
                      <h1 className="box-text mb-sm-2 mt-sm-2 mb-md-3 mt-md-3 mb-lg-3 mt-lg-3">
                        Check Latest Portfolio
                      </h1>
                      <div className="arrow-box">
                        <i className="las la-arrow-right"></i>
                      </div>
                    </div>
                  </a>
                  {/* Box-2 */}
                  <a href="#about" className="text-decoration-none scroll wow fadeIn" data-wow-duration="1s" data-wow-delay="1s">
                    <div className="custom-box bg-orange">
                      <div className="bg-campus-icon">
                        <i className="las la-registered"></i>
                      </div>
                      <h1 className="box-text">Want to know about Company?</h1>
                      <div className="arrow-box1">
                        <i className="las la-arrow-right"></i>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
