import React from "react";
import { CardBody, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types/prop-types";
import WeatherItem from "./WeatherItem";
import WeatherLoading from "@/commons/components/WeatherLoading";
import WeatherError from "@/commons/components/WeatherError";
import getCityPageLink from "../utils/getCityPageLink";

const WeatherDetails = ({ currentWeather, loading, error }) => {
  if (loading) return <WeatherLoading />;
  if (error)
    return (
      <WeatherError errorText="Sorry, city not found.. please try again" />
    );
  if (!currentWeather) return null;
  const {
    coord,
    name,
    description,
    temp,
    wind_speed,
    wind_deg,
  } = currentWeather;
  const link = getCityPageLink(coord);
  return (
    <CardBody>
      <ListGroup>
        <ListGroupItem className="text-center p-b">
          <strong>Today</strong>
        </ListGroupItem>
        <WeatherItem label="City" data={name} />
        <WeatherItem label="Description" data={description} />
        <WeatherItem label="Temp" data={temp} />
        <WeatherItem label="Wind speed" data={wind_speed} />
        <WeatherItem label="Wind deg" data={`${wind_deg}`} />
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
    name: PropTypes.string,
    description: PropTypes.string,
    temp: PropTypes.number,
    wind_speed: PropTypes.number,
    wind_deg: PropTypes.number,
  }),
  loading: PropTypes.bool,
  error: PropTypes.bool,
};

export default WeatherDetails;
