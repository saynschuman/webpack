import Cookie from "js-cookie";
import { setTokenInfo } from "../../root/store/actions";
import tokenDecode from "./tokenDecode";
import routes from "../../features/routes";

export default (dispatch, history) => {
  const access = Cookie.get("access");
  if (!access) return history.push(routes.login.path);
  const data = tokenDecode(access);
  if (!data) return history.push(routes.login.path);
  const { status } = data;
  dispatch(setTokenInfo(data));
  switch (status) {
    case 0:
      return history.push("/admin");
    case 1:
      return history.push("/admin");
    case 2:
      return history.push(routes.client.path);
    case 3:
      return history.push("/curator");
    default:
      return history.push(routes.login.path);
  }
};
