import React, { Component } from "react"

class Portfolio extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="nameTitle">
          <div>
            <h1 className="header">About</h1>
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
              </div>
              <div className="header-greeting">
                <h1 className="greeting">Hi, Im Tyler.</h1>
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
                  I am a UI Designer/Developer. I design using Adobe Creative
                  Suite. I develop web applications using HTML, CSS, Javascript,
                  ReactJS, and pulling data from APIs but am familiar with
                  Node.js, MongoDB, SQL, and building databases.
                </p>
                <p>
                  I travel as often as I can. I enjoy the great outdoors, I love
                  big cities, and I capture it all as an aspiring photographer.
                </p>
                <p>
                  I am currently doing freelance work as a UI/UX designer for
                  Ecotone, LLC. I love being creative and design gives me that
                  creative outlet. I perfer to work in groups and communication
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
                    I recently completed a 12-week course aimed at full-stack
                    web development at The Iron Yard. This applicable skill
                    gives me the ability to move into a position with little
                    learning curve.
                  </p>
                </div>
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
                <div className="skillsTable">
                  <table>
                    <div className="languages">
                      <th>
                        <tr className="skillstitle">Languages:</tr>
                      </th>
                      <tr>
                        <td className="skills-td">
                          Javascript
                          <br />
                          HTML5
                          <br />
                          CSS3
                        </td>
                      </tr>
                    </div>
                    <div className="frameworks">
                      <th>
                        <tr className="skillstitle">Frameworks:</tr>
                      </th>
                      <tr>
                        <td className="skills-td">ReactJS</td>
                      </tr>
                    </div>
                    <div className="design">
                      <th>
                        <tr className="skillstitle">Design:</tr>
                      </th>
                      <tr>
                        <td className="skills-td">
                          Adobe XD
                          <br />
                          Sketch
                          <br />
                          Responsive Design
                        </td>
                      </tr>
                    </div>
                  </table>
                  <table>
                    <div className="noSql">
                      <th>
                        <tr className="skillstitle">NoSQL:</tr>
                      </th>
                      <tr>
                        <td className="skills-td">MongoDB</td>
                      </tr>
                    </div>
                    <div className="versionCtrl">
                      <th>
                        <tr className="skillstitle">Version Control:</tr>
                      </th>
                      <tr>
                        <td className="skills-td">Git</td>
                      </tr>
                    </div>
                    <div className="serverSide">
                      <th>
                        <tr className="skillstitle">Server-side:</tr>
                      </th>
                      <tr>
                        <td className="skills-td">
                          Sequelize
                          <br />
                          PostgresSQL
                          <br />
                          API
                        </td>
                      </tr>
                    </div>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <footer>
            {/*Contact*/}
            {/*Contact*/}
            {/*Contact*/}
            <div className="titleWrapper">
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
                  <a
                    className="linkedIn"
                    href="https://www.linkedin.com/in/tyler-may-bb31606b/"
                    target="_blank"
                  >
                    <i class="fa fa-linkedin fa-2x" aria-hidden="true" />
                  </a>
                </div>
              </div>
              <div className="resumeFlex">
                <div className="resumeMargin">
                  <h1 className="aboutFont">Resume</h1>
                  <a className="homeLink" href="/resume.html" target="_blank">
                    View/Link
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    )
  }
}

export default Portfolio
