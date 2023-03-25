import React from "react"
import { ComponentMeta } from "@storybook/react"
import { Label as LabelComponent } from "../components/Label/Label"

export default {
	title: "Typography/Label",
	component: LabelComponent,
	args: {
		text: "Label Text",
	},
	argTypes: {
		text: {
			control: "text",
		},
	},
} as ComponentMeta<typeof LabelComponent>

export const Label = (props: any) => {
	return <LabelComponent {...props} />
}
