import Cookie from "js-cookie";
import { setTokenInfo } from "../../root/store/actions";
import tokenDecode from "./tokenDecode";

export default (dispatch, history) => {
  const access = Cookie.get("access");
  if (!access) return history.push("/login");
  const data = tokenDecode(access);
  if (!data) return history.push("/login");
  const { status } = data;
  dispatch(setTokenInfo(data));
  switch (status) {
    case 0:
      return history.push("/admin");
    case 1:
      return history.push("/admin");
    case 2:
      return history.push("/client");
    case 3:
      return history.push("/curator");
    default:
      return history.push("/login");
  }
};
