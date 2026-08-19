import Image from "next/image";

export default function Footer() {
  return (
    <>
      {/* Footer Start */}
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4 mb-5 mb-lg-0">
              <span className="logo-box">
                <Image src="/minimal-creative/images/logo.png" alt="ThaiCloud" width={110} height={64} style={{ width: "110px", height: "auto" }} />
              </span>
              <p className="brand-blurb">
                Packiko by ThaiCloud — The Fulfilment Ecosystem for Online Commerce.
              </p>
              <div className="footer-social">
                <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="#" aria-label="X"><i className="fab fa-x-twitter"></i></a>
                <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
            <div className="col-6 col-lg-2 mb-4 mb-lg-0">
              <h6>Products</h6>
              <ul className="list-unstyled">
                <li><a href="#products" className="scroll">Packiko Add-in</a></li>
                <li><a href="#products" className="scroll">Packiko Prime</a></li>
                <li><a href="#products" className="scroll">Packiko Ultra</a></li>
                <li><a href="#products" className="scroll">Packiko Hub</a></li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 mb-4 mb-lg-0">
              <h6>Company</h6>
              <ul className="list-unstyled">
                <li><a href="#problems" className="scroll">Problems we solve</a></li>
                <li><a href="#solution" className="scroll">Solution</a></li>
                <li><a href="#faq" className="scroll">FAQ</a></li>
                <li><a href="#contact-sec" className="scroll">Contact</a></li>
              </ul>
            </div>
            <div className="col-12 col-lg-4">
              <h6>Contact</h6>
              <ul className="list-unstyled">
                <li><i className="las la-phone-volume mr-2"></i><a href="tel:+66935455599">+66 9 3545 5599</a></li>
                <li><i className="las la-paper-plane mr-2"></i><a href="mailto:hello@thaicloud.com">hello@thaicloud.com</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom d-flex flex-wrap justify-content-between">
            <span>&copy; {new Date().getFullYear()} ThaiCloud PAC Co., Ltd. 0105569016405</span>
            <span>Bangkok, Thailand</span>
          </div>
        </div>
      </footer>
      {/* Footer End */}

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
