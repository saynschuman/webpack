import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroupItem,
  ListGroup,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getRecentWeatherStart } from "./actions";
import WeatherItem from "../search/components/WeatherItem";
import getDescription from "../search/utils/getDescription";
import WeatherLoading from "../../commons/components/WeatherLoading";
import WeatherError from "../../commons/components/WeatherError";

const CityPage = ({}) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    const coords = window.location.search.replace("?", "");
    dispatch(getRecentWeatherStart(coords));
  }, []);
  const recentWeather = useSelector(({ city }) => city.recentWeather);
  const loading = useSelector(({ city }) => city.loading);
  const error = useSelector(({ city }) => city.error);
  if (loading) return <WeatherLoading />;
  if (error)
    return (
      <WeatherError errorText="Sorry, city not found.. please try again" />
    );
  if (!recentWeather) return null;
  const { daily } = recentWeather;
  return (
    <Card>
      <CardHeader>
        <ListGroup>
          <ListGroupItem className="text-center p-b">
            <strong>Recent Days Weather</strong>
          </ListGroupItem>
        </ListGroup>
      </CardHeader>
      {daily.map((el) => (
        <CardBody>
          <ListGroup>
            <WeatherItem label="date" data={el.dt} />
            <WeatherItem label="weather" data={getDescription(el.weather)} />
            <WeatherItem label="sunrise" data={el.sunrise} />
            <WeatherItem label="sunset" data={el.sunset} />
            <WeatherItem label="pressure" data={el.pressure} />
            <WeatherItem label="humidity" data={el.humidity} />
            <WeatherItem label="dew_point" data={el.dew_point} />
            <WeatherItem label="wind_speed" data={el.wind_speed} />
            <WeatherItem label="wind_deg" data={el.wind_deg} />
            <WeatherItem label="clouds" data={el.clouds} />
          </ListGroup>
        </CardBody>
      ))}
    </Card>
  );
};

export default CityPage;
