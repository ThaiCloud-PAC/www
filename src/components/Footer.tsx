export default function Footer() {
  return (
    <>
      {/* Footer Start */}
      <footer className="footer-style-1 bg-gray">
        <div className="container">
          <div className="row align-items-center">
            {/* Social */}
            <div className="col-lg-6">
              <div className="footer-social text-center text-lg-left ">
                <ul className="list-unstyled">
                  <li>
                    <a className="wow fadeInUp" href="#">
                      <i aria-hidden="true" className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a className="wow fadeInDown" href="#">
                      <i aria-hidden="true" className="fab fa-x-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a className="wow fadeInUp" href="#">
                      <i aria-hidden="true" className="fab fa-google-plus-g"></i>
                    </a>
                  </li>
                  <li>
                    <a className="wow fadeInDown" href="#">
                      <i aria-hidden="true" className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a className="wow fadeInUp" href="#">
                      <i aria-hidden="true" className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a className="wow fadeInDown" href="#">
                      <i aria-hidden="true" className="fab fa-pinterest-p"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Text */}
            <div className="col-lg-6 text-center text-lg-right">
              <p className="company-about fadeIn">
                &copy; {new Date().getFullYear()} MegaOne. Made With Love By{" "}
                <a href="#">Themesindustry</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer End */}

      {/* Animated Cursor */}
      <div id="animated-cursor">
        <div id="cursor">
          <div id="cursor-loader"></div>
        </div>
      </div>

      {/* Fixed Menu */}
      <div className="fixed-nav-on-scroll fixed-nav-appear d-none sidemenu_toggle">
        <div className="row no-gutters">
          <div className="col-12 d-flex justify-content-center align-items-center position-relative">
            <div className="fixed-icon-scroll">
              <a className="menu_bars menu-bars-setting link mr-3 mr-lg-0" style={{ cursor: 'pointer' }}>
                <div className="menu-lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
