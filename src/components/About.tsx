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
              <span></span>Most flexible one page
            </p>
            <h3 className="heading text-center">
              Trending <span className="d-block">Creative Agency</span>
            </h3>
            <p className="text text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere nisi est, sed ullamcorper nibh volutpat at. In rutrum, metus ut posuere gravida, tellus lacus faucibus lectus, sed cursused eros ligula non odio. Suspendisse volutpat sagittis sapien. Curabitur quis malesuada ipsum.
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
                <h3 className="about-card-heading">Logo Designing</h3>
                <p className="about-card-detail">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit augue diam, accumsan.
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
                <h3 className="about-card-heading">Customer Setup</h3>
                <p className="about-card-detail">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit augue diam, accumsan.
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
                <h3 className="about-card-heading">Latest Technologies</h3>
                <p className="about-card-detail">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit augue diam, accumsan.
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
