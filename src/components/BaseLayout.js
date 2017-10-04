import React, { Component } from "react"
import { NavLink } from "react-router-dom"

class BaseLayout extends Component {
  render() {
    return (
      <div>
        <nav>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/code">Code</NavLink>
          <NavLink to="/contacts">Contact</NavLink>
        </nav>
        {this.props.children}
      </div>
    )
  }
}

export default BaseLayout
