import { hot } from "react-hot-loader/root";
import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import allRoutes from "./routes";
import { authAPI } from "./commons/api/auth/";

const App = ({ history }) => {
  const routes = Object.values(allRoutes);
  const auth = async () => {
    await authAPI.authenticateUser("document", "123");
  };

  const activeUser = useSelector(({ activeUser }) => activeUser.user);

  React.useEffect(() => {
    !!activeUser &&
      activeUser.id &&
      history.push(activeUser.user_status === 2 ? "/courses" : "/login");
  }, [activeUser]);

  return (
    <>
      <button onClick={auth}>auth</button>
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.name}
            path={route.path}
            component={route.pageComponent}
          />
        ))}
      </Switch>
    </>
  );
};

export default hot(withRouter(App));
