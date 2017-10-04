import React, { Component } from "react"
import { NavLink } from "react-router-dom"

class BaseLayout extends Component {
  render() {
    return (
      <div>
        <nav>
          <NavLink className="navBar" to="/">
            Home
          </NavLink>
          <NavLink className="navBar" to="/code">
            Code
          </NavLink>
          <NavLink className="navBar" to="/contacts">
            Contact
          </NavLink>
        </nav>
        {this.props.children}
      </div>
    )
  }
}

export default BaseLayout
