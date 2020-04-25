import React from "react";
import { authAPI } from "../../../../commons/api/auth";
import { withRouter } from "react-router-dom";

const LoginPage = ({ history }) => {
  const auth = async () => {
    await authAPI.authenticateUser("document", "123");
    history.push("/client");
  };
  return <button onClick={auth}>auth</button>;
};

export default withRouter(LoginPage);
