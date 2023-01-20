import { Config } from "@/domain/config"
import { useCore } from "@oriun/core"
import { Module } from "@oriun/core/lib/domain/module"
import { theme } from "@oriun/ui"
import { useMemo } from "react"
import { MenuModule } from "./MenuModule"

const Root = theme.styled("div", {
  height: "calc(100% - 65px)",
  width: "250px",
  backgroundColor: "$white",
  position: "fixed",
  top: "65px",
  left: 0,
  zIndex: 100,
  userSelect: "none",
  overflow: "hidden",
  borderRight: "1px solid rgba(0, 0, 0, 0.1)",
})

export function Menu() {
  const { config } = useCore()

  //get the modules with available menus array
  const modules = useMemo<Module[]>(() => (config as Config).modules?.filter(module => !!module.menus?.length) || [], []);

  return (
    <Root>
      menu component
      {modules?.map(module =>
        <MenuModule
          key={module.key}
          data={module}
        />
      )}
    </Root>
  )
}
