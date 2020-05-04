import axios from "axios";

const apiKey = "357aacdf4a73b682918ffe2e4e43c5c1";

export const getWeatherByCityName = async (cityName) => {
  try {
    const res = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
    );
    return res.data;
  } catch (error) {
    return { error: true };
  }
};
