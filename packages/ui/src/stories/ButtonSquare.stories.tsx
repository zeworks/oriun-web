import React from "react"
import { Meta } from "@storybook/react"
import {
	ButtonSquare as ButtonSquareComponent,
	ButtonSquareProps,
} from "../components/ButtonSquare/ButtonSquare"
import { Icon } from "../components/Icon"

export default {
	title: "Form/Button Square",
	component: ButtonSquareComponent,
	args: {
		variant: "primary",
		rounded: false,
		disabled: false,
	},
	argTypes: {
		variant: {
			control: "radio",
			options: ["primary", "secondary", "outlined"],
		},
		size: { control: "select", options: ["small", "medium", "large"] },
		rounded: { control: "boolean", options: [true, false] },
	},
} as Meta<ButtonSquareProps>

export const ButtonSquare = (args: any) => {
	return (
		<ButtonSquareComponent {...args}>
			<Icon variant="icons">search</Icon>
		</ButtonSquareComponent>
	)
}
