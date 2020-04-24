import { hot } from "react-hot-loader/root";
import React from "react";
import Button from "./commons/components/Button/Button";
import { authAPI } from "./commons/api/auth";
import { clientAPI } from "./commons/api/client/";

const App = () => {
  const auth = async () => {
    await authAPI.authenticateUser("document", "123");
  };
  const getUserInfo = async () => {
    await clientAPI.user.getActiveUser();
  };
  return (
    <>
      <Button onClick={auth}>auth</Button>
      <Button onClick={getUserInfo}>getUserInfo</Button>
    </>
  );
};

export default hot(App);
