import React, { Component } from "react"

class DesignDevelopment extends Component {
  render() {
    return (
      <div className="photos">
        <div>
          <h1 className="header-desingDev">Design/Development</h1>
        </div>
        {/*Projects*/}
        {/*Projects*/}
        {/*Projects*/}
        <div className="projectBodyWrapper">
          <h1 className="projectTitle">Projects</h1>
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
                Prototype of an application that allows volunteers to register
                for events around Houston.
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
                Blog application that uses React and React Router, and generates
                dynamic endpoints.
              </p>
              <span className="languagesUsed">
                Tools Used: ReactJS, HTML5, CSS3
              </span>
            </div>
          </div>
          <div className="codeWrapper">
            <a href="https://may-threads-kids.herokuapp.com/" target="_blank">
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
        <footer>
          {/*Contact*/}
          {/*Contact*/}
          {/*Contact*/}
          <div className="titleWrapper">
            <div className="contact-wrapper">
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
    )
  }
}

export default DesignDevelopment
