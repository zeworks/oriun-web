import { theme } from "@oriun/ui"

const AvatarStyles = theme.css({
	width: "40px",
	height: "40px",
	borderRadius: "100%",
	boxShadow: "$primary",
	flex: "0 0 40px",
	backgroundColor: "$primary",
	display: "flex",
})

const AvatarText = theme.styled("div", AvatarStyles, {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",

	fontSize: "1.1rem",
	fontWeight: "$regular",
	color: "$white",
})

const AvatarImage = theme.styled("img", AvatarStyles, {
	objectFit: "cover",
})

export type AvatarProps = {
	src?: string
	text?: string
}

export function Avatar({ src, text, ...props }: AvatarProps) {
	if (src) return <AvatarImage src={src} {...props} />
	if (text) return <AvatarText>{text}</AvatarText>
	return null
}
