import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Ensure AOS styles are imported

function Footer() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Toggle scroll-top visibility on scroll
    const scrollTopBtn = document.getElementById("scroll-top");
    const handleScroll = () => {
      if (window.scrollY > 200) {
        scrollTopBtn.style.display = "flex"; // Show button after scrolling
      } else {
        scrollTopBtn.style.display = "none"; // Hide it if at the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <footer id="footer" className="footer position-relative light-background">
        <div className="container">
          <div className="copyright text-center" data-aos="fade-up">
            <p>
              © <span>Copyright</span>
              <strong className="px-1 sitename">2024 Khushboo Dhakciya</strong>
              <span>All Rights Reserved</span>
            </p>
          </div>
          <div className="social-links text-center mt-2">
          <a href="mailto:khushboodhakciya@gmail.com" className="mail"><i className="bi bi-envelope"></i></a>
          <a href="https://github.com/KhushbooDha30" className="github"><i className="bi bi-github"></i></a>
          <a href="https://www.linkedin.com/in/khushboo-dhakciya-a37039291" className="linkedin"><i className="bi bi-linkedin"></i></a>
        </div>
        </div>
      </footer>

      <a
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>

      <div id="preloader"></div>
    </>
  );
}

export default Footer;


