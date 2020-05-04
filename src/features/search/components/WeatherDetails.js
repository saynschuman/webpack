import React from "react";
import { CardBody, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import { CurrentWeather } from "../../../types";
import WeatherItem from "./WeatherItem";
import getDescription from "../utils/getDescription";
import WeatherLoading from "../../../commons/components/WeatherLoading";
import WeatherError from "../../../commons/components/WeatherError";
import { routerPaths } from "../../routes";
import qs from "qs";

const WeatherDetails = ({ currentWeather, loading, error }: CurrentWeather) => {
  if (loading) return <WeatherLoading />;
  if (error)
    return (
      <WeatherError errorText="Sorry, city not found.. please try again" />
    );
  if (!currentWeather) return null;
  const { name, wind, weather, main, coord } = currentWeather;
  const description = getDescription(weather);
  const link = `${routerPaths.CITY_PAGE}/?${qs.stringify(coord)}`;
  return (
    <CardBody>
      <ListGroup>
        <ListGroupItem className="text-center p-b">
          <strong>Today</strong>
        </ListGroupItem>
        <WeatherItem label="City" data={name} />
        <WeatherItem label="Description" data={description} />
        <WeatherItem label="Temp" data={main.temp} />
        <WeatherItem label="Wind speed" data={`${wind.speed} m/s`} />
        <WeatherItem label="Wind deg" data={`${wind.deg}`} />
        <Link to={link}>
          <ListGroupItem className="text-center">
            Watch other days
          </ListGroupItem>
        </Link>
      </ListGroup>
    </CardBody>
  );
};

export default WeatherDetails;
