import React from "react";
import { withRouter } from "react-router";
import { Card, CardHeader, CardBody } from "reactstrap";

const CityPage = ({ match }) => {
  return (
    <Card>
      <CardHeader>header</CardHeader>
      <CardBody>body</CardBody>
    </Card>
  );
};

export default withRouter(CityPage);
