//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/Home.js";
import SecondsCounter from "./component/SecondsCounter.js";

//render your react application
let seconds = 0;
setInterval(() => {
    ReactDOM.render(
    <SecondsCounter seconds={3434} />,
    document.querySelector("#app"));
}, 1000);
