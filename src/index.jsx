import React from "react"
import ReactDOM from "react-dom"
import "./index.scss"
import App from "./components/App.tsx" // need the extension because yep
import { Provider } from "react-redux"
import { createStore } from "redux"
import rootReducer from "./store"
import { devToolsEnhancer } from "redux-devtools-extension"

const store = createStore(
  rootReducer,
  devToolsEnhancer({
    trace: process.env.NODE_ENV === "development",
    traceLimit: 25
  })
)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root")
)
