import React, { Component } from "react"

class Portfolio extends Component {
  render() {
    return (
      <div>
        <div className="homeImg">
          <div className="name">
            <div>
              <h1>Tyler May</h1>
            </div>
          </div>
        </div>
        <div>
          <h1>About</h1>
          <p>I love web design. CSS3 is my best friend. So is ReactJS.</p>
        </div>
        <div>
          <h3>Backgroud</h3>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa,
            beatae, molestiae! Modi temporibus, ad quia corporis atque maiores
            quibusdam, id eos aliquam perspiciatis distinctio dicta harum, vero
            impedit porro. Officiis.
          </p>
        </div>
        <div>
          <h3>Contact</h3>
        </div>
        <div>
          <ul>
            <li>tylermay@usa.com</li>
            <li>may1038@github.example</li>
            <li>anotherExample@usa.com</li>
          </ul>
        </div>
        <div>
          <h3>Resume</h3>
        </div>
        <div>
          <a
            className="homeLink"
            href="https://www.linkedin.com/in/tyler-may-bb31606b/"
            target="_blank"
          >
            View/Link
          </a>
        </div>
        <div>
          <h1>Skills</h1>
        </div>
      </div>
    )
  }
}

export default Portfolio
