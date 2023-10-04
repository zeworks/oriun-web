import { useSession } from "@/context/Session"
import { LoginForm, FormData } from "../components/LoginForm"
import { useNavigate } from "react-router-dom"
import Styles from "./styles"
import { useCreateAuthentication } from "@oriun/sdk/lib/services/authentication"
import { useEffect } from "react"

export default function Login() {
	const { mutateAsync: execute, error, reset } = useCreateAuthentication()
	const navigate = useNavigate()
	const { setAuthenticationToken, checkAuthentication } = useSession()

	async function onSubmitLogin(data: FormData) {
		const result = await execute(data)

		reset()

		if (result.session?.accessToken) {
			setAuthenticationToken(result.session.accessToken)
		}
	}

	// if there is some error shown, should reset the form, after 5 seconds
	useEffect(() => {
		if (error) {
			const timeout = setTimeout(() => {
				reset()
			}, 5000)

			return () => clearTimeout(timeout)
		}
	}, [error])

	// if logged, redirect the user to the home screen
	useEffect(() => {
		if (checkAuthentication()) {
			navigate("/")
		}
	}, [checkAuthentication])

	return (
		<Styles.Root>
			<div className="container">
				<div className="row">
					<div className="col-6 offset-3">
						<Styles.FormWrapper>
							<Styles.Logo>
								<span>o</span>riun
							</Styles.Logo>
							<LoginForm showRememberMe onSubmit={onSubmitLogin} />
						</Styles.FormWrapper>
					</div>
				</div>
			</div>
		</Styles.Root>
	)
}
