import { Module } from "@oriun/core/lib/domain/module"
import Dashboard from "./Dashboard"
import DashboardTeste from "./DashboardTeste"

export const feature = (config?: any): Module => {
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
