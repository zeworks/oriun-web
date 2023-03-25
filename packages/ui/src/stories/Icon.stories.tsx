import React from "react"
import { ComponentMeta } from "@storybook/react"
import { Icon as IconComponent } from "../components/Icon/Icon"

export function Icon(props: any) {
	return <IconComponent {...props}>{props.children}</IconComponent>
}

export default {
	title: "Other/Icon",
	component: Icon,
	args: {
		children: "check",
		variant: "icons",
		style: "rounded",
	},
	argTypes: {
		children: {
			name: "icon",
			control: "select",
			options: ["check", "home"],
		},
		variant: {
			control: "radio",
			options: ["icons", "symbols"],
		},
		style: {
			control: "radio",
			options: ["filled", "rounded", "outlined"],
		},
	} as any,
} as ComponentMeta<typeof IconComponent>
