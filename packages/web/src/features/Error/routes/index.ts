import { RouteConfig } from "../../../config/route";
import NotFound from "./Error";

export const build = (config?: any): RouteConfig[] => (
  [
    {
      path: "*",
      component: NotFound,
    }
  ]
)
