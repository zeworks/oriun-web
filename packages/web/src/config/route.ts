export type RouteConfig = {
  path?: string;
  component: any;
  index?: boolean;
  exact?: boolean;
  children?: RouteConfig[]
}
