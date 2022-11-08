import { RouteConfig } from "../../../config/route";
import Home from "./Home";

export const build = (config?: any): RouteConfig[] => (
  [
    {
      component: Home,
      index: true
    }
  ]
)
