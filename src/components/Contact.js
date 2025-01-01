import React, { useEffect } from 'react';

function Contact() {
  useEffect(() => {
    const contactForm = document.querySelector('.php-email-form');

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form submitted!');
    };

    if (contactForm) {
      contactForm.addEventListener('submit', handleSubmit);
    }

    // Clean up event listener
    return () => {
      if (contactForm) {
        contactForm.removeEventListener('submit', handleSubmit);
      }
    };
  }, []);

  return (
    <>
    <main className='main'>
      <section id="contact" className="contact section">
        <div className="container section-title" data-aos="fade-up">
          <h2><i class="bi bi-telephone-outbound-fill"></i>&nbsp;&nbsp;&nbsp;&nbsp;Contact Me</h2>
          <p>
              Feel free to reach out to me for any inquiries, collaborations, or just to say hello!
            </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-5">
              <div className="info-wrap">
                <div
                  className="info-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <i className="bi bi-geo-alt flex-shrink-0"></i>
                  <div>
                    <h3>Address</h3>
                    <p>Mhow, Madhya Pradesh, India</p>
                  </div>
                </div>

                <div
                  className="info-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <i className="bi bi-telephone flex-shrink-0"></i>
                  <div>
                    <h3>Call Me</h3>
                    <p>+1 5589 55488 55</p>
                  </div>
                </div>

                <div
                  className="info-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <i className="bi bi-envelope flex-shrink-0"></i>
                  <div>
                    <h3>Email </h3>
                    <p>khushboodhakciya@example.com</p>
                  </div>
                </div>

                <iframe
                title='map'
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229085.0240974942!2d75.68484556922755!3d22.59576879391608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcba9cfb96cf%3A0x4884d51615b6d3a!2sMhow%2C%20Madhya%20Pradesh%20453541!5e0!3m2!1sen!2sin!4v1701346972069!5m2!1sen!2sin"
  frameBorder="0"
  style={{border:"0", width:"100%", height:"270px"}}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade">
</iframe>

              </div>
            </div>

            <div className="col-lg-7">
              <form
                action="forms/contact.php"
                method="post"
                className="php-email-form"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="row gy-4">
                  <div className="col-md-6">
                    <label htmlFor="name-field" className="pb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name-field"
                      className="form-control"
                      required=""
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="email-field" className="pb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email-field"
                      required=""
                    />
                  </div>

                  <div className="col-md-12">
                    <label htmlFor="subject-field" className="pb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject-field"
                      required=""
                    />
                  </div>

                  <div className="col-md-12">
                    <label htmlFor="message-field" className="pb-2">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      name="message"
                      rows="10"
                      id="message-field"
                      required=""
                    ></textarea>
                  </div>

                  <div className="col-md-12 text-center">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>

                    <button type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}

export default Contact;
