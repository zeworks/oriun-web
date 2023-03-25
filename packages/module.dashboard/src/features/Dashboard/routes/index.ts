import { Config } from "@oriun/core/lib/domain/config"
import { Module } from "@oriun/core/lib/domain/module"
import Dashboard from "./Dashboard"

export const feature = (config?: Config): Module => {
  return {
    key: "dashboard-feature",
    routes: [
      {
        component: Dashboard,
        path: "/",
      },
    ],
    menus: [
      {
        name: "Dashboard",
        path: "/",
      },
    ]
  }
}
