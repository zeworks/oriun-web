import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CoreProvider } from "@oriun/core"
import { SessionProvider } from "./context/Session"
import { routes } from "./routes"
import { ShellLoading } from "./layouts/Shell/components/ShellLoading/ShellLoading"
import { RouteConfig } from "@oriun/core/lib/domain/route"
import DashboardModule from "./features/Dashboard"
import { QueryClient, QueryClientProvider } from "react-query"

const modules = [DashboardModule].map((m) => m())

function buildAppRoutes(route: RouteConfig) {
	return (
		<Route
			key={route.path || route.component}
			path={route.path}
			element={<route.component />}
			caseSensitive={route.exact}
			index={route.index as any}
		>
			{!!route.children?.length && route.children.map(buildAppRoutes)}
		</Route>
	)
}

function setupAppRoutes() {
	const routesList: RouteConfig[] = routes
	const appRoutes = routesList?.find((route) => route.context === "app")

	modules.forEach((module) => {
		// inject every module route into the app routes context
		appRoutes?.children?.push(...module.routes)
	})

	return routesList.map(buildAppRoutes)
}

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<CoreProvider
		config={{
			modules,
		}}
	>
		<QueryClientProvider client={queryClient}>
			<SessionProvider>
				<React.Suspense fallback={<ShellLoading />}>
					<BrowserRouter>
						<Routes>{setupAppRoutes()}</Routes>
					</BrowserRouter>
				</React.Suspense>
			</SessionProvider>
		</QueryClientProvider>
	</CoreProvider>
)
