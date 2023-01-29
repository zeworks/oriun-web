import { RouteConfig } from "@oriun/core/lib/domain/route";
import { routes as errorRoutes } from "@/features/Error"
import { routes as loginRoutes } from "@/features/Login"
import Shell from "@/layouts/Shell/Shell";

export const routes: RouteConfig[] = [
  {
    context: "app",
    path: "/",
    component: Shell,
    children: []
  },
  ...loginRoutes.build(),
  ...errorRoutes.build()
]
