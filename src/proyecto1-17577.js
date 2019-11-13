import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header.js";

const App = () => {
    return <div><Header></Header></div>
};



ReactDOM.render(<App />, document.querySelector("#root"));