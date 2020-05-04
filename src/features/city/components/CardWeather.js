import React from "react";
import { CardBody, ListGroup } from "reactstrap";
import WeatherItem from "../../search/components/WeatherItem";
import getDescription from "../../search/utils/getDescription";
import PropTypes from "prop-types";

const CardWeather = ({ day }) => {
  return (
    <CardBody>
      <ListGroup>
        <WeatherItem label="date" data={day.dt} />
        <WeatherItem label="weather" data={getDescription(day.weather)} />
        <WeatherItem label="sunrise" data={day.sunrise} />
        <WeatherItem label="sunset" data={day.sunset} />
        <WeatherItem label="pressure" data={day.pressure} />
        <WeatherItem label="humidity" data={day.humidity} />
        <WeatherItem label="dew_point" data={day.dew_point} />
        <WeatherItem label="wind_speed" data={day.wind_speed} />
        <WeatherItem label="wind_deg" data={day.wind_deg} />
        <WeatherItem label="clouds" data={day.clouds} />
      </ListGroup>
    </CardBody>
  );
};

CardWeather.propTypes = {
  day: PropTypes.shape({
    dt: PropTypes.number,
    weather: PropTypes.number,
    sunrise: PropTypes.number,
    sunset: PropTypes.number,
    pressure: PropTypes.number,
    humidity: PropTypes.number,
    dew_point: PropTypes.number,
    wind_speed: PropTypes.number,
    wind_deg: PropTypes.number,
    clouds: PropTypes.number,
  }),
};

export default CardWeather;
