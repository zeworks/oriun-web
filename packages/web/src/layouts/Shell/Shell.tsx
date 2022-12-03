import { useSession } from "@/context/Session";
import { theme } from "@oriun/ui";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "./components/Header";
import { ShellLoading } from "./components/ShellLoading/ShellLoading";
import { Menu } from "./components/Menu";

const Container = theme.styled("main", {
  marginLeft: "250px",
  marginTop: "4.7rem",
  position: "relative",
  minHeight: "100vh",
  background: "$light"
})

const Root = theme.styled("div", {
  backgroundColor: "$light",
})

export default function Shell() {
  const { session, checkAuthentication } = useSession()
  const navigate = useNavigate()

  // in case of not logged in, should be redirected to the login screen
  useEffect(() => {
    if (!checkAuthentication() && !session?.loading)
      return navigate("/login")
  }, [checkAuthentication])

  if (checkAuthentication() && session?.loading)
    return <ShellLoading />

  return (
    <Root>
      <Header />
      <div className="d-flex">
        <Menu />
        <Container className="container-fluid">
          <Outlet context="app" />
        </Container>
      </div>
    </Root>
  )
}
