import { theme } from "oriun-ui"

const Root = theme.styled("div", {
  height: "4rem",
  position: "fixed",
  left: 0,
  width: "100%",
  borderBottom: "1px solid $grey",
  zIndex: 200
});

export function Header() {
  return (
    <Root>
      Header Component</Root>
  )
}
