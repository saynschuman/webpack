import Cookie from "js-cookie";
import { setTokenInfo } from "../../root/store/actions";
import tokenDecode from "./tokenDecode";

export default (dispatch, history) => {
  const access = Cookie.get("access");
  if (access) {
    dispatch(setTokenInfo(tokenDecode(access)));
  } else {
    history.push("/login");
  }
};
