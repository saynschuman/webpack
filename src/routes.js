import { default as authRoutes } from "./features/auth/routes";
import { default as clientRoutes } from "./features/client/routes";

const routes = {
  ...authRoutes,
  ...clientRoutes,
};

export default routes;
