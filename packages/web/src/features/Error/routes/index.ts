import { RouteConfig } from "@oriun/core/lib/domain/route";
import NotFound from "./Error";

export const build = (config?: any): RouteConfig[] => (
  [
    {
      path: "*",
      component: NotFound,
    }
  ]
)
