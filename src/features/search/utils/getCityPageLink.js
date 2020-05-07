import { routerPaths } from "@/features/routes";
import qs from "qs";

export default (coord) => {
  return `${routerPaths.CITY_PAGE}/?${qs.stringify(coord)}`;
};
