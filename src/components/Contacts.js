import React, { Component } from "react"

class Contacts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contactInfo: []
    }
  }

  componentDidMount() {
    fetch("https://api.github.com/users/may1038")
      .then(r => r.json())
      .then(json => {
        this.setState({
          contactInfo: json
        })
      })
  }

  render() {
    return (
      <div>
        <h3>Location: {this.state.contactInfo.location}</h3>
        <h3>Name: {this.state.contactInfo.name}</h3>
        <h3>
          Email:<a href="mailto:tylermay@usa.com">Email me</a>
        </h3>
        <br />
        <img src={this.state.contactInfo.avatar_url} />
        }
      </div>
    )
  }
}

export default Contacts
