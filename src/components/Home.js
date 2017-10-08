import React, { Component } from "react"

class Portfolio extends Component {
  render() {
    return (
      <div>
        <div className="homeImg">
          <div className="name">
            <div>
              <h1>Tyler May</h1>
            </div>
          </div>
        </div>
        {/*About*/}
        {/*About*/}
        {/*About*/}
        <div className="flexHome">
          <div className="bodyWrapper">
            <div className="aboutFlex">
              <div>
                <h1 className="homeTitle">About</h1>
                <div className="aboutContentWrapper">
                  <p>
                    Hi! My name is Tyler and I really enjoy building things.
                    This is my portfolio website, feel free to poke around and
                    if you would like to reach out to me please visit the
                    contact tab and fill out the form.{" "}
                  </p>
                </div>
              </div>
              {/*Backgroud*/}
              {/*Backgroud*/}
              {/*Backgroud*/}
              <div className="backgroundContactWrap">
                <div>
                  <div className="backgroundDiv">
                    <h3 className="aboutFontColor">Background</h3>
                    <p>
                      I recently completed a 12-week course aimed at full stack
                      web development at The Iron Yard. I enjoy building
                      applications and especially like styling.
                    </p>
                  </div>
                </div>
                {/*Contact*/}
                {/*Contact*/}
                {/*Contact*/}
                <div>
                  <h3 className="aboutFontColor">Contact</h3>
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
                <div>
                  <h3 className="aboutFontColor">Resume</h3>
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
            <div>
              <h1 className="homeTitle">Skills</h1>
              <div>
                <div className="reactJsDiv">
                  <div className="rowzContent">
                    <div className="iconFlex">
                      <img
                        className="icon"
                        src="https://www.iconfinder.com/icons/1781641/2230823/48/raster?token=1507487571-oULtoDL4qIzx7yyPU7XvcozIUBwuWC89-ypRA3NG78LO/hxJRadiFdwxRvCQ%3D"
                        alt=""
                      />
                    </div>
                    <div>
                      <span className="skillsTitle">Languages:</span>
                      <br />
                      <span>Javascript</span>
                      <br />
                      <span>HTML</span>
                      <br />
                      <span>CSS</span>
                      <br />
                      <span>SQL</span>
                    </div>
                  </div>
                  <div className="rowzContent">
                    <div className="iconFlex">
                      <img
                        className="icon"
                        src="https://www.iconfinder.com/icons/1781646/2230828/48/raster?token=1507487513-EHJhKE6r1bLbTWq7m8Z2Wa9FgjBTePMA-Xzg/hc78AZPqAbmsAE4yy0a23Iw%3D"
                        alt=""
                      />
                    </div>
                    <div>
                      <span className="skillsTitle">Front-end Framworks:</span>
                      <br />
                      <span>ReactJS</span>
                    </div>
                  </div>
                  <div className="rowzContent">
                    <div className="iconFlex">
                      <img
                        className="icon"
                        src="https://www.iconfinder.com/icons/1781650/2230832/48/raster?token=1507492526-d3qSy6rqTtZocqPsi6QvzB0FuWjdGvLV-BaQcXRvRHM0NtPNd7nT7S5DPSYA%3D"
                        alt=""
                      />
                    </div>
                    <div>
                      <span>API</span>
                    </div>
                  </div>
                </div>
                <div className="htmlCssDiv">
                  <div className="rowzContent">
                    <div className="iconFlex">
                      <img
                        className="icon"
                        src="https://www.iconfinder.com/icons/1781651/2230833/48/raster?token=1507487606-8i7TLwEbU9RgA57AmWc3exloUG7MFEuy-FUZ5SXMq5rTZE95SUTXPuu78mi0%3D"
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
                        src="https://www.iconfinder.com/icons/1781648/2230830/48/raster?token=1507487683-OmfjHquWwKF7uB40w4suY45QOmLhDKG7-H7C7mp2ZHaVzqbcLWvuUF%2B1TCFU%3D"
                        alt=""
                      />
                    </div>
                    <div>
                      <span className="skillsTitle">Version Control:</span>
                      <br />
                      <span>Git</span>
                    </div>
                  </div>
                  <div className="rowzContent">
                    <div className="iconFlex">
                      <img
                        className="icon"
                        src="https://www.iconfinder.com/icons/1781652/2230834/48/raster?token=1507492421-j93KfixY3O7XpmCFrBuFBPY3CaV1LevX-gNoqhzatJrus%2BXqZxAfAjuT7PNw%3D"
                        alt=""
                      />
                    </div>
                    <div>
                      <span className="skillsTitle">Server-side:</span>
                      <br />
                      <span>Sequelize</span>
                      <br />
                      <span>PostgresSQL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio
