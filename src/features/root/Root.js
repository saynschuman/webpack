// @flow

import { hot } from "react-hot-loader/root";
import React, { type Node } from "react";
import Wrapper from "./components/Wrapper";
import Favicon from "react-favicon";
import { favicon } from "./img";
import { Switch, Route, Link } from "react-router-dom";
import {
  // getCurrentWeatherByCityName,
  getForecastWeatherByCoords,
} from "../../commons/api";
import { routesList } from "../routes";

const Root = (): Node => {
  const getWeather = async () => {
    // return getCurrentWeatherByCityName("Cherkasy");
    return getForecastWeatherByCoords("lat=60.99&lon=30.9");
  };
  React.useEffect(() => {
    getWeather().then((res) => console.log(res));
  }, []);
  return (
    <Wrapper>
      <Favicon url={favicon} />
      <div>
        <Link to={"/city-page/21"}>city-page</Link>
      </div>
      <Switch>
        {routesList.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
          />
        ))}
      </Switch>
    </Wrapper>
  );
};

export default hot(Root);
