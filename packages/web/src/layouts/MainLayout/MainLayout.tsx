import { SessionProvider } from "@/context/SessionContext";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <main>
      <Outlet context="app" />
    </main>
  )
}
