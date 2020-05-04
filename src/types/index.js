import type { ComponentType } from "react";

export type RouteData = {
  path: string,
  component?: ?ComponentType<any>,
};
