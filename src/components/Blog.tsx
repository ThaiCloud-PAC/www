import Link from "next/link";
import Image from "next/image";

export default function Blog() {
  return (
    <section className="sponsor-sec">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sponsor-tags owl-carousel owl-theme">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="item">
                  <Image src={`/minimal-creative/images/client-${item}.png`} alt={`Client ${item}`} width={150} height={50} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="row align-items-center blog-area" id="blog">
          <div className="col-12 col-md-6 wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".1s">
            <h4 className="heading">
              Featured <span className="d-block text-orange">Case Study</span>
            </h4>
            <p className="text">
              YUEDPAO (ยืดเปล่า) – การบริหารจัดการออเดอร์มหาศาลในช่วง Peak Season อย่างมีประสิทธิภาพ ด้วยเทคโนโลยี Fulfillment ของเรา
            </p>
            <Link href="#" className="btn btn-medium btn-rounded btn-red mb-5 mb-md-0">
              Read Case Study
            </Link>
          </div>
          <div className="col-12 col-md-6 d-flex align-items-center">
            <div className="row no-gutters">
              <div
                className="col-12 col-lg-6 mini-slider p-0 d-inline-block d-lg-flex justify-content-center align-items-center wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".1s"
              >
                <div>
                  <Image src="/minimal-creative/images/blog-img-1.jpg" alt="Blog-Image" className="w-100" width={600} height={400} />
                </div>
              </div>
              {/* Blog Box */}
              <div
                className="col-12 col-lg-6 p-0 wow fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay=".1s"
              >
                <Link href="#" className="text-decoration-none">
                  <div className="blog-box bg-orange">
                    <h1 className="box-text">Discover How YUEDPAO Scaled with Us</h1>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
