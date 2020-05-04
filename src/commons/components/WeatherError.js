import React from "react";
import { Alert, CardBody } from "reactstrap";

const WeatherError = ({ errorText }: { errorText: string }) => {
  return (
    <CardBody className="text-center">
      <Alert color="danger">{errorText}</Alert>
    </CardBody>
  );
};

export default WeatherError;
