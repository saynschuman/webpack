import React from "react";
import { render } from "react-dom";

const App = () => (
  <button onClick={() => console.log("click")}>click me</button>
);

render(<App />, document.getElementById("root"));
