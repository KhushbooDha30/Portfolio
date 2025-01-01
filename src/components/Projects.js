import React, { useEffect } from 'react';

function Projects() {
  useEffect(() => {
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    const handleItemClick = () => {
      console.log('Portfolio item clicked!');
    };

    portfolioItems.forEach((item) => {
      item.addEventListener('click', handleItemClick);
    });

    // Clean up event listeners
    return () => {
      portfolioItems.forEach((item) => {
        item.removeEventListener('click', handleItemClick);
      });
    };
  }, []);

  return (
    <>
      <main className="main">
        <section id="projects" className="portfolio projects section light-background">
          <div className="container section-title" data-aos="fade-up">
            <h2><i class="bi bi-cast"></i>&nbsp;&nbsp;&nbsp;&nbsp;Projects</h2>
            <p>
              Here are some of the projects I have worked on during my studies and internships. These projects reflect my skills in software development, design, and problem-solving.
            </p>
          </div>

          <div className="container cont">
            <div className="row justify-content-center d-flex flex-wrap">
              {/* Spotify Clone Card */}
              <div className="col-12 col-lg-4 col-md-6 col-sm-12 mb-3">
                <div className="card card-projects">
                  <div className="image">
                    <img alt="profile" src="assets/img/music.jpg" />
                    <h3 className="projects-title pro">Spotify Clone</h3>
                  </div>
                  <div className="content">
                    <h3 >Spotify Clone</h3>
                    <p>
                      Spotify Clone is a static music platform replica built with HTML and CSS, featuring a layout for browsing and playing songs.
                    </p>
                    <a
                      href="https://github.com/KhushbooDha30/Static-Spotify-clone"
                      className="btn pro-btn hero-btn shadow-none hover-shadow-lg"
                    >
                      Github Repository
                    </a>
                  </div>
                </div>
              </div>

              {/* Zerodha Clone Card */}
              <div className="col-12 col-lg-4 col-md-6 col-sm-12 mb-3">
                <div className="card card-projects">
                  <div className="image">
                    <img alt="education" src="assets/img/zerodha.jpeg" />
                    <h3 className="projects-title pro">Zerodha Clone</h3>
                  </div>
                  <div className="content">
                    <h3 >Zerodha Clone</h3>
                    <p>
                      Zerodha Clone is a stock trading platform that replicates key features of Zerodha, including real-time market data, trading, and portfolio management.
                    </p>
                    <a
                      href="https://github.com/KhushbooDha30/Zerodha-Clone"
                      className="btn pro-btn hero-btn shadow-none hover-shadow-lg"
                    >
                      Github Repository
                    </a>
                  </div>
                </div>
              </div>

              {/* Wanderlust Card */}
              <div className="col-12 col-lg-4 col-md-6 col-sm-12">
                <div className="card card-projects">
                  <div className="image">
                    <img alt="experience" src="assets/img/wanderlust.jpg" />
                    <h3 className="projects-title pro">Wanderlust</h3>
                  </div>
                  <div className="content">
                    <h3>Wanderlust</h3>
                    <p>
                      Wanderlust is a responsive hotel rental system focusing on hotel search, user authentication, and efficient property management.
                    </p>
                    <a
                      href="https://github.com/KhushbooDha30/Wanderlust"
                      className="btn pro-btn hero-btn shadow-none hover-shadow-lg"
                    >
                      Github Repository
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <hr
              style={{
                margin: '40px 0', // Adding margin for space around the line
                border: '1px solidrgb(188, 196, 195)', // Styling the hr element with color and border width
              }}
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default Projects;

