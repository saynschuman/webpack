import { Record } from "immutable";

export const GET_RECENT_WEATHER = "GET_RECENT_WEATHER";

const ReducerRecord = Record({
  loading: false,
  loaded: false,
  recentWeather: null,
  error: false,
});

export default (state = new ReducerRecord(), action) => {
  switch (action.type) {
    case GET_RECENT_WEATHER + "_START":
      return state
        .set("loaded", false)
        .set("loading", true)
        .set("error", false);
    case GET_RECENT_WEATHER + "_SUCCESS":
      return state
        .set("error", false)
        .set("loading", false)
        .set("loaded", true)
        .set("recentWeather", action.payload);
    case GET_RECENT_WEATHER + "_ERROR":
      return state
        .set("error", true)
        .set("loading", false)
        .set("loaded", false)
        .set("recentWeather", null);
    default:
      return state;
  }
};
