import { theme } from "oriun-ui";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";

const Root = theme.styled("main", {
  marginLeft: "250px",
  marginTop: "4rem",
  position: "relative",
  zIndex: 1,
  height: "200vh",
  padding: "1.5rem 0 0 1.5rem",
  background: "$primaryTransparent"
})

export default function MainLayout() {
  return (
    <>
      <Header />
      <div className="d-flex flex-column flex-fill justify-content-start">
        <Menu />
        <Root>
          <Outlet context="app" />
        </Root>
      </div>
    </>
  )
}
