import { Config } from "./config";
import { Menu } from "./menu";
import { RouteConfig } from "./route";

export type Module = {
  key: string;
  name?: string;
  menus?: Array<Menu>;
  routes: Array<RouteConfig>;
}

export type ModuleSetup = <T = Config>(config?: T) => Module;
