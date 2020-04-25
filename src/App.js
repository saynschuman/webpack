import { hot } from "react-hot-loader/root";
import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import allRouter from "./routes";

const App = () => {
  const routes = Object.values(allRouter);
  return (
    <BrowserRouter>
      <Redirect to="./login" />
      <Switch>
        {routes.map((route) => {
          return (
            <Route
              key={route.name}
              path={route.path}
              component={route.pageComponent}
            />
          );
        })}
      </Switch>
    </BrowserRouter>
  );
};

export default hot(App);
