import theme from "../theme"
import { pxToRem } from "../utils/rem"

export const ButtonSquareCSS = theme.css({
	border: "none",
	outline: "none",
	color: "rgba($dark)",
	borderRadius: "6px",
	fontSize: pxToRem(15),
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",

	"& svg, & i": {
		fontSize: "20px",
	},

	"&:not(:disabled)": {
		cursor: "pointer",
	},

	"&:disabled": {
		opacity: "0.5",
		cursor: "not-allowed",
	},

	variants: {
		size: {
			small: {
				width: "35px",
				height: "35px",
			},
			medium: {
				width: "40px",
				height: "40px",

				"& svg, & i": {
					fontSize: "22px",
				},
			},
			large: {
				width: "50px",
				height: "50px",

				"& svg, & i": {
					fontSize: "27px",
				},
			},
		},
		variant: {
			primary: {
				backgroundColor: "$primary",
				color: "$white",
				transition: "background-color 0.1s ease",

				"&:not(:disabled):hover": {
					backgroundColor: "rgb(101, 91, 211)",
				},
			},
			secondary: {
				backgroundColor: "$secondary",
				color: "$white",
				transition: "background-color 0.1s ease",

				"&:not(:disabled):hover": {
					backgroundColor: "rgb(148, 150, 153)",
				},
			},
			outlined: {
				backgroundColor: "transparent",
				border: "1px solid rgba(115, 103, 240, 0.5)",
				color: "$primary",
				transition: "border 0.1s ease",

				"&:not(:disabled):hover": {
					border: `1px solid rgb(115, 103, 240)`,
				},
			},
		},
		rounded: {
			true: {
				borderRadius: "100%",
			},
		},
	},

	defaultVariants: {
		size: "medium",
		variant: "primary",
		rounded: false,
	},
})
