import React, { Component } from "react"
import { NavLink } from "react-router-dom"

class BaseLayout extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/portfolio">Design/Development</NavLink>
          <NavLink to="/photography">Photography</NavLink>
        </nav>
        {this.props.children}
      </div>
    )
  }
}

export default BaseLayout
