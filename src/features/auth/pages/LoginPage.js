import React from "react";
import { authAPI } from "../../../commons/api/auth";
import { withRouter } from "react-router-dom";
import checkToken from "../../../commons/utils/checkToken";
import { useDispatch } from "react-redux";

const LoginPage = ({ history }) => {
  const dispatch = useDispatch();
  const auth = async () => {
    await authAPI.authenticateUser("document", "123");
    checkToken(dispatch, history);
    history.push("/client");
  };
  return <button onClick={auth}>auth</button>;
};

export default withRouter(LoginPage);
