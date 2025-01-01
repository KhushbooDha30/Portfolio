import React, { useEffect } from 'react';

function Resume() {
  useEffect(() => {
    // Intersection Observer for animating the resume section
    const resumeItems = document.querySelectorAll('.resume-item');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      },
      { threshold: 0.5 }
    );

    resumeItems.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
    <main className='main'>
      <section id="resume" className="resume section">
        <div className="container section-title" data-aos="fade-up">
          <h2><i class="bi bi-file-earmark-person-fill"></i>&nbsp;&nbsp;&nbsp;&nbsp;Resume</h2>
          <p>
          I am a passionate software engineer with a strong foundation in full-stack development. 
          I thrive on solving complex problems and am always eager to learn new technologies.
          </p>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h3 className="resume-title">Summary</h3>

              <div className="resume-item pb-0" data-aos="fade-up" data-aos-delay="200">
                <h4>Khushboo Dhakciya</h4>
                <p>
                  <em>
                  Enthusiastic and detail-oriented Software Engineer with experience in full-stack development. 
                  Highly skilled in Java, C, web development, and the MERN stack. Adept at working in both team-based and independent environments.
                  </em>
                </p>
                <ul>
                  <li>Mhow, India</li>
                  <li>(123) 456-7891</li>
                  <li>khushboodhakciya@example.com</li>
                </ul>
              </div>

              <h3 className="resume-title"><i class="bi bi-vector-pen"></i>&nbsp;&nbsp;&nbsp;&nbsp;Education</h3>
              <div className="resume-item" data-aos="fade-up" data-aos-delay="300">
                <h4>Master’s in Computer Applications</h4>
                <h5>2023 - Present</h5>
                <p>
                  <em>Shri Govindram Seksaria Institute of Technology and Science, Rajiv Gandhi Proudyogiki Vishwavidyalaya</em>
                </p>
                <p>
                Specializing in software development, machine learning, and data structures. Currently focusing on real-world problem-solving in full-stack development.
                </p>
             
              </div>

              <div className="resume-item" data-aos="fade-up" data-aos-delay="400">
                <h4>Bachelor’s in Computer Applications</h4>
                <h5>2020 - 2023</h5>
                <p>
                <em>Bherulal Patidar Government Post Graduation College, Devi Ahilya Vishwavidyalaya</em>
                </p>
                <p>
                Gained solid foundation in programming, databases, and web development. Completed multiple projects, including a Prison Management System and a Blood Bank Management System.
                </p>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="500">
              <h3 className="resume-title"><i class="bi bi-pc-display"></i>&nbsp;&nbsp;&nbsp;&nbsp;Professional Experience</h3>
              <div className="resume-item" data-aos="fade-up" data-aos-delay="600">
                <h4>Java Developer Intern</h4>
                <h5>June 2024 - August 2024</h5>
                <p>
                  <em>Codec Technologies </em>
                </p>
                <ul>
                <li>Worked on developing Java-based applications and improving existing features.</li>
    <li>Collaborated with senior developers to design and implement software solutions.</li>
    <li>Participated in debugging and optimizing code for better performance.</li>
    <li>Gained experience in writing clean, maintainable, and efficient Java code.</li>
                </ul>
              </div>

              <div className="resume-item" data-aos="fade-up" data-aos-delay="700">
                <h4>Fresher - Software Development</h4>
                <h5>Present</h5>
                <p>
                  <em>Currently Seeking Full-Time Opportunities</em>
                </p>
                <ul>
                <li>Enthusiastic to apply my skills in Java, C, MERN stack, and web development in a professional setting.</li>
    <li>Ready to contribute effectively to team projects and continue developing technical expertise.</li>
    <li>Aiming to leverage my internship experience to become an integral part of the development team in a leading organization.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}

export default Resume;


