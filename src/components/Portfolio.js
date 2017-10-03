import React, { Component } from "react"

class Portfolio extends Component {
  render() {
    return (
      <div>
        <div>
          <a href="https://may-blog.herokuapp.com/" target="_blank">
            <img
              className="imgBlog"
              src="https://i.imgur.com/7uEz0JS.jpg"
              title="source: imgur.com"
            />
          </a>
        </div>
        <div>
          <a href="https://may-threads-kids.herokuapp.com/" target="_blank">
            <img
              className="imgThreads"
              src="https://i.imgur.com/6mjaiGf.png"
              title="source: imgur.com"
            />
          </a>
        </div>
      </div>
    )
  }
}

export default Portfolio
