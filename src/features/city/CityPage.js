import React from "react";
import { Card, CardHeader, ListGroupItem, ListGroup } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getRecentWeatherStart } from "./actions";
import WeatherLoading from "../../commons/components/WeatherLoading";
import WeatherError from "../../commons/components/WeatherError";
import HomePageButton from "../../commons/components/HomePageButton";
import CardWeather from "./components/CardWeather";

const CityPage = () => {
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
      <>
        <WeatherError errorText="Sorry, city not found." />
        <HomePageButton>Try Again</HomePageButton>
      </>
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
      {daily.map((day) => (
        <CardWeather key={day.dt} day={day} />
      ))}
    </Card>
  );
};

export default CityPage;
