import React, { useEffect, useState } from "react";

function Stats() {
  const [counts, setCounts] = useState({
    happyClients: 0,
    projects: 0,
    hoursOfSupport: 0,
    hardWorkers: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter("happyClients", 10);
            animateCounter("projects", 5);
            animateCounter("hoursOfSupport", 200);
            animateCounter("hardWorkers", 2);
          }
        });
      },
      { threshold: 0.5 }
    );

    const statElements = document.querySelectorAll(".stats-item");
    statElements.forEach((stat) => observer.observe(stat));

    return () => observer.disconnect();
  }, []);

  const animateCounter = (key, targetValue) => {
    let startValue = 0;
    const duration = 1000; // 1 second duration
    const increment = targetValue / (duration / 10);

    const counter = setInterval(() => {
      startValue += increment;
      if (startValue >= targetValue) {
        startValue = targetValue;
        clearInterval(counter);
      }
      setCounts((prevCounts) => ({
        ...prevCounts,
        [key]: Math.floor(startValue),
      }));
    }, 10);
  };

  return (
    <main className="main">
    <section id="stats" className="stats section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-3 col-md-6">
            <div className="stats-item" data-aos="fade-up" data-aos-delay="200">
              <i className="bi bi-emoji-smile"></i>
              <span className="purecounter">{counts.happyClients}</span>
              <p>
                <strong>Collaborations</strong>&nbsp;&nbsp;&nbsp;
                <span>Successful partnerships and collaborations</span>
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item" data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-journal-richtext"></i>
              <span className="purecounter">{counts.projects}</span>
              <p>
                <strong>Projects</strong> &nbsp;&nbsp;&nbsp;
                <span>5+ personal and academic projects</span>
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item" data-aos="fade-up" data-aos-delay="400">
              <i className="bi bi-headset"></i>
              <span className="purecounter">{counts.hoursOfSupport}</span>
              <p>
                <strong>Development Hours</strong>&nbsp;&nbsp;&nbsp;
                <span>Hours spent coding and developing</span>
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item" data-aos="fade-up" data-aos-delay="500">
              <i className="bi bi-people"></i>
              <span className="purecounter">{counts.hardWorkers}</span>
              <p>
                <strong>Team Projects</strong>&nbsp;&nbsp;&nbsp;
                <span>Worked with teams on multiple projects</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </main>
  );
}

export default Stats;
