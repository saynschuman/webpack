import { Record } from "immutable";

const ReducerRecord = Record({
  exp: null,
  jti: null,
  status: null,
  status_display: null,
  token_type: null,
  user_id: null,
});

export const constants = {
  SET_TOKEN_INFO: "SET_TOKEN_INFO",
};

export default (state = new ReducerRecord(), action) => {
  switch (action.type) {
    case constants.SET_TOKEN_INFO:
      return state
        .set("exp", action.payload.exp)
        .set("jti", action.payload.jti)
        .set("status", action.payload.status)
        .set("status_display", action.payload.status_display)
        .set("token_type", action.payload.token_type)
        .set("user_id", action.payload.user_id);
    default:
      return state;
  }
};
