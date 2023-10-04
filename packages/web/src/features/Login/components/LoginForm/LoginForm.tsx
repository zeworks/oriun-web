import React, { useCallback, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { InputField } from "@oriun/ui/lib/components/InputField"
import { Button } from "@oriun/ui/lib/components/Button"
import { EMAIL_REGEX_PATTERN } from "@/config/constants"
import { TextSmallError } from "@/components/TextSmallError"
import { Icon } from "@oriun/ui/lib/components/Icon"
import { theme } from "@oriun/ui"
import { Link } from "react-router-dom"

const HoverableIcon = theme.styled(Icon, {
	"&:hover": {
		cursor: "pointer",
		color: "$primary",
	},
})

const ButtonSubmit = theme.styled(Button, {
	display: "flex",
	width: "100%",
	marginBottom: "30px",
	"&&": {
		fontSize: "17px",
		minHeight: "50px",
		textTransform: "uppercase",
		fontWeight: theme.theme.fontWeights.medium,
	},
})

const ButtonRecoverPassword = theme.styled(Link, {
	color: theme.theme.colors.dark,
	textDecoration: "none",
	margin: "0 auto",

	"&:hover": {
		color: theme.theme.colors.primary,
	},
})

export interface FormData {
	email: string
	password: string
}

interface Props {
	onSubmit: (data: FormData) => void
	showRememberMe?: boolean
}

export function LoginForm({ onSubmit, showRememberMe }: Props) {
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<FormData>({ mode: "onChange" })
	const [inputType, setInputType] = useState<"text" | "password">("password")

	const onFormSubmit = useCallback(
		handleSubmit(async (data) => {
			onSubmit(data)
		}),
		[onSubmit]
	)

	const toggleInputType = () =>
		setInputType(inputType === "password" ? "text" : "password")

	return (
		<form onSubmit={onFormSubmit}>
			<Controller
				name="email"
				control={control}
				rules={{
					required: {
						value: true,
						message: "Campo Obrigatório",
					},
					pattern: {
						value: EMAIL_REGEX_PATTERN,
						message: "Email invalido",
					},
				}}
				render={({ field }) => (
					<InputField
						{...field}
						text={<TextSmallError>{errors?.email?.message}</TextSmallError>}
						type="email"
						label="Email"
						placeholder="Insira o email"
					/>
				)}
			/>
			<Controller
				name="password"
				control={control}
				rules={{
					required: {
						value: true,
						message: "Campo obrigatório",
					},
				}}
				render={({ field }) => (
					<InputField
						{...field}
						type={inputType}
						label="Password"
						placeholder="Insira a password"
						text={<TextSmallError>{errors?.email?.message}</TextSmallError>}
						action={
							<HoverableIcon variant="symbols" onClick={toggleInputType}>
								{inputType === "password" ? "visibility" : "visibility_off"}
							</HoverableIcon>
						}
					/>
				)}
			/>
			<ButtonSubmit label="Entrar" className="w-100" onClick={onFormSubmit} />
			{showRememberMe && (
				<ButtonRecoverPassword to={"/reset"}>
					Esqueceu-se da password?
				</ButtonRecoverPassword>
			)}
		</form>
	)
}
