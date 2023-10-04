import { theme } from "@oriun/ui"
import { Icon } from "@oriun/ui/lib/components/Icon"
import { Text } from "@oriun/ui/lib/components/Text"
import { FC } from "react"

const Root = theme.styled("div", {
	display: "flex",
	alignItems: "center",
})

const Message = theme.styled(Text, {
	color: theme.theme.colors.dark,
})

//#region error message styles
const ErrorIcon = theme.styled(Icon, {
	color: theme.theme.colors.danger,
})

const ErrorMessage = theme.styled(Message, {
	color: theme.theme.colors.danger,
	marginLeft: 6,
})
//#endregion

interface Props {
	type: "error" | "success" | "info" | "default"
	message: string
}

export const MessageFloat: FC<Props> = ({ type, message }) => {
	if (type === "error")
		return (
			<Root>
				<ErrorIcon>error</ErrorIcon>
				<ErrorMessage size="xsmall">{message}</ErrorMessage>
			</Root>
		)

	if (!type || type === "default")
		return (
			<Root>
				<Message size="xsmall">{message}</Message>
			</Root>
		)

	return null
}
