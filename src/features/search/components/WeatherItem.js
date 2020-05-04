import React from "react";
import { ListGroupItem } from "reactstrap";

const WeatherItem = ({ label, data }) => {
  return (
    <ListGroupItem className="d-flex justify-content-between">
      <span>{label}:</span>
      <span>{data}</span>
    </ListGroupItem>
  );
};

export default WeatherItem;
