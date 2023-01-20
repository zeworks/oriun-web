export type RouteConfig = {
  context?: string;
  path?: string;
  component: any;
  index?: boolean;
  exact?: boolean;
  children?: RouteConfig[]
}
