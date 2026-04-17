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
              <span></span>Most flexible one page
            </p>
            <h4 className="heading">Agency Packages</h4>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere nisi est, sed ullamcorper nibh volutpat at. In rutrum, metus ut posuere gravida, tellus lacus faucibus lectus, sed cursus eros ligula non odio. Suspendisse volutpat sagittis sapien. Curabitur quis malesuada ipsum.
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
            <h4 className="pricing-card-heading">Startup</h4>
            <p className="pricing-card-text">
              Click edit button to change this text. Lorem dolor sit amet, consectetur adipiscing elit.
            </p>
            <h3 className="pricing-amount">
              <i className="lni-dollar"></i>19<span>/ Month</span>
            </h3>
            <ul className="pricing-features">
              <li>Full Access</li>
              <li>Unlimited Bandwidth</li>
              <li>Email Accounts</li>
              <li>8 Free Forks Every Months</li>
            </ul>
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
            <h4 className="pricing-card-heading">Standard</h4>
            <p className="pricing-card-text">
              Click edit button to change this text. Lorem dolor sit amet, consectetur adipiscing elit.
            </p>
            <h3 className="pricing-amount">
              <i className="lni-dollar"></i>56<span>/ Month</span>
            </h3>
            <ul className="pricing-features">
              <li>Full Access</li>
              <li>Unlimited Bandwidth</li>
              <li>Email Accounts</li>
              <li>8 Free Forks Every Months</li>
            </ul>
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
            <h4 className="pricing-card-heading">Premium</h4>
            <p className="pricing-card-text">
              Click edit button to change this text. Lorem dolor sit amet, consectetur adipiscing elit.
            </p>
            <h3 className="pricing-amount">
              <i className="lni-dollar"></i>89<span>/ Month</span>
            </h3>
            <ul className="pricing-features">
              <li>Full Access</li>
              <li>Unlimited Bandwidth</li>
              <li>Email Accounts</li>
              <li>8 Free Forks Every Months</li>
            </ul>
            <a href="#" className="btn btn-medium btn-rounded btn-black">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
