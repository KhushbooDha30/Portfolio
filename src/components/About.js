import React, { useEffect } from "react";

function About() {
  useEffect(() => {
    const sections = document.querySelectorAll("[data-scroll]");

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.8;
      sections.forEach((section) => {
        if (scrollPosition > section.offsetTop) {
          section.classList.add("animate");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on mount to handle sections already in view

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="main">
      <section id="about" className="about section" data-scroll>
        {/* Section Title */}
        <div className="container section-title">
          <h2><i class="bi bi-person-lines-fill"></i>&nbsp;&nbsp;&nbsp;&nbsp;About Me </h2>
          <p>
          Hello! I'm Khushboo Dhakciya, a passionate software engineer with a
        deep interest in technology and problem-solving. With a background in
        Computer Applications, I have honed my skills in web development, 
        data structures, and software design. I am continuously looking to grow
        and apply my skills to create meaningful solutions and innovative products.
          </p>
        </div>

        {/* About Content */}
        <div className="container" data-scroll>
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4">
              <img
                src="my.jpg"
                className="img-fluid"
                alt="Profile"
              />
            </div>
            <div className="col-lg-8 content">
              <h2>Software Engineer &amp; Problem Solver</h2>
              <p className="fst-italic py-3">
              With expertise in full-stack development, I focus on building scalable
            and efficient web applications. My journey in technology has given me the
            opportunity to work with various technologies, including Java, JavaScript,
            Node.js, and the MERN stack.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Birthday:</strong> <span>2 December 2002</span>
                    </li>
        
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Phone:</strong> <span>+91 9876543219</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>City:</strong> <span>Mhow, India</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                  
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Degree:</strong> <span>MCA (Master of Computer Applications)</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong>Email:</strong> <span>khushboodhakciya@gmail.com</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>{" "}
                      <strong><span>Open to Work</span></strong> 
                    </li>
                  </ul>
                </div>
              </div>
              <p className="py-3">
              Throughout my academic and personal projects, I have developed a keen
            understanding of software development principles, teamwork, and leadership.
            My goal is to contribute to innovative projects and continue learning from
            diverse experiences. I'm always eager to take on new challenges and work on
            exciting projects that push the boundaries of technology.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
