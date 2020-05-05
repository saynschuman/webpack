import { Record } from "immutable";

export const GET_CURRENT_WEATHER = "GET_CURRENT_WEATHER";

const ReducerRecord = Record({
  loading: false,
  loaded: false,
  currentWeather: {
    coord: { lon: 32.06, lat: 49.43 },
    weather: [
      { id: 500, main: "Rain", description: "light rain", icon: "10d" },
    ],
    main: {
      temp: 290.34,
      feels_like: 290.42,
      temp_min: 290.34,
      temp_max: 290.34,
      pressure: 1008,
      humidity: 72,
      sea_level: 1008,
      grnd_level: 996,
    },
    wind: { speed: 0.81, deg: 341 },
    name: "Cherkasy",
  },
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
