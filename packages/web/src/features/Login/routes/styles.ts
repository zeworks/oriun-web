import { theme } from "@oriun/ui"

const Root = theme.styled("div", {
	display: "flex",
	height: "100vh",
	width: "100%",
	backgroundColor: "$white",
	alignItems: "center",
	justifyContent: "center",
})

const FormWrapper = theme.styled("div", {
	width: "100%",
})

const Logo = theme.styled("span", {
	fontSize: "48px",
	fontWeight: "$bold",
	display: "inline-block",

	"@bpLG": {
		margin: "0 0 50px",
	},

	"@bpSM": {
		margin: "0 0 30px",
	},

	span: {
		color: "$primary",
	},
})

export default {
	FormWrapper,
	Root,
	Logo,
}
