import React from "react"
import ReactDOM from "react-dom"
import "./styles/index.css"
import App from "./components/App"
import registerServiceWorker from "./registerServiceWorker"
import { BrowserRouter, Route } from "react-router-dom"
import BaseLayout from "./components/BaseLayout"
import Home from "./components/Home"
import Contacts from "./components/Contacts"
import Code from "./components/Code"

ReactDOM.render(
  <BrowserRouter>
    <App>
      <BaseLayout>
        <Route path="/home" component={Home} />
        <Route path="/code" component={Code} />
        <Route path="/contacts" component={Contacts} />
      </BaseLayout>
    </App>
  </BrowserRouter>,
  document.getElementById("root")
)
registerServiceWorker()
