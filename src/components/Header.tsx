import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <>
      {/* Start Loader */}
      <div className="loader" id="loader-fade">
        <div className="loader-container center-block">
          <div className="grid-row">
            <div className="col center-block">
              <ul className="loading reversed">
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Loader */}

      {/* Header Start */}
      <header className="top-header cursor-light">
        <div className="row no-gutters">
          <div className="col-4 col-lg-4">
            <Link href="/" title="Logo" className="logo link">
              <Image
                src="/minimal-creative/images/logo.png"
                alt="logo"
                width={120}
                height={40}
                style={{ width: "auto", height: "auto" }}
                className="ml-lg-3 m-0"
              />
            </Link>
          </div>
          <div className="col-8 col-lg-4 d-flex align-items-center justify-content-end justify-content-lg-center">
            <a className="menu_bars menu-bars-setting sidemenu_toggle link mr-3 mr-lg-0" style={{ cursor: 'pointer' }}>
              <div className="menu-lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
          </div>
          <div className="col-4 d-flex justify-content-end">
            <a
              href="#contact-sec"
              className="btn btn-medium btn-rounded btn-trans mr-lg-4 d-none d-lg-inline-block scroll"
            >
              Get a Quote
            </a>
          </div>
        </div>
        <div>
          {/* Center Menu */}
          <div className="side-menu center">
            <div className="quarter-circle" id="btn_sideNavClose">
              <div className="menu_bars2 active link" style={{ cursor: 'pointer' }}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="inner-wrapper justify-content-center">
              <div className="col-md-12 text-center">
                <Link href="/" className="logo-full mb-4 link">
                  <Image src="/minimal-creative/images/logo.png" alt="Logo" width={120} height={40} style={{ width: "auto", height: "auto" }} />
                </Link>
              </div>
              <nav className="side-nav m-0">
                <ul className="navbar-nav flex-lg-row">
                  <li className="nav-item">
                    <a href="#home" className="scroll nav-link link">
                      home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#about" className="scroll nav-link link">
                      about
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#portfolio" className="scroll nav-link link">
                      portfolio
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#pricing-sec" className="scroll nav-link link">
                      pricing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#blog" className="scroll nav-link link">
                      blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#contact-sec" className="scroll nav-link link">
                      contact
                    </a>
                  </li>
                </ul>
              </nav>

              <div className="side-footer text-black w-100">
                <ul className="social-icons-simple">
                  <li className="side-menu-icons animated-wrap">
                    <a href="#" className="animated-element">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="side-menu-icons animated-wrap">
                    <a href="#" className="animated-element">
                      <i className="fab fa-x-twitter"></i>
                    </a>
                  </li>
                  <li className="side-menu-icons animated-wrap">
                    <a href="#" className="animated-element">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li className="side-menu-icons animated-wrap">
                    <a href="#" className="animated-element">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
                <p className="text-black">
                  &copy; {new Date().getFullYear()} MegaOne. Made With Love by Themesindustry
                </p>
              </div>
            </div>
          </div>
          <a id="close_side_menu" href="#" style={{ cursor: 'default' }}></a>
          {/* Side Menu */}
        </div>
      </header>
      {/* Header End */}
    </>
  );
}
