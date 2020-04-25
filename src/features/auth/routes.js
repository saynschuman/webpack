import { FEATURE } from "./config";
import LoginPage from "./components/pages/LoginPage/LoginPage";

export const PAGE_LOGIN = `${FEATURE}_login`;

const routes = {
  [PAGE_LOGIN]: {
    name: PAGE_LOGIN,
    path: `/login`,
    pageComponent: LoginPage,
    isNeedAuth: false,
  },
};

export default routes;
