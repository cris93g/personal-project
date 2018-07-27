import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { StripeProvider } from "react-stripe-elements";
import { Provider } from "react-redux";
import store from "./ducks/store";

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <StripeProvider apiKey="pk_test_rHNyCLcNmWfjMr4qI7ZFvavX">
        <App />
      </StripeProvider>
    </Provider>
  </HashRouter>,
  document.getElementById("root")
);
