import React, { Component } from "react"

class Portfolio extends Component {
  render() {
    return (
      <div id="home">
        <div>
          <nav>
            <a className="active" href="#home">
              Home
            </a>
            <a className="active" href="#about">
              About
            </a>
            <a className="active" href="#skills">
              Skills
            </a>
            <a className="active" href="#projects">
              Projects
            </a>
          </nav>
        </div>

        <div className="homeImg">
          <div className="name">
            <div>
              <h1>Tyler May</h1>
            </div>
          </div>
        </div>

        <div id="about" className="flexHome">
          <div className="bodyWrapper">
            <div className="aboutFlex">
              {/*About*/}
              {/*About*/}
              {/*About*/}
              <div>
                <h1 className="homeTitle">About</h1>
                <div className="aboutContentWrapper">
                  <p>
                    Hi, I'm Tyler. I am a web developer. I specialize in
                    front-end engineering. I really enjoy working in HTML, CSS,
                    javascript, and ReactJS but am familiar with node.js,
                    mongoDB, SQL, pulling data from API's and building
                    databases.
                  </p>
                  <p>
                    I am currently searching for work. I am looking for an
                    organization with a culture that fits my personality. I love
                    to work in groups that have great communication.
                    Communication is of huge importance to me.
                  </p>
                </div>
              </div>
              {/*Backgroud*/}
              {/*Backgroud*/}
              {/*Backgroud*/}
              <div className="backgroundContactWrap">
                <div>
                  <div className="backgroundDiv">
                    <h3 className="aboutFont">Background</h3>
                    <p>
                      I recently completed a 12-week course aimed at full stack
                      web development at The Iron Yard. I enjoy building
                      applications and especially like styling. At The Iron Yard
                      I learned to build full web applications front to back.
                      This applicable skill gives me the ability to move into a
                      position with little learning curve.
                    </p>
                    <p> I look forward to speaking with you!</p>
                  </div>
                </div>
                {/*Contact*/}
                {/*Contact*/}
                {/*Contact*/}
                <div>
                  <h3 className="aboutFont">Contact</h3>
                  <div className="spanFlex">
                    <span>tylermay@usa.com</span>
                    <span>
                      <a
                        className="homeLink"
                        href="https://github.com/may1038"
                        target="_blank"
                      >
                        github.com/may1038
                      </a>
                    </span>
                    <span>
                      <a
                        className="homeLink"
                        href="https://www.linkedin.com/in/tyler-may-bb31606b/"
                        target="_blank"
                      >
                        linkedin.com/in/tylermay
                      </a>
                    </span>
                  </div>
                </div>
              </div>

              {/*Resume*/}
              {/*Resume*/}
              {/*Resume*/}
              <div className="resumeFlex">
                <div className="resumeMargin">
                  <h3 className="aboutFont">Resume</h3>
                  <a
                    className="homeLink"
                    href="https://www.linkedin.com/in/tyler-may-bb31606b/"
                    target="_blank"
                  >
                    View/Link
                  </a>
                </div>
              </div>
            </div>
            {/*Skills*/}
            {/*Skills*/}
            {/*Skills*/}
            <div id="skills" />
            <div className="skillsWrapper">
              <h1 className="homeTitle">Skills</h1>
              <div>
                <div className="reactJsDiv">
                  <div className="rowzContent">
                    <div className="iconFlex">
                      <img
                        className="icon"
                        src="https://www.iconfinder.com/icons/1781641/2230823/64/raster?token=1507487571-oULtoDL4qIzx7yyPU7XvcozIUBwuWC89-ypRA3NG78LO/hxJRadiFdwxRvCQ%3D"
                        alt=""
                      />
                    </div>
                    <div>
                      <span className="skillsTitle">Languages:</span>
                      <br />
                      <span className="span">Javascript</span>
                      <br />
                      <span className="span">HTML</span>
                      <br />
                      <span className="span">CSS</span>
                      <br />
                      <span className="span">SQL</span>
                    </div>
                  </div>
                  <div className="rowzContent">
                    <div className="iconFlex">
                      <img
                        className="icon"
                        src="https://www.iconfinder.com/icons/1781646/2230828/64/raster?token=1507487513-EHJhKE6r1bLbTWq7m8Z2Wa9FgjBTePMA-Xzg/hc78AZPqAbmsAE4yy0a23Iw%3D"
                        alt=""
                      />
                    </div>
                    <div>
                      <span className="skillsTitle">Front-end Framworks:</span>
                      <br />
                      <span className="span">ReactJS</span>
                    </div>
                  </div>
                  <div className="rowzContent">
                    <div className="iconFlex">
                      <img
                        className="icon"
                        src="https://www.iconfinder.com/icons/1781650/2230832/64/raster?token=1507492526-d3qSy6rqTtZocqPsi6QvzB0FuWjdGvLV-BaQcXRvRHM0NtPNd7nT7S5DPSYA%3D"
                        alt=""
                      />
                    </div>
                    <div>
                      <span>No SQL</span>
                      <br />
                      <span className="span">MongoDB</span>
                    </div>
                  </div>
                </div>
                <div className="htmlCssDiv">
                  <div className="rowzContent">
                    <div className="iconFlex">
                      <img
                        className="icon"
                        src="https://www.iconfinder.com/icons/1781651/2230833/64/raster?token=1507487606-8i7TLwEbU9RgA57AmWc3exloUG7MFEuy-FUZ5SXMq5rTZE95SUTXPuu78mi0%3D"
                        alt=""
                      />
                    </div>
                    <div>
                      <span>Responsive & Mobile Design</span>
                    </div>
                  </div>
                  <div className="rowzContent">
                    <div className="iconFlex">
                      <img
                        className="icon"
                        src="https://www.iconfinder.com/icons/1781648/2230830/64/raster?token=1507487683-OmfjHquWwKF7uB40w4suY45QOmLhDKG7-H7C7mp2ZHaVzqbcLWvuUF%2B1TCFU%3D"
                        alt=""
                      />
                    </div>
                    <div>
                      <span className="skillsTitle">Version Control:</span>
                      <br />
                      <span className="span">Git</span>
                    </div>
                  </div>
                  <div className="rowzContent">
                    <div className="iconFlex">
                      <img
                        className="icon"
                        src="https://www.iconfinder.com/icons/1781652/2230834/64/raster?token=1507492421-j93KfixY3O7XpmCFrBuFBPY3CaV1LevX-gNoqhzatJrus%2BXqZxAfAjuT7PNw%3D"
                        alt=""
                      />
                    </div>
                    <div>
                      <span className="skillsTitle">Server-side:</span>
                      <br />
                      <span className="span">Sequelize</span>
                      <br />
                      <span className="span">PostgresSQL</span>
                      <br />
                      <span className="span">API</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Projects*/}
        {/*Projects*/}
        {/*Projects*/}
        <div id="projects" className="projectFlex">
          <div className="projectBodyWrapper">
            <div>
              <h1 className="homeTitle">Projects</h1>
            </div>
            <div className="codeWrapper">
              <a href="https://may-blog.herokuapp.com/" target="_blank">
                <img
                  className="imgBlog"
                  src="https://i.imgur.com/7uEz0JS.jpg"
                  title="source: imgur.com"
                />
              </a>
              <div className="projectDesc">
                <h3 className="projectName">Polly Blog</h3>
                <p className="codeParagrah">
                  Blog application that uses React and React Router, and
                  generates dynamic endpoints.
                </p>
                <span className="languagesUsed">Languages Used:</span>
                <ul className="ulCode">
                  <li>ReactJS</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                </ul>
              </div>
            </div>
            <div className="codeWrapper">
              <a href="https://may-threads-kids.herokuapp.com/" target="_blank">
                <img
                  className="imgThreads"
                  src="https://i.imgur.com/6mjaiGf.png"
                  title="source: imgur.com"
                />
              </a>
              <div className="projectDesc">
                <h3 className="projectName">Threads</h3>
                <p className="codeParagrah">
                  This was a super fun little E-commerce Mock Site.
                </p>
                <span className="languagesUsed">Tools Used:</span>
                <ul className="ulCode">
                  <li>ReactJS</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                </ul>
              </div>
            </div>
            <div className="codeWrapper">
              <a href="https://may-earthquake.herokuapp.com/" target="_blank">
                <img
                  className="imgBlog"
                  src="https://i.imgur.com/llw4WmB.png"
                  title="source: imgur.com"
                />
              </a>
              <div className="projectDesc">
                <h3 className="projectName">Earthquake</h3>
                <p className="codeParagrah">
                  ReactJS application that constantly checks for earthquakes in
                  the United States, and displays the results.
                </p>
                <span className="languagesUsed">Tools Used:</span>
                <ul className="ulCode">
                  <li>ReactJS</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>Javascript</li>
                  <li>NASA API</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio
