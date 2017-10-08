import React, { Component } from "react"

class Code extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <h1 className="projectTitle">Projects</h1>
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
                Blog application that uses React and React Router, and generates
                dynamic endpoints.
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
              <p className="codeParagrah">E-commerce Mock Site.</p>
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
    )
  }
}

export default Code
