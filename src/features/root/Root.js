// @flow

import { hot } from "react-hot-loader/root";
import React, { type Node } from "react";
import Wrapper from "./components/Wrapper";
import Favicon from "react-favicon";
import { favicon } from "./img";
import {
  getCurrentWeatherByCityName,
  getForecastWeatherByCoords,
} from "../../commons/api";

type Props = {
  some: string,
};

const Root = ({ some }: Props): Node => {
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
      This is root {some}
    </Wrapper>
  );
};

export default hot(Root);
