import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import Keyworddisplay from "./component/keyworddisplay";
import SumCalc from "./component/sumCalc";
import Todolist from "./component/todolist";
import Img from "./component/img";
import Fizzbuzz from "./component/fizzbuzz";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Fizzbuzz />
  </React.StrictMode>
);

reportWebVitals();
