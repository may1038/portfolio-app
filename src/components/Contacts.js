import React, { Component } from "react"

class Contacts extends Component {
  render() {
    return (
      <div className="formWrapper">
        <div className="form">
          <form>
            <div className="formSmWrapper">
              <div className="contactText">
                <h3>I'd love to hear from you!</h3>
              </div>
              <label>Name:</label>
              <div className="forminput">
                <input type="text" />
              </div>
              <label>Email:</label>
              <div className="forminput">
                <input type="text" />
              </div>
              <label>Message:</label>
              <div className="forminput">
                <textarea name="" id="" cols="100" rows="25" />
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Contacts
