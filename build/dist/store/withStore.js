import * as React from "react";
import {Provider} from "react-redux";
import App from "../App.js";
import {store} from "./index.js";
export default () => /* @__PURE__ */ React.createElement(Provider, {
  store
}, /* @__PURE__ */ React.createElement(App, null));
