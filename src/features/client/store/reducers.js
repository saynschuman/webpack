import * as constants from "./constants";
import { Record } from "immutable";

const ReducerRecord = Record({
  user: null,
  loading: false,
  loaded: false,
});

export default (state = new ReducerRecord(), action) => {
  switch (action.type) {
    case constants.GET_ACTIVE_USER + "START":
      return state.set("loading", true);
    case constants.GET_ACTIVE_USER + "SUCCESS":
      return state
        .set("loading", false)
        .set("loaded", true)
        .set("user", action.user);
    case constants.GET_ACTIVE_USER + "ERROR":
      return state.set("loading", false).set("loaded", false);
    default:
      return state;
  }
};
