import { Config } from "@/domain/config"
import { useCore } from "@oriun/core"
import { Module } from "@oriun/core/lib/domain/module"
import { theme } from "@oriun/ui"
import { useMemo, useState } from "react"
import { MenuModule } from "./MenuModule"
import { NavLink } from "react-router-dom"

const Root = theme.styled("div", {
  height: "100%",
  width: "300px",
  backgroundColor: "$white",
  userSelect: "none",
  overflow: "hidden",
  padding: "13px 16px",
  boxShadow: "$primary",

  ".logo": {
    display: "block",
    margin: "0 0 16px 16px"
  }
})

export function Menu() {
  const { config } = useCore()

  //get the modules with available menus array
  const modules = useMemo<Module[]>(() => (config as Config).modules?.filter(module => !!module.menus?.length) || [], []);

  return (
    <Root>
      <NavLink to="/" className="logo">
        <img src="/logo.svg" alt="logo" />
      </NavLink>
      {modules?.map(module =>
        <MenuModule
          key={module.key}
          data={module}
        />
      )}
    </Root>
  )
}
