import { hot } from "react-hot-loader/root";
import React from "react";
import Wrapper from "./components/Wrapper";
import Favicon from "react-favicon";
import icon from "./img/favicon.ico";

const Root = () => {
  return (
    <Wrapper>
      <Favicon url={icon} />
    </Wrapper>
  );
};

export default hot(Root);
