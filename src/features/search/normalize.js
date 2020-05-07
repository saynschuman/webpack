import getNested from "@/commons/utils/getNested";
import checkType from "@/commons/utils/checkType";
import getDescription from "./utils/getDescription";

export const selectWeatherData = (data) => {
  return {
    coord: checkType(getNested(data, "coord"), "object"),
    name: checkType(getNested(data, "name"), "string"),
    description: getDescription(
      checkType(getNested(data, "weather"), "object")
    ),
    temp: checkType(getNested(data, "main", "temp"), "number"),
    wind_speed: checkType(getNested(data, "wind", "speed"), "number"),
    wind_deg: checkType(getNested(data, "wind", "deg"), "number"),
  };
};
