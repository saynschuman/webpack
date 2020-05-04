import React from "react";
import { withRouter } from "react-router";

const CityPage = ({ match }) => {
  console.log(match);
  return <div>CityPage</div>;
};

export default withRouter(CityPage);
