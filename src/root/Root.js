import { hot } from "react-hot-loader/root";
import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import allRoutes from "../routes";
import Cookie from "js-cookie";
import tokenDecode from "../commons/utils/tokenDecode";

const Root = ({ history }) => {
  const routes = Object.values(allRoutes);
  const activeUser = useSelector(({ activeUser }) => activeUser.user);
  const activeUserLoading = useSelector(({ activeUser }) => activeUser.loading);

  React.useEffect(() => {
    const access = Cookie.get("access");
    if (access) {
      console.log(tokenDecode(access));
    }
  }, []);

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

export default hot(withRouter(Root));
