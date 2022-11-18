import { theme } from "oriun-ui"

const Root = theme.styled("div", {
  height: "calc(100% - 4rem)",
  width: "250px",
  background: "red",
  position: "fixed",
  top: "4rem",
  left: 0,
  zIndex: 200,
  pointerEvents: "none",
  userSelect: "none",
  overflow: "hidden",
})

export function Menu() {
  return (
    <Root>Menu Component</Root>
  )
}
