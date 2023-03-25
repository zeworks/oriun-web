import theme from "../theme"
import { pxToRem } from "../utils/rem"

export const InputCSS = theme.css({
	padding: "12px 16px",
	fontSize: pxToRem(14),
	color: "rgba($dark)",
	outline: "none",
	border: "1px solid $grey",
	borderRadius: "6px",
	minHeight: "30px",
	fontWeight: "300",
	fontFamily: "$primary",
	width: "100%",
	backgroundColor: "$white",

	"&:focus": {
		borderColor: "$primary",
		boxShadow: "$secondary",

		"&::placeholder": {
			paddingLeft: "6px",
		},
	},

	"&::placeholder": {
		color: "$grey",
		transition: "padding-left .1s ease",
	},
})
