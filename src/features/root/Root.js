// @flow

import { hot } from "react-hot-loader/root";
import React, { type Node } from "react";
import Wrapper from "./components/Wrapper";
import Favicon from "react-favicon";
import { favicon } from "./img";

type Props = {
  some: string,
};

const Root = ({ some }: Props): Node => {
  return (
    <Wrapper>
      <Favicon url={favicon} />
      This is root {some}
    </Wrapper>
  );
};

export default hot(Root);
