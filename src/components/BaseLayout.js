import React, { Component } from "react"
import { Link } from "react-router-dom"

class BaseLayout extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/portfolio">Portfolio</Link>
        </nav>
        {this.props.children}
      </div>
    )
  }
}

export default BaseLayout
