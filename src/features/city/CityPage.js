import React from "react";
import { withRouter } from "react-router";
import { Card, CardHeader, CardBody } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getRecentWeatherStart } from "./actions";

const CityPage = ({ match }) => {
  const dispatch = useDispatch();
  const recentWeather = useSelector(({ city }) => city.recentWeather);
  const { params } = match;
  React.useEffect(() => {
    dispatch(getRecentWeatherStart(params));
  }, []);
  console.log(recentWeather);
  return (
    <Card>
      <CardHeader>header</CardHeader>
      <CardBody>body</CardBody>
    </Card>
  );
};

export default withRouter(CityPage);
