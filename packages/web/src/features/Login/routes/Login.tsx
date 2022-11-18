import { useSession } from "@/context/SessionContext";
import { Heading } from "oriun-ui/lib/components/atoms/typography";
import { useEffect } from "react";
import { LoginForm } from "../components/LoginForm";
import { useNavigate } from "react-router-dom"
import Styles from "./styles"

export default function Login() {
  const navigate = useNavigate()

  function onLoginSuccess() {
    navigate("/")
  }

  function onLoginError(error: any) {
    console.error(error);
  }

  // if logged, redirect the user to the dashboard page
  // TODO: add if on future
  // useEffect(() => {
  //   if (session) {
  //     navigate("/")
  //   }
  // }, [session])

  return (
    <Styles.Root>
      <Styles.FormWrapper>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 offset-lg-1">
              <Styles.Logo><span>o</span>riun</Styles.Logo>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center flex-fill">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-10 offset-lg-1">
                <Heading className="mb-5" as="h1" variant="2xl">Bem-vindo ao Oriun!</Heading>
                <LoginForm
                  showRememberMe
                  onSuccess={onLoginSuccess}
                  onError={onLoginError}
                />
              </div>
            </div>
          </div>
        </div>
      </Styles.FormWrapper>
      <Styles.Greetings>
        <h1>teste</h1>
      </Styles.Greetings>
    </Styles.Root>
  )
}
