import React, { useEffect } from "react";

function Hero() {
  useEffect(() => {
    // Initialize AOS (Animate On Scroll)
    if (typeof window !== "undefined" && window.AOS) {
      window.AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
      });
    }

    // Initialize Typed.js for typewriter effect
    const selectTyped = document.querySelector(".typed");
    if (selectTyped) {
      let typed_strings = selectTyped.getAttribute("data-typed-items");
      typed_strings = typed_strings.split(",");
      new window.Typed(".typed", {
        strings: typed_strings,
        loop: true,
        typeSpeed: 80,
        backSpeed: 50,
        backDelay: 2000,
      });
    }

    // Preloader Removal (if applicable)
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.remove();
      });
    }
  }, []);

  return (
    <main className="main">
      <section id="hero" className="hero section dark-background">
        <img
          src="assets/img/hero-bg.jpg"
          alt="hero"
          data-aos="fade-in" // Animation for the background image
          className="hero-bg-img"
        />

        <div className="container" data-aos="fade-up" data-aos-delay="100"> {/* Animation for container */}
          <h2>Khushboo Dhakciya</h2>
          <p>
            I'm{" "}
            <span
              className="typed"
              data-typed-items="Full Stack Developer ,Frontend Developer "
            >
           
            </span>
            <span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span>
          </p>
        </div>
      </section>
    </main>
  );
}

export default Hero;
