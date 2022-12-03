import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CoreProvider } from '@oriun/core'
import { RouteConfig } from './config/route'
import { SessionProvider } from './context/Session'
import { routes } from './routes'
import { ShellLoading } from './layouts/Shell/components/ShellLoading/ShellLoading'

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
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <CoreProvider>
    <SessionProvider>
      <React.Suspense fallback={<ShellLoading />}>
        <BrowserRouter>
          <Routes>
            {routes.map(buildAppRoutes)}
          </Routes>
        </BrowserRouter>
      </React.Suspense>
    </SessionProvider>
  </CoreProvider>
)
