import axios from "axios";

const apiKey = "9b19c346c61b4192091155fc5b0f8fb5";

export const getCurrentWeatherByCityName = async (cityName) => {
  try {
    const res = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
    );
    return res.data;
  } catch (error) {
    return { error: true };
  }
};

`https://api.openweathermap.org/data/2.5/onecall?lat=60.99&lon=30.9&exclude=hourly,daily&appid={YOUR API KEY}`

export const getForecastWeatherByCityId = async (cityId, cnt) => {
  // `api.openweathermap.org/data/2.5/forecast/daily?id=${cityId}&cnt=${cnt}&appid=${apiKey}`
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast/daily?id=524901&lang=zh_cn&appid=${apiKey}`
    );
    return res.data;
  } catch (error) {
    return { error: true };
  }
};
