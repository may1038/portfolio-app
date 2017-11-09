import React, { Component } from "react"

class Photography extends Component {
  render() {
    return (
      <div>
        <div className="zoo">
          <div className="photosWrapper">
            {/*Zoo*/}
            {/*Zoo*/}
            {/*Zoo*/}
            {/*Zoo*/}
            <div className="photos">
              <h1 className="photography-title">Photography</h1>
              <table className="photosTable">
                <h1 className="photoTitle">A Day at the Zoo | Houston</h1>
                <h2 className="photoTitle">2017</h2>
                <img
                  className="zoePhoto"
                  src="https://i.imgur.com/14vaDOt.jpg"
                  alt=""
                />
                <img
                  className="zoePhoto"
                  src="https://i.imgur.com/vmStteM.jpg"
                  alt=""
                />
                <img
                  className="zoePhoto"
                  src="https://i.imgur.com/XpG3Jqy.jpg"
                  alt=""
                />
                <img
                  className="zoePhoto"
                  src="https://i.imgur.com/gZJaurg.jpg"
                  alt=""
                />
              </table>
            </div>
            {/*Car*/}
            {/*Car*/}
            {/*Car*/}
            {/*Car*/}
            <div className="photos">
              <table className="photosTable">
                <h1 className="photoTitle">WRX | Colorado</h1>
                <h2 className="photoTitle">2015</h2>
                <img
                  className="zoePhoto"
                  src="https://i.imgur.com/h1LRLPv.jpg"
                  alt=""
                />
                <img
                  className="zoePhoto"
                  src="https://i.imgur.com/XUczczr.jpg"
                  alt=""
                />
                <img
                  className="zoePhoto"
                  src="https://i.imgur.com/CbqJAsR.jpg"
                  alt=""
                />
              </table>
            </div>
          </div>
        </div>
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
    )
  }
}

export default Photography
