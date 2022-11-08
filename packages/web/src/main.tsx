import GlobalTheme from 'oriun-ui'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RouteConfig } from './config/route'
import { SessionProvider } from './context/SessionContext'
import { routes } from './routes'

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
  <React.StrictMode>
    <GlobalTheme />
    <SessionProvider>
      <React.Suspense fallback={<div>loading ...</div>}>
        <BrowserRouter>
          <Routes>
            {routes.map(buildAppRoutes)}
          </Routes>
        </BrowserRouter>
      </React.Suspense>
    </SessionProvider>
  </React.StrictMode>
)
