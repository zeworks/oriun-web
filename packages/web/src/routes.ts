import { RouteConfig } from "@/config/route";
import { routes as homeRoutes } from "@/features/Home"
import { routes as errorRoutes } from "@/features/Error"
import { routes as loginRoutes } from "@/features/Login"
import MainLayout from "@/layouts/MainLayout/MainLayout";

export const routes: RouteConfig[] = [
  {
    path: "/",
    component: MainLayout,
    children: [
      ...homeRoutes.build(),
    ]
  },
  ...loginRoutes.build(),
  ...errorRoutes.build()
]
