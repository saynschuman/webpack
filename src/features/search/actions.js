import { GET_CURRENT_WEATHER } from "./reducer";

export const getCurrentWeatherStart = (cityName) => ({
  type: GET_CURRENT_WEATHER + "_START",
  cityName,
});

export const getCurrentWeatherSuccess = (payload) => ({
  type: GET_CURRENT_WEATHER + "_SUCCESS",
  payload,
});

export const getCurrentWeatherError = () => ({
  type: GET_CURRENT_WEATHER + "_ERROR",
});
