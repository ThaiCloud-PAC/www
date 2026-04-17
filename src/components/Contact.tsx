export default function Contact() {
  return (
    <section className="contact-sec bg-gray" id="contact-sec">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-7">
            <h4 className="heading text-center text-lg-left">Ready to make your warehouse intelligent?</h4>
            <form className="row contact-form wow fadeInLeft" id="contact-form-data">
              <div className="col-sm-12" id="result"></div>
              <div className="col-12 col-md-5">
                <input type="text" name="userName" placeholder="Your Name" className="form-control" />
                <input type="email" name="userEmail" placeholder="Email Address *" className="form-control" />
                <input type="text" name="userSubject" placeholder="Subject" className="form-control" />
              </div>
              <div className="col-12 col-md-7">
                <textarea className="form-control" name="userMessage" rows={6} placeholder="Your Message"></textarea>
              </div>
              <div className="col-12">
                <a href="#" className="btn btn-red rounded-pill w-100 contact_btn">
                  <i className="fa fa-spinner fa-spin mr-2 d-none" aria-hidden="true"></i>{" "}
                  <b>Send Message</b>
                </a>
              </div>
            </form>
          </div>
          <div className="col-12 col-lg-5 text-center text-lg-left position-relative">
            <div className="contact-details wow fadeInRight">
              <h4 className="heading">Our Location</h4>
              <p className="text">
                ติดต่อสอบถามโซลูชัน Fulfillment และ AI อัจฉริยะสำหรับคลังสินค้าของคุณได้เลย
              </p>
              <ul>
                <li>
                  <i aria-hidden="true" className="fas fa-map-marker-alt"></i> 123 Park Avenue, New York, United States{" "}
                </li>
                <li>
                  <i aria-hidden="true" className="fas fa-phone-volume"></i>
                  <span>+1 631 1234 5678</span>
                  <span>+1 631 1234 5678</span>
                </li>
                <li>
                  <i aria-hidden="true" className="fas fa-paper-plane"></i>hello@thaicloud.com | thaicloud.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
