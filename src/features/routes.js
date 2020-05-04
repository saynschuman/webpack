import { RouteData } from "../types";
import CityPage from "../features/city/CityPage";
import SearchPage from "../features/search/SearchPage";

export const routerPaths = {
  CITY_PAGE: "/city-page",
  SEARCH_PAGE: "/",
};

export const routesList: Array<RouteData> = [
  {
    path: routerPaths.CITY_PAGE + "/:coords",
    component: CityPage,
  },
  {
    path: routerPaths.CITY_PAGE,
    component: CityPage,
  },
  {
    path: routerPaths.SEARCH_PAGE,
    component: SearchPage,
  },
];
