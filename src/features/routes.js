import { default as authRoutes } from "./auth/routes";
import { default as clientRoutes } from "./client/routes";

const routes = {
  ...authRoutes,
  ...clientRoutes,
};

export default routes;
