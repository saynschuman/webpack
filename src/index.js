import React from "react";
import { render } from "react-dom";

render(
  React.createElement(
    "button",
    { onClick: () => console.log("click") },
    "click me"
  ),
  document.getElementById("root")
);
