import { useSession } from "@/context/Session";
import { Heading } from "@oriun/ui/lib/components/Typography";
import { LoginForm, LoginFormData } from "../components/LoginForm";
import { useNavigate } from "react-router-dom"
import Styles from "./styles"
import { useCreateAuthentication } from "@oriun/sdk/lib/services/authentication";
import { useEffect } from "react";

export default function Login() {
  const { mutateAsync: execute } = useCreateAuthentication()
  const navigate = useNavigate();
  const { setAuthenticationToken, checkAuthentication } = useSession();

  async function onSubmitLogin(data: LoginFormData) {
    const result = await execute(data);

    if (result.session?.accessToken) {
      setAuthenticationToken(result.session.accessToken);
    }
  }

  // if loggeod, redirect the user to the home screen
  useEffect(() => {
    if (checkAuthentication()) {
      navigate("/")
    }
  }, [checkAuthentication])

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
                  onSubmit={onSubmitLogin}
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
