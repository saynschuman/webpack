import React from "react";
import { Alert, CardBody } from "reactstrap";
import PropTypes from "prop-types/prop-types";

const WeatherError = ({ errorText }) => {
  return (
    <CardBody className="text-center">
      <Alert color="danger">{errorText}</Alert>
    </CardBody>
  );
};

WeatherError.propTypes = {
  errorText: PropTypes.string,
};

export default WeatherError;
