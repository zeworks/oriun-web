import { theme } from "@oriun/ui"

const CommonStyles = theme.css({
	width: "40px",
	height: "40px",
	borderRadius: "100%",
	boxShadow: "$primary",
	flex: "0 0 40px",
	backgroundColor: "$primary",
	display: "flex",
	position: "relative",

	"&::before": {
		content: "",
		width: "10px",
		height: "10px",
		borderRadius: "100%",
		border: "2px solid $white",
		position: "absolute",
		bottom: 0,
		right: 0,
	},

	variants: {
		online: {
			true: {
				"&::before": {
					backgroundColor: "$success",
				},
			},
			false: {
				"&::before": {
					backgroundColor: "$secondary",
				},
			},
		},
	},
})

const Text = theme.styled("div", CommonStyles, {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",

	fontSize: "1.1rem",
	fontWeight: "$regular",
	color: "$white",
})

const Image = theme.styled("img", CommonStyles, {
	objectFit: "cover",
})

export type AvatarStatusProps = {
	src?: string
	text?: string
	status: "online" | "offline"
}

export function AvatarStatus({
	src,
	text,
	status = "online",
	...props
}: AvatarStatusProps) {
	if (src) return <Image src={src} {...props} online={status === "online"} />
	if (text) return <Text online={status === "online"}>{text}</Text>
	return null
}
