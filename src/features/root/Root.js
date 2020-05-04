// @flow

import { hot } from "react-hot-loader/root";
import React, { type Node } from "react";
import Wrapper from "./components/Wrapper";
import Favicon from "react-favicon";
import { favicon } from "./img";
import { Switch, Route } from "react-router-dom";
import { routesList } from "../routes";
import { Container } from "reactstrap";

const Root = (): Node => {
  return (
    <Wrapper>
      <Favicon url={favicon} />
      <Container>
        <Switch>
          {routesList.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      </Container>
    </Wrapper>
  );
};

export default hot(Root);
