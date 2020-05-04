import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const HomePageButton = ({ children }) => {
  return (
    <Link to="/" className="d-block w-100">
      <Button className="d-block m-auto">{children}</Button>
    </Link>
  );
};

export default HomePageButton;
