import CountUp from "./CountUp";
import { nb } from "@/lib/th";

/** Stat colour block: the four fixed counters + one CTA. */
export default function Portfolio() {
  return (
    <section id="how-it-works" className="stat-section">
      <div className="container">
        <div className="row stat-row">
          <div className="col-6 col-md-3">
            <div className="parallax-box">
              <h2 className="count-num"><CountUp value={80} /></h2>
              <h5>% Error Reduction</h5>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="parallax-box">
              <h2 className="count-num text-orange"><CountUp value={30} /></h2>
              <h5>% Faster Packing</h5>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="parallax-box">
              <h2 className="count-num text-red"><CountUp value={80} /></h2>
              <h5>% Labor Efficiency</h5>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="parallax-box">
              <h2 className="count-num"><CountUp value={20000} /></h2>
              <h5>Orders / Day</h5>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center stat-cta wow fadeInUp" data-wow-duration="1s">
            <p>{nb("Built by operators — สร้างโดยทีมที่บริหารคลังจริงมากว่า 10 ปี ไม่ใช่จากห้องประชุม")}</p>
            <a href="#contact-sec" className="btn btn-medium btn-rounded btn-white scroll">Book a Demo</a>
          </div>
        </div>
      </div>
    </section>
  );
}
