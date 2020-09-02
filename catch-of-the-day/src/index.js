import React from "react";
import { render } from "react-dom";
import Router from "./components/Router";
import "./css/style.css";
//main is the div id of the root tag in index.html.
render(<Router />, document.querySelector("#main"));
