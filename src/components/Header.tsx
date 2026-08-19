import Link from "next/link";
import Image from "next/image";
import { SOCIALS, external } from "@/lib/socials";

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
                alt="ThaiCloud"
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
            {/* Get a Quote button removed */}
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
                  <Image src="/minimal-creative/images/logo.png" alt="ThaiCloud" width={120} height={40} style={{ width: "auto", height: "auto" }} />
                </Link>
              </div>
              <nav className="side-nav m-0">
                <ul className="navbar-nav flex-lg-row">
                  {[
                    ["#home", "home"],
                    ["#problems", "problems"],
                    ["#solution", "solution"],
                    ["#products", "products"],
                    ["#faq", "faq"],
                    ["#contact-sec", "contact"],
                  ].map(([href, label]) => (
                    <li key={href} className="nav-item">
                      <a href={href} className="scroll nav-link link">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="side-footer text-black w-100">
                <ul className="social-icons-simple">
                  {SOCIALS.map((so) => (
                    <li key={so.key} className="side-menu-icons animated-wrap">
                      <a href={so.href} {...external(so.href)} aria-label={so.label} className="animated-element">
                        <i className={so.icon}></i>
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="text-black">
                  &copy; {new Date().getFullYear()} ThaiCloud PAC Co., Ltd.
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
