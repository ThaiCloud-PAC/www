export default function Home() {
  return (
    <>
      {/*  Loader  */}
<div className="loader" id="loader-fade">
    <div className="loader-container">
        <ul className="loader-box">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</div>
{/*  Loader ends  */}

{/*  Header start  */}
<header className="cursor-light">
    <nav className="navbar navbar-top-default navbar-expand-lg nav-three-circles black bottom-nav nav-box-shadow no-animation">
        <div className="container-fluid">
            <a className="logo ml-lg-1" href="#">
                <img src="creative-studio/img/logo.png" alt="logo" title="Logo" className="logo-default" />
                <img src="creative-studio/img/logo2.png" alt="logo" title="Logo" className="logo-scrolled" />
            </a>
            <div className="collapse navbar-collapse d-none d-lg-block">
                <ul className="nav navbar-nav mx-auto">
                    <li className="nav-item"> <a href="#home" className="scroll nav-link">home</a></li>
                    <li className="nav-item"> <a href="#about" className="scroll nav-link">about</a></li>
                    <li className="nav-item"> <a href="#work" className="scroll nav-link">work</a></li>
                    <li className="nav-item"> <a href="#pricing" className="scroll nav-link">pricing</a></li>
                    <li className="nav-item"> <a href="#clients" className="scroll nav-link">clients</a></li>
                    <li className="nav-item"> <a href="#blog" className="scroll nav-link">blog</a></li>
                    <li className="nav-item"> <a href="#contact" className="scroll nav-link">contact</a></li>
                </ul>
            </div>
            <a href="#" className="btn-setting btn-hvr-up btn-hvr-whatsapp color-black mr-lg-3 d-none d-lg-block"><i className="fab fa-whatsapp"></i> +1 631 112 1134</a>
            {/*  side menu open button  */}
            <a className="menu_bars d-inline-block menu-bars-setting animated-wrap sidemenu_toggle d-block d-lg-none">
                <div className="menu-lines animated-element">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </a>
            {/*  Side Menu  */}
        </div>
    </nav>
    {/*  side menu open button  */}
    <a className="menu_bars menu-bars-setting animated-wrap sidemenu_toggle d-lg-inline-block d-none">
        <div className="menu-lines animated-element">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </a>
    {/*  Side Menu  */}
    <div className="side-menu center">
        <div className="quarter-circle">
            <div className="menu_bars2 active" id="btn_sideNavClose">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div className="inner-wrapper justify-content-center">
            <div className="col-md-12 text-center">
                <a href="#" className="logo-full mb-4"><img src="creative-studio/img/logo-pure-white.png" alt="" /></a>
            </div>
            <nav className="side-nav m-0">
                <ul className="navbar-nav flex-lg-row">
                    <li className="nav-item"> <a href="#home" className="scroll nav-link">home</a></li>
                    <li className="nav-item"> <a href="#about" className="scroll nav-link">about</a></li>
                    <li className="nav-item"> <a href="#work" className="scroll nav-link">work</a></li>
                    <li className="nav-item"> <a href="#pricing" className="scroll nav-link">pricing</a></li>
                    <li className="nav-item"> <a href="#clients" className="scroll nav-link">clients</a></li>
                    <li className="nav-item"> <a href="#blog" className="scroll nav-link">blog</a></li>
                    <li className="nav-item"> <a href="#contact" className="scroll nav-link">contact</a></li>
                </ul>
            </nav>

            <div className="side-footer text-white w-100">
                <ul className="social-icons-simple">
                    <li className="side-menu-icons"><a href="#"><i className="fab fa-facebook-f color-white"></i> </a> </li>
                    <li className="side-menu-icons"><a href="#"><i className="fab fa-instagram color-white"></i> </a> </li>
                    <li className="side-menu-icons"><a href="#"><i className="fab fa-x-twitter color-white"></i> </a> </li>
                </ul>
                <p className="text-white">&copy; 2024 MegaOne. Made With Love by Themesindustry</p>
            </div>
        </div>
    </div>
    <a id="close_side_menu" href="#;"></a>
    {/* Side Menu */}
</header>
{/*  Header end  */}

{/*  Main Section start  */}
<section id="home" className="p-0 h-100vh cursor-light">
    <h2 className="d-none">heading</h2>
    {/* Main Slider */}
    <div id="rev_slider_8_1_wrapper" className="rev_slider_wrapper fullscreen-container" data-alias="weone" data-source="gallery" style={{ background: 'transparent', padding: '0px' }}>
        {/*  START REVOLUTION SLIDER 5.4.8.1 fullscreen mode  */}
        <div id="rev_slider_8_1" className="rev_slider fullscreenbanner" style={{ display: 'none' }} data-version="5.4.8.1">
            <ul>{/*  SLIDE   */}
                {/*  SLIDE 1  */}
                <li data-index="rs-36" data-transition="fade" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off"  data-easein="default" data-easeout="default" data-masterspeed="300" data-rotate="0"  data-saveperformance="off"  data-title="Slide" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">
                    {/*  LAYERS  */}

                    {/*  LAYER Text  */}
                    <div className="tp-caption color-yellow"
                         data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                         data-y="['top','top','top','top']" data-voffset="['270','200','100','55']"
                         data-fontsize="['60','50','40','40']"
                         data-lineheight="['75','75','75','40']"
                         data-width="['556','556','556','300']"
                         data-height="['none','none','none','87']"
                         data-whitespace="nowrap"

                         data-type="text"
                         data-responsive_offset="on"

                         data-frames='[{"delay":100,"split":"chars","splitdelay":0.1,"speed":1480,"split_direction":"random","frame":"0","from":"y:50px;sX:1;sY:1;opacity:0;fb:20px;","color":"rgba(0,0,0,0)","to":"o:1;fb:0;","ease":"Power4.easeInOut"},{"delay":"wait","speed":350,"frame":"999","color":"transparent","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                         data-textalign="['center','center','center','center']"
                         data-paddingtop="[0,0,0,0]"
                         data-paddingright="[0,0,0,0]"
                         data-paddingbottom="[0,0,0,0]"
                         data-paddingleft="[0,0,0,0]"

                         style={{ zIndex: '10', minWidth: '556px', maxWidth: '556px', whiteSpace: 'nowrap', fontSize: '60px', lineHeight: '75px', fontWeight: '300', letterSpacing: '0px', fontFamily: '\'Montserrat\', sans-serif' }}>Creative</div>

                    {/*  LAYER Text  */}
                    <div className="tp-caption color-black"
                         data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                         data-y="['top','top','top','top']" data-voffset="['348','260','155','98']"
                         data-fontsize="['60','50','40','40']"
                         data-lineheight="['75','75','45','45']"
                         data-width="['556','556','556','350']"
                         data-height="['none','none','none','87']"
                         data-whitespace="nowrap"

                         data-type="text"
                         data-responsive_offset="on"

                         data-frames='[{"delay":150,"speed":1500,"frame":"0","from":"z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'

                         data-textalign="['center','center','center','center']"
                         data-paddingtop="[0,0,0,0]"
                         data-paddingright="[0,0,0,0]"
                         data-paddingbottom="[0,0,0,0]"
                         data-paddingleft="[0,0,0,0]"

                         style={{ zIndex: '10', minWidth: '556px', maxWidth: '556px', whiteSpace: 'nowrap', fontWeight: '700', letterSpacing: '0px', fontFamily: '\'Montserrat\', sans-serif' }}><div id="js-rotating">Digital Agency, Modern Works, Design Elevation </div> </div>

                    {/*  LAYER Text  */}
                    <div className="tp-caption color-black"
                         data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                         data-y="['top','middle','middle','middle']" data-voffset="['460','95','0','10']"
                         data-whitespace="normal"
                         data-width="['630','630','550','440']"
                         data-fontsize="['16','15','15','15']"
                         data-lineheight="['25','25','22','22']"
                         data-type="text"
                         data-responsive_offset="on"
                         data-frames='[{"delay":100,"speed":1480,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":350,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                         data-textalign="['center','center','center','center']"
                         data-paddingtop="[0,0,0,0]"
                         data-paddingright="[0,0,0,0]"
                         data-paddingbottom="[0,0,0,0]"
                         data-paddingleft="[0,0,0,0]"

                         style={{ zIndex: '10', minWidth: '650px', maxWidth: '650px', whiteSpace: 'nowrap', fontWeight: '400', letterSpacing: '0px', fontFamily: '\'Source Sans Pro\', sans-serif' }}>Lorem ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum has been the industry’s standard dummy.  Lorem Ipsum has been the industry’s standard dummy.
                    </div>

                    {/*  LAYER Button  */}
                    <div className="tp-caption tp-resizeme"
                         data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                         data-y="['middle','middle','middle','middle']" data-voffset="['170','200','90','120']"
                         data-frames='[{"from":"y:50px;opacity:0;","speed":1000,"to":"o:1;","delay":800,"ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[175%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"},{"frame":"hover","speed":"300","ease":"Power1.easeInOut","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgba(255, 255, 255, 1.00);bc:rgba(255, 255, 255, 1.00);bw:2px 2px 2px 2px;"}]'
                         data-textalign="['center','center','center','center']"
                         data-width="['160','160','160','160']"
                         style={{ zIndex: '10', minWidth: '960px', maxWidth: '960px' }}>
                        <a href="#" className="btn-setting color-black btn-hvr-up btn-hvr-yellow link">learn more</a>
                    </div>

                    {/*  LAYER Cylinder  */}
                    <div className="tp-caption tp-resizeme"
                         data-x="['center','center','center','center']" data-hoffset="['-20','-20','-20','-20']"
                         data-y="['top','top','top','top']" data-voffset="['100','0','-150','-150']"
                         data-width="none"
                         data-height="none"
                         data-whitespace="nowrap"

                         data-type="image"
                         data-responsive_offset="on"

                         data-frames='[{"delay":50,"speed":1480,"frame":"0","from":"x:center;y:bottom;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":350,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                         data-textalign="['inherit','inherit','inherit','inherit']"
                         data-paddingtop="[0,0,0,0]"
                         data-paddingright="[0,0,0,0]"
                         data-paddingbottom="[0,0,0,0]"
                         data-paddingleft="[0,0,0,0]"

                         style={{ zIndex: '1' }}>
                        <div className="rs-looped rs-slideloop"  data-easing="Power0.easeInOut" data-speed="12" data-xs="0" data-xe="60" data-ys="100" data-ye="60"><img src="creative-studio/img/slider-shape1.png" alt="" data-ww="['51px','51px','51px','51px']" data-hh="['52px','52px','52px','52px']"  data-no-retina /> </div></div>

                    {/*  LAYER Top Wave Pink  */}
                    <div className="tp-caption tp-resizeme"
                         data-x="['right','right','right','right']" data-hoffset="['150','150','30','30']"
                         data-y="['top','top','top','top']" data-voffset="['160','80','-100','-100']"
                         data-width="none"
                         data-height="none"
                         data-whitespace="nowrap"

                         data-type="image"
                         data-responsive_offset="on"

                         data-frames='[{"delay":50,"speed":1480,"frame":"0","from":"x:center;y:middle;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":350,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                         data-textalign="['inherit','inherit','inherit','inherit']"
                         data-paddingtop="[0,0,0,0]"
                         data-paddingright="[0,0,0,0]"
                         data-paddingbottom="[0,0,0,0]"
                         data-paddingleft="[0,0,0,0]"

                         style={{ zIndex: '1' }}>
                        <div className="rs-looped rs-slideloop"  data-easing="Power0.easeInOut" data-speed="12" data-xs="0" data-xe="-50" data-ys="50" data-ye="20"><img src="creative-studio/img/slider-shape2.png" alt="" data-ww="['50px','50px','50px','50px']" data-hh="['14px','14px','14px','14px']"  data-no-retina /> </div></div>

                    {/*  LAYER Semi Circle  */}
                    <div className="tp-caption tp-resizeme"

                         data-x="['left','left','left','left']" data-hoffset="['250','80','80','30']"
                         data-y="['top','top','top','top']" data-voffset="['227','-16','-16','-36']"
                         data-width="none"
                         data-height="none"
                         data-whitespace="nowrap"

                         data-type="image"
                         data-responsive_offset="on"

                         data-frames='[{"delay":50,"speed":1480,"frame":"0","from":"x:right;y:bottom;rZ:360deg;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":350,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                         data-textalign="['inherit','inherit','inherit','inherit']"
                         data-paddingtop="[0,0,0,0]"
                         data-paddingright="[0,0,0,0]"
                         data-paddingbottom="[0,0,0,0]"
                         data-paddingleft="[0,0,0,0]"

                         style={{ zIndex: '1' }}>
                        <div className="rs-looped rs-rotate"  data-easing="Power0.easeIn" data-startdeg="0" data-enddeg="360" data-speed="15" data-origin="50% 50%"><img src="creative-studio/img/slider-shape3.png" alt="" data-ww="['67px','67px','67px','67px']" data-hh="['69px','69px','69px','69px']" data-no-retina /> </div></div>

                    {/*  LAYER Circle Gray Small  */}
                    <div className="tp-caption"

                         data-x="['right','right','right','right']" data-hoffset="['300','200','100','100']"
                         data-y="['bottom','bottom','center','center']" data-voffset="['200','50','200','200']"
                         data-whitespace="normal"

                         data-type="image"
                         data-responsive_offset="on"

                         data-frames='[{"delay":50,"speed":1490,"frame":"0","from":"x:center;y:top;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":350,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                         data-textalign="['inherit','inherit','inherit','inherit']"
                         data-paddingtop="[0,0,0,0]"
                         data-paddingright="[0,0,0,0]"
                         data-paddingbottom="[0,0,0,0]"
                         data-paddingleft="[0,0,0,0]"

                         style={{ zIndex: '2' }}>
                        <div className="rs-looped rs-wave"  data-speed="12" data-angle="90" data-radius="22px" data-origin="50% 50%">
                            <div className="animated-wrap slider-social icon-small">
                                <div className="animated-element icon-box-small bg-gray-two pinterest-bg-hvr d-flex justify-content-center align-items-center">
                                    <a className="pinterest-text-hvr" href="#;">
                                        <i className="fab fa-youtube font-16" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  LAYER Circle Pink Small  */}
                    <div className="tp-caption"

                         data-x="['left','left','left','left']" data-hoffset="['350','350','120','120']"
                         data-y="['bottom','bottom','center','center']" data-voffset="['80','0','200','200']"
                         data-width="none"
                         data-height="none"
                         data-whitespace="normal"

                         data-type="image"
                         data-responsive_offset="on"

                         data-frames='[{"delay":50,"speed":1490,"frame":"0","from":"y:center;x:bottom;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":350,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                         data-textalign="['inherit','inherit','inherit','inherit']"
                         data-paddingtop="[0,0,0,0]"
                         data-paddingright="[0,0,0,0]"
                         data-paddingbottom="[0,0,0,0]"
                         data-paddingleft="[0,0,0,0]"

                         style={{ zIndex: '2' }}>

                        <div className="rs-looped rs-wave"  data-speed="12" data-angle="-90" data-radius="22px" data-origin="-50% -50%">
                            <div className="animated-wrap slider-social icon-small">
                                <div className="animated-element icon-box-small bg-pink-two instagram-bg-hvr d-flex justify-content-center align-items-center">
                                    <a className="instagram-text-hvr" href="#;">
                                        <i className="fab fa-instagram font-16" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  LAYER Circle Yellow  */}
                    <div className="tp-caption"

                         data-x="['right','right','right','right']" data-hoffset="['-110','-20','0','0']"
                         data-y="['middle','middle','bottom','bottom']" data-voffset="['200','300','50','10']"
                         data-width="none"
                         data-height="none"
                         data-whitespace="normal"

                         data-type="image"
                         data-responsive_offset="on"

                         data-frames='[{"delay":50,"speed":1490,"frame":"0","from":"x:center;y:top;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":350,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                         data-textalign="['inherit','inherit','inherit','inherit']"
                         data-paddingtop="[0,0,0,0]"
                         data-paddingright="[0,0,0,0]"
                         data-paddingbottom="[0,0,0,0]"
                         data-paddingleft="[0,0,0,0]"

                         style={{ zIndex: '2' }}>

                        <div className="rs-looped rs-wave"  data-speed="19" data-angle="45" data-radius="22px" data-origin="50% 50%">
                            <div className="animated-wrap slider-social icon-small">
                                <div className="animated-element icon-box-large-two bg-yellow twitter-bg-hvr d-flex justify-content-center align-items-center">
                                    <a className="twitter-text-hvr" href="#;">
                                        <i className="fab fa-x-twitter font-20" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  LAYER Circle Pink  */}
                    <div className="tp-caption"

                         data-x="['left','left','left','left']" data-hoffset="['-250','-20','0','0']"
                         data-y="['middle','middle','bottom','bottom']" data-voffset="['70','70','100','100']"
                         data-width="none"
                         data-height="none"
                         data-whitespace="normal"

                         data-type="image"
                         data-responsive_offset="on"

                         data-frames='[{"delay":50,"speed":1490,"frame":"0","from":"y:center;x:bottom;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":350,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                         data-textalign="['inherit','inherit','inherit','inherit']"
                         data-paddingtop="[0,0,0,0]"
                         data-paddingright="[0,0,0,0]"
                         data-paddingbottom="[0,0,0,0]"
                         data-paddingleft="[0,0,0,0]"

                         style={{ zIndex: '2' }}>

                        <div className="rs-looped rs-slideloop"  data-easing="Power0.easeInOut" data-speed="12" data-xs="0" data-xe="0" data-ys="-10" data-ye="60">
                            <div className="animated-wrap slider-social icon-small">
                                <div className="animated-element icon-box-large bg-pink facebook-bg-hvr d-flex justify-content-center align-items-center">
                                <a className="facebook-text-hvr" href="#;">
                                    <i className="fab fa-facebook-f font-20" aria-hidden="true"></i>
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  LAYER Bottom Wave Gray  */}
                    <div className="tp-caption tp-resizeme"

                         data-x="['right','right','right','right']" data-hoffset="['-200','-200','-5000','-5000']"
                         data-y="['bottom','bottom','bottom','bottom']" data-voffset="['150','150','150','150']"
                         data-width="none"
                         data-height="none"
                         data-whitespace="nowrap"

                         data-type="image"
                         data-responsive_offset="on"

                         data-frames='[{"delay":50,"speed":1480,"frame":"0","from":"x:center;y:middle;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":350,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                         data-textalign="['inherit','inherit','inherit','inherit']"
                         data-paddingtop="[0,0,0,0]"
                         data-paddingright="[0,0,0,0]"
                         data-paddingbottom="[0,0,0,0]"
                         data-paddingleft="[0,0,0,0]"

                         style={{ zIndex: '1' }}>
                        <div className="rs-looped rs-slideloop"  data-easing="Power0.easeInOut" data-speed="12" data-xs="0" data-xe="0" data-ys="10" data-ye="-50"><img src="creative-studio/img/slider-shape4.png" alt="" data-ww="['24px','24px','24px','24px']" data-hh="['87px','87px','87px','87px']"  data-no-retina /> </div></div>

                    {/*  LAYER Bottom Diamond  */}
                    <div className="tp-caption tp-resizeme"
                         data-x="['left','left','left','left']" data-hoffset="['83','66','20','20']"
                         data-y="['bottom','bottom','bottom','bottom']" data-voffset="['200','80','-100','-100']"
                         data-width="none"
                         data-height="none"
                         data-whitespace="nowrap"

                         data-type="image"
                         data-responsive_offset="on"

                         data-frames='[{"delay":50,"speed":1480,"frame":"0","from":"x:center;y:middle;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":350,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                         data-textalign="['inherit','inherit','inherit','inherit']"
                         data-paddingtop="[0,0,0,0]"
                         data-paddingright="[0,0,0,0]"
                         data-paddingbottom="[0,0,0,0]"
                         data-paddingleft="[0,0,0,0]"

                         style={{ zIndex: '1' }}>
                        <div className="rs-looped rs-slideloop" data-easing="Power0.easeInOut" data-speed="12" data-ys="-40" data-ye="40" data-xs="0" data-xe="20"><img src="creative-studio/img/slider-shape5.png" alt="" data-ww="['44px','44px','44px','44px']" data-hh="['87px','87px','87px','87px']"  data-no-retina /> </div></div>

                    {/*  LAYER Top Diamond  */}
                    <div className="tp-caption tp-resizeme"
                         data-x="['right','right','right','right']" data-hoffset="['150','150','50','50']"
                         data-y="['top','top','top','top']" data-voffset="['70','-70','-130','-130']"
                         data-width="none"
                         data-height="none"
                         data-whitespace="nowrap"

                         data-type="image"
                         data-responsive_offset="on"

                         data-frames='[{"delay":50,"speed":1480,"frame":"0","from":"x:center;y:middle;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":350,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                         data-textalign="['inherit','inherit','inherit','inherit']"
                         data-paddingtop="[0,0,0,0]"
                         data-paddingright="[0,0,0,0]"
                         data-paddingbottom="[0,0,0,0]"
                         data-paddingleft="[0,0,0,0]"

                         style={{ zIndex: '1' }}>
                        <div className="rs-looped rs-wave" data-speed="12" data-angle="90" data-radius="12px" data-origin="0% 0%"><img src="creative-studio/img/slider-shape6.png" alt="" data-ww="['44px','44px','44px','44px']" data-hh="['87px','87px','87px','87px']"  data-no-retina /> </div></div>

                    {/*  LAYER Top Left  */}
                    <div className="tp-caption"
                         data-x="['left','left','left','left']" data-hoffset="['-500','-500','5000','5000']"
                         data-y="['top','top','top','top']" data-voffset="['-100','-100','0','0']"
                         data-whitespace="nowrap"
                         data-width="['394px','394px','394px','394px']" data-height="['393px','393px','393px','393px']"
                         data-responsive_offset="on"

                         data-frames='[{"delay":319.921875,"speed":500,"frame":"0","from":"z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power2.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                         data-textalign="['inherit','inherit','inherit','inherit']"
                         data-paddingtop="[0,0,0,0]"
                         data-paddingright="[0,0,0,0]"
                         data-paddingbottom="[0,0,0,0]"
                         data-paddingleft="[0,0,0,0]"

                         style={{ zIndex: '1' }}>
                        <div className="rs-looped rs-rotate" data-easing="Power0.easeIn" data-speed="150" data-startdeg="0" data-enddeg="360" data-origin="45% 45%"><img src="creative-studio/img/circle-top-left.png" alt="" data-ww="['394px','394px','394px','394px']" data-hh="['394px','394px','394px','394px']"  data-no-retina /> </div>
                    </div>

                    {/*  LAYER Top Right Inner  */}
                    <div className="tp-caption"
                         data-x="['left','left','left','left']" data-hoffset="['1180','1180','5000','5000']"
                         data-y="['top','top','top','top']" data-voffset="['-200','-200','-200','-200']"
                         data-width="['575px','575px','575px','575px']" data-height="['571px','571px','571px','571px']"

                         data-frames='[{"delay":319.921875,"speed":500,"frame":"0","from":"z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power2.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                         data-textalign="['inherit','inherit','inherit','inherit']"
                         data-paddingtop="[0,0,0,0]"
                         data-paddingright="[0,0,0,0]"
                         data-paddingbottom="[0,0,0,0]"
                         data-paddingleft="[0,0,0,0]"

                         style={{ zIndex: '1' }}>
                        <div className="rs-looped rs-wave"  data-speed="6" data-angle="0" data-radius="5px" data-origin="50% 50%"><img src="creative-studio/img/circle-top-right-inner.png" alt="" data-ww="['575px','575px','575px','575px']" data-hh="['571px','571px','571px','571px']" /> </div>
                    </div>

                    {/*  LAYER Top Right  */}
                    <div className="tp-caption"
                         data-x="['left','left','left','left']" data-hoffset="['1280','1280','5000','5000']"
                         data-y="['top','top','top','top']" data-voffset="['-110','-110','-110','-110']"
                         data-width="['381px','381px','381px','381px']" data-height="['380px','380px','380px','380px']"

                         data-frames='[{"delay":319.921875,"speed":500,"frame":"0","from":"z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power2.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                         data-textalign="['inherit','inherit','inherit','inherit']"
                         data-paddingtop="[0,0,0,0]"
                         data-paddingright="[0,0,0,0]"
                         data-paddingbottom="[0,0,0,0]"
                         data-paddingleft="[0,0,0,0]"

                         style={{ zIndex: '1' }}>
                        <div className="rs-looped"  data-easing="Power0.easeInOut" data-speed="0" data-xs="0" data-xe="0" data-ys="0" data-ye="0"><img src="creative-studio/img/circle-top-right.png" alt="" data-ww="['381px','381px','381px','381px']" data-hh="['380px','380px','380px','380px']"  data-no-retina /> </div>
                    </div>

                    {/*  LAYER Center  */}
                    <div className="tp-caption tp-resizeme rs-parallaxlevel-8"
                         data-x="['left','left','center','center']" data-hoffset="['300','300','-5000','-5000']"
                         data-y="['top','top','middle','middle']" data-voffset="['50','50','0','0']"
                         data-type="image"
                         data-responsive_offset="on"

                         data-frames='[{"delay":319.921875,"speed":500,"frame":"0","from":"z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power2.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'

                         style={{ zIndex: '1' }}>
                        <div className="rs-looped rs-wave"  data-speed="15" data-angle="90" data-radius="12px" data-origin="50% 50%"><img src="creative-studio/img/circle-center.png" alt="" data-ww="['672px','672px','500px','320px']" data-hh="['673px','673px','500px','320px']" data-no-retina /> </div>
                    </div>

                    {/*  LAYER Arrows  */}
                    <div className="tp-caption tp-resizeme"
                         data-x="['left','left','left','left']" data-hoffset="['30','30','-20','-100']"
                         data-y="['top','top','top','top']" data-voffset="['50','50','50','50']"
                         data-width="none"
                         data-height="none"
                         data-whitespace="nowrap"

                         data-type="image"
                         data-responsive_offset="on"

                         data-frames='[{"delay":50,"speed":1480,"frame":"0","from":"x:center;y:middle;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":350,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                         data-textalign="['inherit','inherit','inherit','inherit']"
                         data-paddingtop="[0,0,0,0]"
                         data-paddingright="[0,0,0,0]"
                         data-paddingbottom="[0,0,0,0]"
                         data-paddingleft="[0,0,0,0]"

                         style={{ zIndex: '1' }}>
                        <div className="rs-looped rs-slideloop"  data-easing="Power0.easeInOut" data-speed="30" data-xs="-90" data-xe="90" data-ys="0" data-ye="20"><img src="creative-studio/img/arrows.png" alt="" data-ww="['97px','97px','97px','97px']" data-hh="['98px','98px','98px','98px']"  data-no-retina /> </div></div>

                </li>
            </ul>

            <div className="tp-bannertimer" style={{ height: '5px', background: 'rgba(0,0,0,0.15)' }}></div>	</div>
    </div>
    {/* Main Slider ends  */}

</section>
{/*  Main Section end  */}

{/* About start */}
<section className="about pb-0 overflow-visible" id="about">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 pr-5 mb-5 mb-lg-0 wow fadeInLeft">
                <div className="rare-box"></div>
                <img src="creative-studio/img/about.jpg" className="about-img-small position-relative w-100" alt="" />
            </div>
            <div className="col-lg-6 pl-6">
                <div className="main-title text-lg-left offset-md-1 mb-0 wow fadeInUp" data-wow-delay="300ms">
                    <h5 className="wow fadeInUp" data-wow-delay="300ms"> Lorem ipsum dolor sit amet consectetur </h5>
                    <h2 className="wow fadeInUp font-weight-light" data-wow-delay="400ms"> We are making <span className="color-pink">design</span> better for everyone</h2>
                    <p className="pb-4 wow fadeInUp" data-wow-delay="500ms">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed augue diam, accumsan vitae justo non, euismod aliquam lectus. Etiam elementum tortor quis risus posuere, in cursus arcu lobortis.</p>

                    <ul className="pb-5 text-left wow fadeInUp" data-wow-delay="600ms">
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Morbi ornare nibh id cursus vestibulum.</li>
                        <li>Duis vitae lectus facilisis, tristique lorem sit amet, malesuada diam.</li>
                    </ul>

                    <a href="#" className="btn-setting color-black btn-hvr-up btn-yellow btn-hvr-pink text-white link wow fadeInUp" data-wow-delay="700ms">learn more</a>
                </div>
            </div>
        </div>
    </div>
</section>
{/* About end */}

{/*  About Boxes start  */}
<section>
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="main-title wow fadeIn" data-wow-delay="300ms">
                    <h2>We’re <span className="color-pink">Creative</span> Branding<br />and Corporate Identity <span className="color-blue">Agency</span></h2>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
                <div className="about-box mb-5 mb-lg-0 mx-auto bg-blue">
                    <span className="pro-step d-inline-block color-white"><i className="fa fa-pencil-alt"></i></span>
                    <h5 className="font-weight-500 color-white mt-25px mb-15px text-capitalize">branding design</h5>
                    <p className="font-weight-light color-white">Lorem dapibus, tortor eget turpis auctor, convallis odio ac.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
                <div className="about-box mb-5 mb-lg-0 mx-auto bg-yellow">
                    <span className="pro-step d-inline-block color-white"><i className="fa fa-cog"></i></span>
                    <h5 className="font-weight-500 color-white mt-25px mb-15px">SEO Marketing</h5>
                    <p className="font-weight-light color-white">Etiam luctus, lacus maximus elementum dapibus felis.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12">
                <div className="about-box mb-0 mx-auto bg-pink">
                    <span className="pro-step d-inline-block color-white"><i className="fa fa-code"></i></span>
                    <h5 className="font-weight-500 color-white mt-25px mb-15px text-capitalize">web development</h5>
                    <p className="font-weight-light color-white">Pellentesque habitant morbi tristique senectus et malesuada.</p>
                </div>
            </div>
        </div>
    </div>
</section>
{/*  About Boxes ends  */}

{/*  Team start  */}
<section id="team" className="bg-light-gray">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="main-title wow fadeIn" data-wow-delay="300ms">
                    <h5> Lorem ipsum dolor sit amet </h5>
                    <h2 className="mb-0">Our <span className="color-pink">Creative</span> Team </h2>
                </div>
            </div>
        </div>
        <div className="row wow fadeInUp team" data-wow-delay="300">
            <div className="col-lg-6 col-xl-3 p-0 team-col ml-md-auto mr-md-0 mx-auto">
                <div className="team-image">
                    <img src="creative-studio/img/team1.jpg" alt="team1" className="m-image1" />
                </div>
                <div className="team-classic-content hvr-team pink">
                    <h3 className="mb-3 text-capitalize color-black">Jessica Jones</h3>
                    <h5 className="mb-3 text-capitalize color-pink">Lead Designer</h5>
                    <p className="mt-3 mb-3 color-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit augue.</p>
                    <ul className="team-social">
                        <li className="d-inline-block"><a href="#" className="facebook-bg-hvr"><i className="fab fa-facebook-f" aria-hidden="true"></i></a></li>
                        <li className="d-inline-block"><a href="#" className="twitter-bg-hvr"><i className="fab fa-x-twitter" aria-hidden="true"></i></a></li>
                        <li className="d-inline-block"><a href="#" className="google-bg-hvr"><i className="fab fa-google" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-6 col-xl-3 p-0 team-col2 mr-md-auto ml-md-0 mx-auto">
                <div className="row">
                    <div className="col-md-12 order-md-1">
                        <div className="team-image">
                            <img src="creative-studio/img/team2.jpg" alt="team2" className="m-image2" />
                        </div>
                    </div>
                    <div className="col-md-12 order-md-0">
                        <div className="team-classic-content hvr-team2 blue">
                            <h3 className="mb-3 text-capitalize color-black">Rob Clark</h3>
                            <h5 className="mb-3 text-capitalize color-blue">marketing head</h5>
                            <p className="mt-3 mb-3 color-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit augue.</p>
                            <ul className="team-social">
                                <li className="d-inline-block"><a href="#" className="facebook-bg-hvr"><i className="fab fa-facebook-f" aria-hidden="true"></i></a></li>
                                <li className="d-inline-block"><a href="#" className="twitter-bg-hvr"><i className="fab fa-x-twitter" aria-hidden="true"></i></a></li>
                                <li className="d-inline-block"><a href="#" className="google-bg-hvr"><i className="fab fa-google" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-100 d-none d-lg-block d-xl-none"></div>
            <div className="col-lg-6 col-xl-3 p-0 team-col ml-md-auto mr-md-0 mx-auto team-row2">
                <div className="team-image">
                    <img src="creative-studio/img/team3.jpg" alt="team3" className="m-image3" />
                </div>
                <div className="team-classic-content hvr-team yellow">
                    <h3 className="mb-3 text-capitalize color-black">Nicole Cross</h3>
                    <h5 className="mb-3 text-capitalize color-yellow">Visualizer</h5>
                    <p className="mt-3 mb-3 color-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit augue.</p>
                    <ul className="team-social">
                        <li className="d-inline-block"><a href="#" className="facebook-bg-hvr"><i className="fab fa-facebook-f" aria-hidden="true"></i></a></li>
                        <li className="d-inline-block"><a href="#" className="twitter-bg-hvr"><i className="fab fa-x-twitter" aria-hidden="true"></i></a></li>
                        <li className="d-inline-block"><a href="#" className="google-bg-hvr"><i className="fab fa-google" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-6 col-xl-3 p-0 team-col2 mr-md-auto ml-md-0 mx-auto team-row2">
                <div className="row">
                    <div className="col-md-12 order-md-1">
                        <div className="team-image2">
                            <img src="creative-studio/img/team4.jpg" alt="team4" className="m-image2" />
                        </div>
                    </div>
                    <div className="col-md-12 order-md-0">
                        <div className="team-classic-content hvr-team2 pink">
                            <h3 className="mb-3 text-capitalize color-black">Albert Rodricks</h3>
                            <h5 className="mb-3 text-capitalize color-pink">Creative Lead</h5>
                            <p className="mt-3 mb-3 color-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit augue.</p>
                            <ul className="team-social">
                                <li className="d-inline-block"><a href="#" className="facebook-bg-hvr"><i className="fab fa-facebook-f" aria-hidden="true"></i></a></li>
                                <li className="d-inline-block"><a href="#" className="twitter-bg-hvr"><i className="fab fa-x-twitter" aria-hidden="true"></i></a></li>
                                <li className="d-inline-block"><a href="#" className="google-bg-hvr"><i className="fab fa-google" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
{/*  Team ends  */}

{/*  Quote start  */}
<section className="parallax-setting parallaxie parallax1">
    <h2 className="d-none">heading</h2>
        <div className="container">
            <div className="row align-items-center position-relative">
                <div className="col-md-12">
                    <div className="quote-text text-center wow fadeInRight" data-wow-delay="300ms">
                        <div className="quote d-flex justify-content-start mb-2rem"><i className="fa fa-quote-left"></i></div>
                        <h2 className="font-weight-light mb-5 line-height-normal"><span className="color-yellow">Creativity</span> is allowing yourself to make mistakes Art is knowing which ones to keep.</h2>
                        <h3 className="color-pink">Alice Johnson</h3>
                        <div className="quote d-flex justify-content-end mb-3"><i className="fa fa-quote-right"></i></div>
                    </div>
                </div>
            </div>
        </div>
</section>
{/*  Quote ends  */}

{/*  Work Starts  */}
<section id="work" className="pb-0">
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-12">
                <div className="main-title wow fadeIn" data-wow-delay="300ms">
                    <h5> Lorem ipsum dolor sit amet </h5>
                    <h2 className="mb-0">Creative<span className="color-pink"> Portfolio</span> </h2>
                </div>
            </div>
        </div>
        <div className="row d-block">

            <div id="js-filters-mosaic-flat" className="cbp-l-filters-alignCenter">
                <div data-filter="*" className="cbp-filter-item-active cbp-filter-item cbp-filter-style">
                    All <div className="cbp-filter-counter"></div>
                </div>
                <div data-filter=".graphic-designs" className="cbp-filter-item cbp-filter-style">
                    Graphic Designs <div className="cbp-filter-counter"></div>
                </div>
                <div data-filter=".web-designs" className="cbp-filter-item cbp-filter-style">
                    Web Designs <div className="cbp-filter-counter"></div>
                </div>
                <div data-filter=".seo" className="cbp-filter-item cbp-filter-style">
                    SEO <div className="cbp-filter-counter"></div>
                </div>
                <div data-filter=".marketing" className="cbp-filter-item">
                    Marketing <div className="cbp-filter-counter"></div>
                </div>
            </div>

            <div id="js-grid-mosaic-flat" className="cbp cbp-l-grid-mosaic-flat no-transition">
                <div className="cbp-item web-designs marketing">
                    <a href="creative-studio/img/work1.jpg" className="cbp-caption cbp-lightbox" data-title="Bolt UI<br />by Tiberiu Neamu">
                        <div className="cbp-caption-defaultWrap">
                            <img src="creative-studio/img/work1.jpg" alt="work" />
                        </div>
                        <div className="cbp-caption-activeWrap">
                            <div className="cbp-l-caption-alignCenter">
                                <div className="cbp-l-caption-body">
                                    <p>Elegant | Images</p>
                                    <div className="cbp-l-caption-title">We are digital agency</div>
                                    <span className="work-icon">
                                            <i className="fa fa-arrow-right"></i>
                                        </span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="cbp-item graphic-designs seo">
                    <a href="creative-studio/img/work2.jpg" className="cbp-caption cbp-lightbox" data-title="World Clock<br />by Paul Flavius Nechita">
                        <div className="cbp-caption-defaultWrap">
                            <img src="creative-studio/img/work2.jpg" alt="work" />
                        </div>
                        <div className="cbp-caption-activeWrap">
                            <div className="cbp-l-caption-alignCenter">
                                <div className="cbp-l-caption-body">
                                    <p>Elegant | Images</p>
                                    <div className="cbp-l-caption-title">Creative art work</div>
                                    <span className="work-icon">
                                            <i className="fa fa-arrow-right"></i>
                                        </span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="cbp-item graphic-designs web-designs">
                    <a href="creative-studio/img/work3.jpg" className="cbp-caption cbp-lightbox" data-title="WhereTO App<br />by Tiberiu Neamu">
                        <div className="cbp-caption-defaultWrap">
                            <img src="creative-studio/img/work3.jpg" alt="work" />
                        </div>
                        <div className="cbp-caption-activeWrap">
                            <div className="cbp-l-caption-alignCenter">
                                <div className="cbp-l-caption-body">
                                    <p>Elegant | Images</p>
                                    <div className="cbp-l-caption-title">Modern portfolio</div>
                                    <span className="work-icon">
                                            <i className="fa fa-arrow-right"></i>
                                        </span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="cbp-item seo marketing">
                    <a href="creative-studio/img/work6.jpg" className="cbp-caption cbp-lightbox" data-title="Remind~Me Widget<br />by Tiberiu Neamu">
                        <div className="cbp-caption-defaultWrap">
                            <img src="creative-studio/img/work6.jpg" alt="work" />
                        </div>
                        <div className="cbp-caption-activeWrap">
                            <div className="cbp-l-caption-alignCenter">
                                <div className="cbp-l-caption-body">
                                    <p>Elegant | Images</p>
                                    <div className="cbp-l-caption-title">Digital art works</div>
                                    <span className="work-icon">
                                            <i className="fa fa-arrow-right"></i>
                                        </span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <div className="cbp-item web-designs seo">
                    <a href="creative-studio/img/work4.jpg" className="cbp-caption cbp-lightbox" data-title="Seemple* Music<br />by Tiberiu Neamu">
                        <div className="cbp-caption-defaultWrap">
                            <img src="creative-studio/img/work4.jpg" alt="work" />
                        </div>
                        <div className="cbp-caption-activeWrap">
                            <div className="cbp-l-caption-alignCenter">
                                <div className="cbp-l-caption-body">
                                    <p>Elegant | Images</p>
                                    <div className="cbp-l-caption-title">Photography</div>
                                    <span className="work-icon">
                                            <i className="fa fa-arrow-right"></i>
                                        </span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="cbp-item web-designs marketing">
                    <a href="creative-studio/img/work5.jpg" className="cbp-caption cbp-lightbox" data-title="iDevices<br />by Tiberiu Neamu">
                        <div className="cbp-caption-defaultWrap">
                            <img src="creative-studio/img/work5.jpg" alt="work" />
                        </div>
                        <div className="cbp-caption-activeWrap">
                            <div className="cbp-l-caption-alignCenter">
                                <div className="cbp-l-caption-body">
                                    <p>Elegant | Images</p>
                                    <div className="cbp-l-caption-title">Modern workspace</div>
                                    <span className="work-icon">
                                            <i className="fa fa-arrow-right"></i>
                                        </span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

            </div>
        </div>
    </div>
</section>
{/*  Work ends  */}

{/*  Pricing start  */}
<section id="pricing" className="bg-light-gray pricing-padding">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="main-title wow fadeIn" data-wow-delay="300ms">
                    <h5> Lorem ipsum dolor sit amet </h5>
                    <h2 className="mb-0">Flexible<span className="color-pink"> Pricing</span> Packages </h2>
                </div>
            </div>
        </div>
        <div className="row mt-66px mt-xs-4rem">
            <div className="col-lg-4 col-md-6 col-sm-12 text-center mb-xs-5 wow fadeInUp">
                <div className="pricing-item hvr-bg-blue">
                    <div className="price-box clearfix">
                        <div className="price_title">
                            <h4 className="text-capitalize">Basic</h4>
                        </div>
                    </div>
                    <div className="price">
                        <h2 className="position-relative"><span className="dollar">$</span>19<span className="month">/ month</span></h2>
                    </div>
                    <div className="price-description">
                        <p>Full Access</p>
                        <p>Unlimited Bandwidth</p>
                        <p>Email Accounts</p>
                        <p>8 Free Forks Every Months</p>
                    </div>
                    <div className="text-center">
                        <a href="#" className="btn-setting color-black btn-hvr-up btn-blue btn-hvr-white">learn more</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 text-center mb-xs-5 wow fadeInUp">
                <div className="pricing-item price-transform hvr-bg-yellow">
                    <div className="quarter-triangle"></div>

                    <div className="triangle-inner-content">
                        <i className="fa fa-star"></i>
                        <span> SPECIAL </span>
                    </div>

                    <div className="price-box2 clearfix">
                        <div className="price_title">
                            <h4 className="text-capitalize m-0">Standard</h4>
                            <p className="price-sub-heading text-capitalize">the most popular</p>
                        </div>
                    </div>
                    <div className="price">
                        <h2 className="position-relative"><span className="dollar">$</span>29<span className="month">/ month</span></h2>
                    </div>
                    <div className="price-description">
                        <p> Full Access</p>
                        <p>Unlimited Bandwidth</p>
                        <p>Email Accounts</p>
                        <p>8 Free Forks Every Months</p>
                    </div>
                    <div className="text-center">
                        <a href="#" className="btn-setting color-black btn-hvr-up btn-yellow btn-hvr-white">learn more</a>
                    </div>

                </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 text-center wow fadeInUp">
                <div className="pricing-item hvr-bg-pink">
                    <div className="price-box clearfix">
                        <div className="price_title">
                            <h4 className="text-capitalize">Advance</h4>
                        </div>
                    </div>
                    <div className="price">
                        <h2 className="position-relative"><span className="dollar">$</span>49<span className="month">/ month</span></h2>
                    </div>
                    <div className="price-description">
                        <p> Full Access</p>
                        <p>Unlimited Bandwidth</p>
                        <p>Email Accounts</p>
                        <p>8 Free Forks Every Months</p>
                    </div>
                    <div className="text-center">
                        <a href="#" className="btn-setting color-black btn-hvr-up btn-pink btn-hvr-white">learn more</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
{/*  Pricing ends  */}

{/*  Clients start  */}
<section id="clients" className="bg-white p-0 cursor-light no-transition">
    <h2 className="d-none">heading</h2>
    <div className="section-padding parallax-setting parallaxie parallax2">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="main-title wow fadeIn" data-wow-delay="300ms">
                        <h5> Lorem ipsum dolor sit amet </h5>
                        <h2 className="mb-0">Valuable<span className="color-pink"> Clients</span></h2>
                    </div>
                </div>
            </div>

            <div className="testimonial-images">
                <div className="owl-thumbs owl-dots d-lg-block d-none">
                    <div className="owl-dot animated-wrap active"><img src="creative-studio/img/testimonial1.png" alt="" className="animated-element" /></div>
                    <div className="owl-dot animated-wrap"><img src="creative-studio/img/testimonial2.png" alt="" className="animated-element" /></div>
                    <div className="owl-dot animated-wrap"><img src="creative-studio/img/testimonial3.png" alt="" className="animated-element" /></div>
                    <div className="owl-dot animated-wrap"><img src="creative-studio/img/testimonial4.png" alt="" className="animated-element" /></div>

                    <div className="owl-dot animated-wrap"><img src="creative-studio/img/testimonial5.png" alt="" className="animated-element" /></div>
                    <div className="owl-dot animated-wrap"><img src="creative-studio/img/testimonial6.png" alt="" className="animated-element" /></div>
                    <div className="owl-dot animated-wrap"><img src="creative-studio/img/testimonial7.jpg" alt="" className="animated-element" /></div>
                    <div className="owl-dot animated-wrap"><img src="creative-studio/img/testimonial8.jpg" alt="" className="animated-element" /></div>
                </div>
            </div>

            <div className="row align-items-center position-relative">
                <div className="col-md-12">
                    <div className="owl-carousel owl-theme testimonial-two hide-cursor mx-auto wow zoomIn" data-wow-delay="400ms">
                        <div className="testimonial-item">
                            <p className="color-black testimonial-para mb-15px"> Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus metus sollicitudin. Quisque vitae sodales lectus. Nam porttitor justo sed mi finibus, vel tristique risus faucibus. </p>
                            <div className="testimonial-post">
                                <a href="#" className="post"><img src="creative-studio/img/testimonial1.png" alt="image" /></a>
                                <div className="text-content">
                                    <h5 className="color-black text-capitalize">David Walker</h5>
                                    <p className="color-grey"> Chairman, AcroEx </p>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item hide-cursor">
                            <p className="color-black testimonial-para mb-15px"> Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus metus sollicitudin. Quisque vitae sodales lectus. Nam porttitor justo sed mi finibus, vel tristique risus faucibus. </p>

                            <div className="testimonial-post">
                                <a href="#" className="post"><img src="creative-studio/img/testimonial2.png" alt="image" /></a>
                                <div className="text-content">
                                    <h5 className="color-black text-capitalize">Christina Williams</h5>
                                    <p className="color-grey"> HR Manager </p>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item">
                            <p className="color-black testimonial-para mb-15px"> Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus metus sollicitudin. Quisque vitae sodales lectus. Nam porttitor justo sed mi finibus, vel tristique risus faucibus. </p>

                            <div className="testimonial-post">
                                <a href="#" className="post"><img src="creative-studio/img/testimonial3.png" alt="image" /></a>
                                <div className="text-content">
                                    <h5 className="color-black text-capitalize">Sarah Jones</h5>
                                    <p className="color-grey"> Sales Executive </p>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item">
                            <p className="color-black testimonial-para mb-15px"> Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus metus sollicitudin. Quisque vitae sodales lectus. Nam porttitor justo sed mi finibus, vel tristique risus faucibus. </p>

                            <div className="testimonial-post">
                                <a href="#" className="post"><img src="creative-studio/img/testimonial4.png" alt="image" /></a>
                                <div className="text-content">
                                    <h5 className="color-black text-capitalize">Chris Gorgano</h5>
                                    <p className="color-grey"> Photographer </p>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="testimonial-item">
                            <p className="color-black testimonial-para mb-15px"> Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus metus sollicitudin. Quisque vitae sodales lectus. Nam porttitor justo sed mi finibus, vel tristique risus faucibus. </p>

                            <div className="testimonial-post">
                                <a href="#" className="post"><img src="creative-studio/img/testimonial5.png" alt="image" /></a>
                                <div className="text-content">
                                    <h5 className="color-black text-capitalize">Kate Carter</h5>
                                    <p className="color-grey"> Model </p>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item">
                            <p className="color-black testimonial-para mb-15px"> Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus metus sollicitudin. Quisque vitae sodales lectus. Nam porttitor justo sed mi finibus, vel tristique risus faucibus. </p>

                            <div className="testimonial-post">
                                <a href="#" className="post"><img src="creative-studio/img/testimonial6.png" alt="image" /></a>
                                <div className="text-content">
                                    <h5 className="color-black text-capitalize">Alex Curtis </h5>
                                    <p className="color-grey"> Manager </p>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item">
                            <p className="color-black testimonial-para mb-15px"> Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus metus sollicitudin. Quisque vitae sodales lectus. Nam porttitor justo sed mi finibus, vel tristique risus faucibus. </p>

                            <div className="testimonial-post">
                                <a href="#" className="post"><img src="creative-studio/img/testimonial7.jpg" alt="image" /></a>
                                <div className="text-content">
                                    <h5 className="color-black text-capitalize">Ashley Wilson</h5>
                                    <p className="color-grey"> Actor </p>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-item">
                            <p className="color-black testimonial-para mb-15px"> Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus metus sollicitudin. Quisque vitae sodales lectus. Nam porttitor justo sed mi finibus, vel tristique risus faucibus. </p>

                            <div className="testimonial-post">
                                <a href="#" className="post"><img src="creative-studio/img/testimonial8.jpg" alt="image" /></a>
                                <div className="text-content">
                                    <h5 className="color-black text-capitalize">Johnny Perkins</h5>
                                    <p className="color-grey"> Athlete </p>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
{/*  Clients ends  */}

{/*  Blog start  */}
<section id="blog" className="half-section p-0 bg-change bg-yellow">
    <h2 className="d-none">heading</h2>
    <div className="container-fluid">
        <div className="row align-items-center">

            <div className="col-lg-6 col-md-12 p-0">
                <div className="hover-effect">
                    <img alt="blog" src="creative-studio/img/split-blog.jpg" className="about-img" />
                </div>
            </div>

            <div className="col-lg-6 col-md-12 p-lg-0">
                <div className="split-container-setting style-three text-center">
                    <div className="main-title mb-5 wow fadeIn" data-wow-delay="300ms">
                        <h5 className="font-18 text-blue"> Oct 12, 2019</h5>
                        <h2 className="mb-0 font-weight-normal"> Agency Blog </h2>
                    </div>
                    <p className="color-black mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodt temp to the incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis a nostr a exercitation ullamco laboris nisi ut aliquip.</p>

                    <a href="creative-studio/blog.html" className="btn-setting color-black btn-hvr-up btn-blue btn-hvr-pink">learn more</a>
                </div>
            </div>

        </div>
    </div>
</section>
{/*  Blog ends  */}

{/*  Contact & Map starts  */}
<section id="contact" className="bg-light-gray">
    <div className="container">
        <div className="row mx-lg-0">
            <div className="col-lg-6 col-md-6 col-sm-12 p-0">
                <div className="contact-box">
                    <div className="main-title text-center text-md-left mb-4">
                        <h2 className="font-weight-normal">Connect With Us </h2>
                    </div>

                    <div className="text-center text-md-left">

                        {/* Address */}
                        <p className="mb-3">123 Street New York City , United States Of America. </p>

                        {/* Phone */}
                        <p className="mb-3"> Office Telephone : 001 01085379709 <br />
                            Mobile : 001 63165370895 </p>

                        {/* Email */}
                        <p className="mb-3"> Email: <a href="mailto:email@website.com" className="color-black">admin@website.com</a> <br />
                            Inquiries: <a href="mailto:email@website.com" className="color-black">email@website.com</a> </p>

                        {/* Timing */}
                        <p className="mb-0">Mon-Sat: 9am to 6pm</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 p-0 col-map box-shadow-map">
                <div id="google-map" className="bg-light-gray map"></div>
            </div>
        </div>
    </div>
</section>
{/*  Contact & Map ends  */}

{/*  Footer starts  */}
<footer className="p-half bg-white">
    <div className="container">
        <div className="row">
            <div className="col-md-12 col-sm-12 text-center">
                <ul className="footer-icons mb-4">
                    <li><a href="#" className="wow fadeInUp facebook"><i className="fab fa-facebook-f"></i> </a> </li>
                    <li><a href="#" className="wow fadeInDown twitter"><i className="fab fa-x-twitter"></i> </a> </li>
                    <li><a href="#" className="wow fadeInUp google"><i className="fab fa-google"></i> </a> </li>
                    <li><a href="#" className="wow fadeInDown linkedin"><i className="fab fa-linkedin-in"></i> </a> </li>
                    <li><a href="#" className="wow fadeInUp instagram"><i className="fab fa-instagram"></i> </a> </li>
                    <li><a href="#" className="wow fadeInDown pinterest"><i className="fab fa-pinterest-p"></i> </a> </li>
                </ul>
                <p className="copyrights mt-2 mb-2">&copy; 2024 MegaOne. Made with love by <a href="#">themesindustry</a></p>
            </div>
        </div>
    </div>
</footer>
{/*  Footer ends  */}

{/* Animated Cursor */}
<div id="animated-cursor">
    <div id="cursor">
        <div id="cursor-loader" style={{ top: '0px', left: '0px' }}></div>
    </div>
</div>
{/* Animated Cursor End */}

{/*  JavaScript  */}


{/*  Plugin Js  */}







{/*  Owl Carousel JS File  */}

{/*  Slick JS File  */}

{/*  Tween Max Animation File  */}

{/*  Morphtext File  */}

{/*  REVOLUTION JS FILES  */}


{/*  SLIDER REVOLUTION EXTENSIONS  */}










{/*  Google Map Api  */}



{/*  custom script  */}
    </>
  );
}
