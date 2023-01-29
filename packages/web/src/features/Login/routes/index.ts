import { RouteConfig } from "@oriun/core/lib/domain/route";
import Login from "./Login";

export const build = (config?: any): RouteConfig[] => (
  [
    {
      component: Login,
      path: "/login"
    }
  ]
)
