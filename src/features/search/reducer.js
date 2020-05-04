import { Record } from "immutable";

export const GET_CURRENT_WEATHER = "GET_CURRENT_WEATHER";

const ReducerRecord = Record({
  loading: false,
  loaded: false,
  currentWeather: null,
  error: false,
});

export default (state = new ReducerRecord(), action) => {
  switch (action.type) {
    case GET_CURRENT_WEATHER + "_START":
      return state
        .set("loaded", false)
        .set("loading", true)
        .set("error", false);
    case GET_CURRENT_WEATHER + "_SUCCESS":
      return state
        .set("error", false)
        .set("loading", false)
        .set("loaded", true)
        .set("currentWeather", action.payload);
    case GET_CURRENT_WEATHER + "_ERROR":
      return state
        .set("error", true)
        .set("loading", false)
        .set("loaded", false)
        .set("currentWeather", null);
    default:
      return state;
  }
};
