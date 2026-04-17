import Image from "next/image";

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      {/* Counter */}
      <div className="container">
        <div className="row my-4 my-md-0">
          <div className="col-12 col-md-3">
            <div className="parallax-box">
              <h2 className="count">80</h2>
              <h5>% Error Reduction</h5>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="parallax-box">
              <h2 className="count text-orange">30</h2>
              <h5>% Faster Packing</h5>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="parallax-box">
              <h2 className="count text-red">80</h2>
              <h5>% Labor Efficiency</h5>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="parallax-box">
              <h2 className="count">5000</h2>
              <h5>Orders / Day</h5>
            </div>
          </div>
        </div>
      </div>
      {/* Portfolio */}
      <div className="container-fluid wow fadeInUp" data-wow-duration="2s" data-wow-delay=".1s">
        <div className="row mt-5 mb-4">
          <div className="col-12 text-center">
            <h3 className="heading">The Future of Logistics <span className="text-orange d-block">is Autonomous</span></h3>
            <p className="text mx-auto" style={{ maxWidth: '800px' }}>
              จากระบบช่วยตัดสินใจ (Operational Intelligence) สู่การทำคลังสินค้าบริหารจัดการตัวเองอัตโนมัติ (Autonomous Fulfillment) เพื่อรองรับการเติบโตของ eCommerce ในระดับภูมิภาค SEA
            </p>
          </div>
        </div>
        <div className="row padding-top">
          <div className="col-sm-12">
            <div className="text-center row">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="item col-md-12 col-lg-3">
                  <div className="team-data-img">
                    <a href={`/minimal-creative/images/cases${item}.jpg`} data-fancybox="images">
                      <div className="single-work">
                        <Image
                          src={`/minimal-creative/images/cases${item}.jpg`}
                          alt="team"
                          className="img-responsive"
                          width={400}
                          height={400}
                          data-no-retina
                        />
                        <div className="overlay-text center-block">
                          <div className="cases-image-inner">
                            <span className="cases-line top"></span>
                            <span className="cases-line top-right"></span>
                            <span className="cases-line bottom"></span>
                            <span className="cases-line bottom-left"></span>
                            <h6 className="text-white text-uppercase alt-font">
                              {item === 1
                                ? "Strategy Buildup"
                                : item === 2
                                ? "Business Planning"
                                : "Creative Ideas"}
                            </h6>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center row">
              {[5, 6, 7, 8].map((item) => (
                <div key={item} className="item col-md-12 col-lg-3">
                  <div className="team-data-img">
                    <a href={`/minimal-creative/images/cases${item}.jpg`} data-fancybox="images">
                      <div className="single-work">
                        <Image
                          src={`/minimal-creative/images/cases${item}.jpg`}
                          alt="team"
                          className="img-responsive"
                          width={400}
                          height={400}
                          data-no-retina
                        />
                        <div className="overlay-text center-block">
                          <div className="cases-image-inner">
                            <span className="cases-line top"></span>
                            <span className="cases-line top-right"></span>
                            <span className="cases-line bottom"></span>
                            <span className="cases-line bottom-left"></span>
                            <h6 className="text-white text-uppercase alt-font">
                              {item === 5
                                ? "Social Media Marketing"
                                : item === 6
                                ? "Financial Consultations"
                                : item === 7
                                ? "Creative Idea Generator"
                                : "Build Up Career"}
                            </h6>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
