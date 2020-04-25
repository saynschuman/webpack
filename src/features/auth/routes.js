import { FEATURE } from "./config";
import LoginPage from "./components/pages/LoginPage";

const PATH = "/login";

export const PAGE_LOGIN = FEATURE + PATH;

const routes = {
  [PAGE_LOGIN]: {
    name: PAGE_LOGIN,
    path: PATH,
    pageComponent: LoginPage,
    isNeedAuth: false,
  },
};

export default routes;
