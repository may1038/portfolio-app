import React, { Component } from "react"

class Contacts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      message: ""
    }
  }

  handleSubmit = event => {
    event.preventDefault()
  }

  render() {
    return (
      <div className="formWrapper">
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <div className="formSmWrapper">
              <div className="contactText">
                <h1>I'd love to hear from you!</h1>
              </div>
              <div>
                <div className="formFlex">
                  <label>Name:</label>
                  <div className="forminput">
                    <input type="text" />
                  </div>
                  <label>Email:</label>
                  <div className="forminput">
                    <input type="email" />
                  </div>
                </div>
                <label>Message:</label>
                <div className="forminput">
                  <textarea name="" id="" cols="100" rows="25" />
                </div>
                <div>
                  <button className="submitBtn" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Contacts
