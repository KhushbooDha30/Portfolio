import React, { useEffect } from 'react';

function Skills() {
  useEffect(() => {
    // Intersection Observer for animating progress bars
    const progressBars = document.querySelectorAll('.progress-bar');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.width = entry.target.getAttribute('aria-valuenow') + '%';
          }
        });
      },
      { threshold: 0.5 }
    );

    progressBars.forEach((bar) => observer.observe(bar));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
    <main className='main'>
      <section id="skills" className="skills section light-background">
        <div className="container section-title" data-aos="fade-up">
          <h2><i class="bi bi-person-check"></i>&nbsp;&nbsp;&nbsp;&nbsp;Skills</h2>
          <p>Skills I’ve honed through learning and experience.</p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row skills-content skills-animation">
              <div className="col-lg-6">
                {/* HTML Skill */}
                <div className="progress" data-aos="fade-right" data-aos-delay="200">
                  <span className="skill">
                    <span>HTML</span> <i className="val">100%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ transition: 'width 1s ease-out' }}
                    ></div>
                  </div>
                </div>

                {/* CSS Skill */}
                <div className="progress" data-aos="fade-right" data-aos-delay="300">
                  <span className="skill">
                    <span>CSS</span> <i className="val">90%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ transition: 'width 1s ease-out' }}
                    ></div>
                  </div>
                </div>

                {/* JavaScript Skill */}
                <div className="progress" data-aos="fade-right" data-aos-delay="400">
                  <span className="skill">
                    <span>JavaScript</span> <i className="val">80%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ transition: 'width 1s ease-out' }}
                    ></div>
                  </div>
                </div>

                {/* Data Structures */}
                <div className="progress" data-aos="fade-right" data-aos-delay="500">
                  <span className="skill">
                    <span>Data Structures</span> <i className="val">85%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ transition: 'width 1s ease-out' }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                {/* Java Skill */}
                <div className="progress" data-aos="fade-left" data-aos-delay="200">
                  <span className="skill">
                    <span>Java</span> <i className="val">90%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ transition: 'width 1s ease-out' }}
                    ></div>
                  </div>
                </div>

                {/* SQL Skill */}
                <div className="progress" data-aos="fade-left" data-aos-delay="300">
                  <span className="skill">
                    <span>SQL</span> <i className="val">80%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ transition: 'width 1s ease-out' }}
                    ></div>
                  </div>
                </div>

                {/* MERN Stack Skill */}
                <div className="progress" data-aos="fade-left" data-aos-delay="400">
                  <span className="skill">
                    <span>MERN Stack</span> <i className="val">75%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ transition: 'width 1s ease-out' }}
                    ></div>
                  </div>
                </div>

                {/* Web Development */}
                <div className="progress" data-aos="fade-left" data-aos-delay="500">
                  <span className="skill">
                    <span>Web Development</span> <i className="val">85%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ transition: 'width 1s ease-out' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>
      </main>
    </>
  );
}

export default Skills;
