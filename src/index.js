import React from "react";
import ReactDOM from "react-dom";

import {
  Provider
} from "react-redux";

import App from "./js/containers/App";
import store from "./js/store";

import './styles/appStyles.scss';

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("App")
);
