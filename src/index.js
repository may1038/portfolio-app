import React from "react"
import ReactDOM from "react-dom"
import "./styles/index.css"
import App from "./components/App"
import registerServiceWorker from "./registerServiceWorker"
import { BrowserRouter, Route } from "react-router-dom"
import BaseLayout from "./components/BaseLayout"
import Portfolio from "./components/Portfolio"
import LandingPage from "./components/LandingPage"
import Photography from "./components/Photography"

ReactDOM.render(
  <BrowserRouter>
    <App>
      <BaseLayout>
        <Route path="/" exact component={LandingPage} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/photography" component={Photography} />
      </BaseLayout>
    </App>
  </BrowserRouter>,
  document.getElementById("root")
)
registerServiceWorker()
