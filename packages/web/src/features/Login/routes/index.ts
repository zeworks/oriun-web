import { RouteConfig } from "../../../config/route";
import Login from "./Login";

export const build = (config?: any): RouteConfig[] => (
  [
    {
      component: Login,
      path: "/login"
    }
  ]
)
