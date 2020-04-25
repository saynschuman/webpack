import { FEATURE } from "./config";
import ClientPage from "./components/pages/ClientPage";

const PATH = "/client";

export const PAGE_MAIN = FEATURE + PATH;

const routes = {
  [PAGE_MAIN]: {
    name: PAGE_MAIN,
    path: PATH,
    pageComponent: ClientPage,
    isNeedAuth: false,
  },
};

export default routes;
