import React, { Component } from "react"
import { NavLink } from "react-router-dom"

class BaseLayout extends Component {
  render() {
    return (
      <div>
        <nav>
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/contacts">Contact</NavLink>
          <NavLink to="/references">References</NavLink>
        </nav>
        {this.props.children}
      </div>
    )
  }
}

export default BaseLayout
