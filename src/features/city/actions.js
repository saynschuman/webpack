import { GET_RECENT_WEATHER } from "./reducer";

export const getRecentWeatherStart = (payload) => ({
  type: GET_RECENT_WEATHER + "_START",
  payload,
});

export const getRecentWeatherSuccess = (payload) => ({
  type: GET_RECENT_WEATHER + "_SUCCESS",
  payload,
});

export const getRecentWeatherError = () => ({
  type: GET_RECENT_WEATHER + "_ERROR",
});
