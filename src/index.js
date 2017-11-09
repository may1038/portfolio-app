import React from "react"
import ReactDOM from "react-dom"
import "./styles/index.css"
import App from "./components/App"
import registerServiceWorker from "./registerServiceWorker"
import { BrowserRouter, Route } from "react-router-dom"
import BaseLayout from "./components/BaseLayout"
import About from "./components/About"
import LandingPage from "./components/LandingPage"
import Photography from "./components/Photography"
import DesignDevelopment from "./components/DesignDevelopment"

ReactDOM.render(
  <BrowserRouter>
    <App>
      <BaseLayout>
        <Route path="/" exact component={LandingPage} />
        <Route path="/about" component={About} />
        <Route path="/designdevelopment" component={DesignDevelopment} />
        <Route path="/photography" component={Photography} />
      </BaseLayout>
    </App>
  </BrowserRouter>,
  document.getElementById("root")
)
registerServiceWorker()
