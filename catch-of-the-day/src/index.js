import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import "./css/style.css";
//main is the div id of the root tag in index.html.
render(<App />, document.querySelector("#main"));
