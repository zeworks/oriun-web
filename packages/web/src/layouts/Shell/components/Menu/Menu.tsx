import { theme } from "oriun-ui"

const Root = theme.styled("div", {
  height: "calc(100% - 4rem)",
  width: "250px",
  backgroundColor: "$white",
  position: "fixed",
  top: "4rem",
  left: 0,
  zIndex: 100,
  pointerEvents: "none",
  userSelect: "none",
  overflow: "hidden",
  borderRight: "1px solid rgba(0, 0, 0, 0.1)",
})

export function Menu() {
  return (
    <Root>Menu Component</Root>
  )
}
