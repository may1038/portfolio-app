import React, { Component } from "react"

class Code extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <h1>Projects</h1>
          </div>
          <div>
            <a href="https://may-blog.herokuapp.com/" target="_blank">
              <img
                className="imgBlog"
                src="https://i.imgur.com/7uEz0JS.jpg"
                title="source: imgur.com"
              />
            </a>
            <h3>Polly Blog</h3>
            <p>
              Blog application that uses React and React Router, and generates
              dynamic endpoints.
            </p>
            <ul>
              ///loose the bullet point on Tools Used
              <li className="">Tools Used</li>
              <li>ReactJS</li>
              <li>HTML5</li>
              <li>CSS3</li>
            </ul>
          </div>
          <div>
            <a href="https://may-threads-kids.herokuapp.com/" target="_blank">
              <img
                className="imgThreads"
                src="https://i.imgur.com/6mjaiGf.png"
                title="source: imgur.com"
              />
            </a>
            <h3>Threads</h3>
            <p>E-commerce Mock Site.</p>
            <ul>
              ///loose the bullet point on Tools Used
              <li className="">Tools Used</li>
              <li>ReactJS</li>
              <li>HTML5</li>
              <li>CSS3</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Code
