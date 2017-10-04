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
        {/*About*/}
        {/*About*/}
        {/*About*/}
        <div className="bodyWrapper">
          <div className="aboutFlex">
            <div>
              <h1 className="homeTitle">About</h1>
              <p>I love web design. CSS3 is my best friend. So is ReactJS.</p>
            </div>
          </div>
          {/*Backgroud*/}
          {/*Backgroud*/}
          {/*Backgroud*/}
          <div className="backgroundFlex">
            <div>
              <h3>Backgroud</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa,
                beatae, molestiae! Modi temporibus, ad quia corporis atque
                maiores quibusdam, id eos aliquam perspiciatis distinctio dicta
                harum, vero impedit porro. Officiis.
              </p>
            </div>
          </div>
          {/*Contact*/}
          {/*Contact*/}
          {/*Contact*/}
          <div className="ContactFlex">
            <div>
              <h3>Contact</h3>
              <ul>
                <li>tylermay@usa.com</li>
                <li>may1038@github.example</li>
                <li>anotherExample@usa.com</li>
              </ul>
            </div>
          </div>

          {/*Resume*/}
          {/*Resume*/}
          {/*Resume*/}
          <div className="resumeFlex">
            <div>
              <h3>Resume</h3>
              <a
                className="homeLink"
                href="https://www.linkedin.com/in/tyler-may-bb31606b/"
                target="_blank"
              >
                View/Link
              </a>
            </div>
          </div>
          {/*Skills*/}
          {/*Skills*/}
          {/*Skills*/}
          <div className="skillsFlex">
            <div>
              <h1 className="homeTitle">Skills</h1>
              <ul>
                <li>React</li>homeTitle
                <li>Javascript</li>
                <li>HTML5</li>
                <li>CSS3</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio
