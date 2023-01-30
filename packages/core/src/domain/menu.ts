export type Menu = {
  path: string;
  name: string;
  icon?: string;
  enabled?: boolean;
  permissions?: Array<string>;
  children?: Array<Menu>;
}
