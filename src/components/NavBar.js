import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

function NavBar() {
  useEffect(() => {
    // Header toggle
    const headerToggleBtn = document.querySelector('.header-toggle');
    const header = document.querySelector('#header');
    const navmenuLinks = document.querySelectorAll('#navmenu a');

    function headerToggle() {
      header.classList.toggle('header-show');
      headerToggleBtn.classList.toggle('bi-list');
      headerToggleBtn.classList.toggle('bi-x');
    }

    // Add event listener to the toggle button
    if (headerToggleBtn) {
      headerToggleBtn.addEventListener('click', headerToggle);
    }

    // Close the menu on nav item click (only for small screens)
    navmenuLinks.forEach(navmenu => {
      navmenu.addEventListener('click', () => {
        if (header.classList.contains('header-show')) {
          headerToggle();
        }
      });
    });

    // Navmenu Scrollspy
    function navmenuScrollspy() {
      navmenuLinks.forEach(navmenulink => {
        if (!navmenulink.hash) return;
        let section = document.querySelector(navmenulink.hash);
        if (!section) return;
        let position = window.scrollY + 200;
        if (
          position >= section.offsetTop &&
          position <= section.offsetTop + section.offsetHeight
        ) {
          document
            .querySelectorAll('.navmenu a.active')
            .forEach(link => link.classList.remove('active'));
          navmenulink.classList.add('active');
        } else {
          navmenulink.classList.remove('active');
        }
      });
    }

    window.addEventListener('load', navmenuScrollspy);
    document.addEventListener('scroll', navmenuScrollspy);

    // Initialize AOS (Animate on Scroll)
    function aosInit() {
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
      });
    }
    window.addEventListener('load', aosInit);

    // Cleanup
    return () => {
      if (headerToggleBtn) {
        headerToggleBtn.removeEventListener('click', headerToggle);
      }
    };
  }, []);

  return (
    <>
      <header id="header" className="header dark-background d-flex flex-column">
        <i className="header-toggle d-xl-none bi bi-list"></i>

        <div className="profile-img">
          <img
            src="./my-profile-img.jpg"
            alt="profile"
            className="img-fluid rounded-circle"
          />
        </div>

        <a
          href="index.html"
          className="logo d-flex align-items-center justify-content-center"
        >
          <h1 className="sitename">Khushboo Dhakciya</h1>
        </a>

        <div className="social-links text-center">
          <a href="mailto:khushboodhakciya@gmail.com" className="mail">
            <i className="bi bi-envelope"></i>
          </a>
          <a href="https://github.com/KhushbooDha30" className="github">
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/khushboo-dhakciya-a37039291"
            className="linkedin"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </div>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a href="#hero" className="active">
                <i className="bi bi-house navicon"></i> Home
              </a>
            </li>
            <li>
              <a href="#about">
                <i className="bi bi-person navicon"></i> About
              </a>
            </li>
            <li>
              <a href="#resume">
                <i className="bi bi-file-earmark-text navicon"></i> Resume
              </a>
            </li>
            <li>
              <a href="#projects">
                <i className="bi bi-images navicon"></i> Projects
              </a>
            </li>
            <li>
              <a href="#contact">
                <i className="bi bi-envelope navicon"></i> Contact
              </a>
            </li>
            <li>
              <a
                href="/assets/docs/Resume_Khushboo_Dhakciya.pdf"
                className="resume-link"
                download
              >
                <i className="bi bi-download navicon"></i> Download Resume
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
