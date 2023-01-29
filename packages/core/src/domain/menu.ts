export type Menu = {
  path: string;
  name: string;
  icon?: string;
  enabled?: boolean;
  permissions?: Array<string>;
  expandable?: boolean;
  children?: Array<Menu>;
}
