import React from "react";
import { FormGroup, Input, Card, CardHeader, Form, Button } from "reactstrap";
import { FaSearchLocation } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentWeatherStart } from "./actions";
import WeatherDetails from "./components/WeatherDetails";

const SearchPage = () => {
  const dispatch = useDispatch();
  const currentWeather = useSelector(({ search }) => search.currentWeather);
  const loading = useSelector(({ search }) => search.loading);
  const error = useSelector(({ search }) => search.error);
  const [city, setCity] = React.useState("");
  const onChange = ({ target }) => {
    const { value } = target;
    setCity(value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(getCurrentWeatherStart(city));
  };
  return (
    <Card>
      <CardHeader>
        <Form onSubmit={onSubmit}>
          <FormGroup className="d-flex flex-nowrap justify-content-between">
            <Input
              className="w-75"
              type="search"
              name="search"
              value={city}
              placeholder="Search city"
              onChange={onChange}
              autoComplete="off"
            />
            <Button className="w-25 ml-2">
              <FaSearchLocation />
            </Button>
          </FormGroup>
        </Form>
      </CardHeader>
      <WeatherDetails
        currentWeather={currentWeather}
        loading={loading}
        error={error}
      />
    </Card>
  );
};

export default SearchPage;
