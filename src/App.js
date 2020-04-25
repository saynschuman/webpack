import { hot } from "react-hot-loader/root";
import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import allRoutes from "./routes";

const App = ({ history }) => {
  const routes = Object.values(allRoutes);
  const activeUser = useSelector(({ activeUser }) => activeUser.user);
  const activeUserLoading = useSelector(({ activeUser }) => activeUser.loading);

  // React.useEffect(() => {
  //   !!activeUser && !activeUserLoading && !!activeUser.id
  //     ? history.push(activeUser.user_status === 2 ? "/client" : "/admin")
  //     : history.push("/login");
  // }, [activeUser]);

  return (
    <>
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
