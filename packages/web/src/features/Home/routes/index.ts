import { lazy } from "react";
import { RouteConfig } from "../../../config/route";
import Home from "./Home";

export const build = (config?: any): RouteConfig[] => (
  [
    {
      component: lazy(async () => (await import("./Home"))),
      index: true
    }
  ]
)
