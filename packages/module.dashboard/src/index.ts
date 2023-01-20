import { Module } from "@oriun/core/lib/domain/module";
import { setup as dashboardSetup } from "./features/Dashboard";

export default function DashboardModule(config?: any): Module {
  return {
    key: "module.dashboard",
    name: "Dashboard",
    routes: [
      ...dashboardSetup.feature(config).routes
    ],
    menus: [
      ...dashboardSetup.feature(config).menus
    ]
  }
}
