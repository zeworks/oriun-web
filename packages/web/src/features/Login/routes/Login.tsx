import { useSession } from "@/context/Session";
import { Heading, Text } from "@oriun/ui/lib/components/Typography";
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
        <Styles.Logo><span>o</span>riun</Styles.Logo>
        <Heading as="h1" variant="lg">Log in</Heading>
        <Text className="mb-5">Continue to Oriun</Text>
        <LoginForm
          showRememberMe
          onSubmit={onSubmitLogin}
        />
      </Styles.FormWrapper>
    </Styles.Root>
  )
}
