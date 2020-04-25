import * as constants from "./constants";

export const getActiveUserStart = () => ({
  type: constants.GET_ACTIVE_USER + "START",
});

export const getActiveUserSuccess = (user) => ({
  type: constants.GET_ACTIVE_USER + "SUCCESS",
  user,
});

export const getActiveUserError = () => ({
  type: constants.GET_ACTIVE_USER + "ERROR",
});
