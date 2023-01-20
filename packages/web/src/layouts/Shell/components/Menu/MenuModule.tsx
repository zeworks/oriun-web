import { Menu } from "@oriun/core/lib/domain/menu";
import { Module } from "@oriun/core/lib/domain/module";
import { PropsWithChildren, useCallback } from "react";
import { NavLink } from "react-router-dom";

export interface MenuModuleProps {
  data: Module;
}

interface MenuModuleItemProps {
  data: Menu
}

function MenuModuleItem({ data, children }: PropsWithChildren<MenuModuleItemProps>) {
  return (
    <li>
      <NavLink to={data.path}>{data.name}</NavLink>
      {children}
    </li>
  )
}

export function MenuModule({ data }: MenuModuleProps) {

  const loadMenu = useCallback((menu: Menu) => {
    const hasChildMenu = !!menu.children?.length;

    return (
      <MenuModuleItem
        key={menu.path || menu.name}
        data={menu}
      >
        {hasChildMenu ? <ul>{menu.children?.map(loadMenu)}</ul> : null}
      </MenuModuleItem>
    )
  }, [])

  return (
    <ul>
      {data.menus?.map(loadMenu)}
    </ul>
  )
}
