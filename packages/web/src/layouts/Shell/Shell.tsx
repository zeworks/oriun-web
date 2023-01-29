import { useSession } from "@/context/Session";
import { theme } from "@oriun/ui";
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "./components/Header";
import { ShellLoading } from "./components/ShellLoading/ShellLoading";
import { Menu } from "./components/Menu";

const Container = theme.styled("div", {
  width: "100%",
  position: "relative",
  height: "100%",
  background: "$light",
  padding: "0 24px",
  maxWidth: 1600
})

const Root = theme.styled("div", {
  backgroundColor: "$light",
  display: "flex",
  height: "100vh",
})

const MainContent = theme.styled("main", {
  padding: "20px 0"
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
      <Menu />
      <Container className="container-fluid">
        <Header />
        <MainContent>
          <Outlet context="app" />
        </MainContent>
      </Container>
    </Root>
  )
}
