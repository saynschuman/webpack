import axios from "axios";

const apiKey = "9b19c346c61b4192091155fc5b0f8fb5";
const host = "http://api.openweathermap.org/data/2.5";

export const getCurrentWeatherByCityName = async (cityName) => {
  try {
    const res = await axios.get(
      `${host}/weather?q=${cityName}&appid=${apiKey}`
    );
    return res.data;
  } catch (error) {
    return { error: true };
  }
};

export const getForecastWeatherByCoords = async (coords) => {
  try {
    const res = await axios.get(
      `${host}/onecall?${coords}&exclude=hourly,current&appid=${apiKey}`
    );
    return res.data;
  } catch (error) {
    return { error: true };
  }
};
