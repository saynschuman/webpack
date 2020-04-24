import { hot } from "react-hot-loader/root";
import React from "react";
import Button from "./commons/components/Button/Button";
import { authAPI } from "./commons/api/auth";

const App = () => {
  const auth = async () => {
    await authAPI.authenticateUser("document", "123");
  };
  return <Button onClick={auth}>body</Button>;
};

export default hot(App);
