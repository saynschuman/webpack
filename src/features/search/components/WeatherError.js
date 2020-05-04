import React from "react";
import { Alert, CardBody } from "reactstrap";

const WeatherError = () => {
  return (
    <CardBody className="text-center">
      <Alert color="danger">Sorry, city not found.. please try again</Alert>
    </CardBody>
  );
};

export default WeatherError;
