import React from "react";
import { CardBody, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import qs from "qs";
import PropTypes from "prop-types";
import WeatherItem from "./WeatherItem";
import getDescription from "../utils/getDescription";
import WeatherLoading from "../../../commons/components/WeatherLoading";
import WeatherError from "../../../commons/components/WeatherError";
import { routerPaths } from "../../routes";

const WeatherDetails = ({ currentWeather, loading, error }) => {
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

WeatherDetails.propTypes = {
  currentWeather: PropTypes.shape({
    coord: PropTypes.shape({
      lon: PropTypes.number,
      lat: PropTypes.number,
    }),
    weather: PropTypes.array([
      {
        id: PropTypes.number,
        main: PropTypes.string,
        description: PropTypes.string,
        icon: PropTypes.string,
      },
    ]),
    main: PropTypes.shape({
      temp: PropTypes.number,
      feels_like: PropTypes.number,
      temp_min: PropTypes.number,
      temp_max: PropTypes.number,
      pressure: PropTypes.number,
      humidity: PropTypes.number,
    }),
    visibility: PropTypes.number,
    wind: { speed: PropTypes.number, deg: PropTypes.number },
    dt: PropTypes.number,
    sys: PropTypes.shape({
      type: PropTypes.number,
      id: PropTypes.number,
      country: PropTypes.string,
      sunrise: PropTypes.number,
      sunset: PropTypes.number,
    }),
    timezone: PropTypes.number,
    id: PropTypes.number,
    name: PropTypes.string,
  }),
  loading: PropTypes.bool,
  error: PropTypes.bool,
};

export default WeatherDetails;
