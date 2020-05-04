import React from "react";
import { CardBody, Spinner } from "reactstrap";

const WeatherLoading = () => {
  return (
    <CardBody className="text-center">
      <Spinner />
    </CardBody>
  );
};

export default WeatherLoading;
