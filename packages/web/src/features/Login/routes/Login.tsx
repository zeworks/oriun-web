import { useSession } from "@/context/SessionContext";
import { LoginForm } from "../components/LoginForm";

export default function Login() {
  const { setAuthToken, session, logout } = useSession()

  return (
    <div>
      <LoginForm
        onSuccess={(data) => setAuthToken(data.accessToken!)}
        onError={logout}
      />
      {session?.email && <div>{session.email}</div>}
    </div>
  )
}
