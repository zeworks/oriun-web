import { RouteConfig } from "@/config/route";
import { routes as homeRoutes } from "@/features/Home"
import { routes as errorRoutes } from "@/features/Error"
import { routes as loginRoutes } from "@/features/Login"
import Shell from "@/layouts/Shell/Shell";

export const routes: RouteConfig[] = [
  {
    path: "/",
    component: Shell,
    children: [
      ...homeRoutes.build(),
    ]
  },
  ...loginRoutes.build(),
  ...errorRoutes.build()
]
