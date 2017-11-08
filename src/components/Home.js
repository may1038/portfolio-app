import React, { Component } from "react"

class Portfolio extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="nameTitle">
          <div className="name">
            <h1 className="header">Tyler May</h1>
          </div>
          <div>
            <h1 className="jobDesc">UI Designer/Developer</h1>
          </div>
        </div>
        <div className="vertical">
          <div className="header-bg">
            <div className="header-border">
              <div className="imgContactResume">
                <a>
                  <img
                    className="profilePic"
                    src="https://i.imgur.com/to6ylhU.jpg"
                    title="source: imgur.com"
                  />
                </a>

                {/*Contact*/}
                {/*Contact*/}
                {/*Contact*/}
                <div className="titleWrapper">
                  <div className="contactResumeWrapper">
                    <div>
                      <h1 className="aboutFont">Contact</h1>
                      <div className="contact">
                        <div className="spanFlex">
                          <div>
                            <span>tylermay@usa.com</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*Resume*/}
                    {/*Resume*/}
                    {/*Resume*/}
                    <div className="resumeFlex">
                      <div className="resumeMargin">
                        <h1 className="aboutFont">Resume</h1>
                        <a
                          className="homeLink"
                          href="/resume.html"
                          target="_blank"
                        >
                          View/Link
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="icons">
                    <div className="githubDiv">
                      <a
                        className="github"
                        href="https://github.com/may1038"
                        target="_blank"
                      >
                        <i class="fa fa-github fa-2x" aria-hidden="true" />
                      </a>
                    </div>
                    <div className="twitterDiv">
                      <a
                        className="twitter"
                        href="https://twitter.com/tylermay87"
                        target="_blank"
                      >
                        <i class="fa fa-twitter fa-2x" aria-hidden="true" />
                      </a>
                    </div>
                    <div className="instaDiv">
                      <a
                        className="instagram"
                        href="https://www.instagram.com/tylermaytogo/?hl=en"
                        target="_blank"
                      >
                        <i class="fa fa-instagram fa-2x" aria-hidden="true" />
                      </a>
                    </div>
                    <div className="linkedInDiv">
                      <span>
                        <a
                          className="linkedIn"
                          href="https://www.linkedin.com/in/tyler-may-bb31606b/"
                          target="_blank"
                        >
                          <i class="fa fa-linkedin fa-2x" aria-hidden="true" />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*About*/}
          {/*About*/}
          {/*About*/}
          <div className="bodyWrapper">
            <div className="aboutDiv">
              <h1 className="aboutTransform">About</h1>
              <div className="aboutContentWrapper">
                <p>
                  Hi, I'm Tyler. I am a UI Designer/Developer. I develop web
                  applications using HTML, CSS, javascript, ReactJS but am
                  familiar with node.js, mongoDB, SQL, pulling data from APIs
                  and building databases. outdoors/traveler/aspiring
                  photographer/city...
                </p>
                <p>
                  As a UI designer I am comfortable using Adobe XD and sketch.
                </p>
                <p>
                  I am currently searching for work. I am looking for an
                  organization with a culture that fits my personality. I love
                  to work in groups that have great communication. Communication
                  is of huge importance to me.
                </p>
              </div>
            </div>
            {/*Backgroud*/}
            {/*Backgroud*/}
            {/*Backgroud*/}

            <div className="backgroundDiv">
              <h1 className="backTransform">Background</h1>
              <div className="paragraphSpacing">
                <div className="firstParagraph">
                  <p>
                    I recently completed a 12-week course aimed at full stack
                    web development at The Iron Yard. I enjoy building
                    applications and especially like design. At The Iron Yard I
                    learned to build full web applications front to back. This
                    applicable skill gives me the ability to move into a
                    position with little learning curve.
                  </p>
                </div>
                <p>I look forward to speaking with you!</p>
              </div>
            </div>
          </div>
        </div>

        {/*Skills*/}
        {/*Skills*/}
        {/*Skills*/}
        <div>
          <div className="reactJsDiv">
            <div className="skills">
              <div className="titleSkillsWrapper">
                <h1 className="homeTitle">Skills</h1>
                <div className="bigSkillsWrapper">
                  <div className="skillsWrapper">
                    <div className="smallSkillsWrapper">
                      <div>
                        <span className="skillsTitle">Languages:</span>
                      </div>
                      <br />
                      <span className="span">Javascript</span>

                      <span className="span">HTML</span>

                      <span className="span">CSS</span>

                      <span className="span">SQL</span>
                    </div>
                    <div className="smallSkillsWrapper">
                      <div>
                        <span className="skillsTitle">Framworks:</span>
                      </div>
                      <br />
                      <span className="span">ReactJS</span>
                    </div>
                    <div className="smallSkillsWrapper">
                      <div>
                        <span className="skillsTitle">NoSQL:</span>
                      </div>
                      <br />
                      <span className="span">MongoDB</span>
                    </div>
                  </div>

                  <div className="skillsWrapper">
                    <div className="smallSkillsWrapper">
                      <div>
                        <span className="skillsTitle">Design:</span>
                      </div>
                      <br />
                      <span>Adobe XD</span>

                      <span>Sketch</span>

                      <span>Responsive Design</span>
                    </div>
                    <div className="smallSkillsWrapper">
                      <div>
                        <span className="skillsTitle">Version Control:</span>
                      </div>
                      <br />
                      <span className="span">Git</span>
                    </div>
                    <div className="smallSkillsWrapper">
                      <div>
                        <span className="skillsTitle">Server-side:</span>
                      </div>
                      <br />
                      <span className="span">Sequelize</span>

                      <span className="span">PostgresSQL</span>

                      <span className="span">API</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*Projects*/}
            {/*Projects*/}
            {/*Projects*/}

            <div className="projectBodyWrapper">
              <h1 className="projectTitle">Projects</h1>
              <div />
              <div className="codeWrapper1">
                <a
                  href="https://xd.adobe.com/view/52630bac-5cd1-4abc-aca2-a49495c47277/"
                  target="_blank"
                >
                  <img
                    className="projectImg"
                    src="https://i.imgur.com/02bHOlq.png"
                    title="source: imgur.com"
                  />
                </a>
                <div className="projectDesc">
                  <h3 className="projectName">Volunteer Prototype</h3>
                  <p className="codeParagraph">
                    Prototype of an application that allows volunteers to
                    register for events around Houston.
                  </p>
                  <span className="languagesUsed">Tools Used: Adobe XD</span>
                </div>
              </div>
              <div className="codeWrapper">
                <a href="https://may-blog.herokuapp.com/" target="_blank">
                  <img
                    className="projectImg"
                    src="https://i.imgur.com/ixDg9ev.png"
                    title="source: imgur.com"
                  />
                </a>
                <div className="projectDesc">
                  <h3 className="projectName">Polly Blog</h3>
                  <p className="codeParagraph">
                    Blog application that uses React and React Router, and
                    generates dynamic endpoints.
                  </p>
                  <span className="languagesUsed">
                    Tools Used: ReactJS, HTML5, CSS3
                  </span>
                </div>
              </div>
              <div className="codeWrapper">
                <a
                  href="https://may-threads-kids.herokuapp.com/"
                  target="_blank"
                >
                  <img
                    className="projectImg"
                    src="https://i.imgur.com/SFmwFH8.png"
                    title="source: imgur.com"
                  />
                </a>
                <div className="projectDesc">
                  <h3 className="projectName">Threads</h3>
                  <p className="codeParagraph">
                    This was a super fun little E-commerce Mock Site.
                  </p>
                  <span className="languagesUsed">
                    Tools Used: ReactJS, HTML5, CSS3
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <footer />
        </div>
      </div>
    )
  }
}

export default Portfolio
