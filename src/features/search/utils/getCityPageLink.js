import { routerPaths } from "../../routes";
import qs from "qs";

export default (coord) => {
  return `${routerPaths.CITY_PAGE}/?${qs.stringify(coord)}`;
};
