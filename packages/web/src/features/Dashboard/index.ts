import { Module } from "@oriun/core/lib/domain/module"
import Dashboard from "./routes/Dashboard"

export default function DashboardModule(config?: any): Module {
	return {
		key: "feature.dashboard",
		name: "Dashboard",
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
		],
	}
}
