import { constants } from "./reducers";

export const setTokenInfo = (payload) => ({
  type: constants.SET_TOKEN_INFO,
  payload,
});
