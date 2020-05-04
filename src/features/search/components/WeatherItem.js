import React from "react";
import { ListGroupItem } from "reactstrap";
import PropTypes from "prop-types/prop-types";

const WeatherItem = ({ label, data }) => {
  return (
    <ListGroupItem className="d-flex justify-content-between">
      <span>{label}:</span>
      <span>{data}</span>
    </ListGroupItem>
  );
};

WeatherItem.propTypes = {
  label: PropTypes.string,
  data: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.func,
  ]),
};

export default WeatherItem;
