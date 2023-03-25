import React from "react"
import { ComponentMeta } from "@storybook/react"
import { Checkbox as CheckboxComponent } from "../components/Checkbox/Checkbox"

export default {
	title: "Form/Checkbox",
	component: CheckboxComponent,
	args: {
		label: "Label component here",
	},
	argTypes: {
		variant: {
			control: "select",
			options: ["default", "rounded"],
		},
	},
} as ComponentMeta<typeof CheckboxComponent>

export const Checkbox = (args: any) => {
	return (
		<React.Fragment>
			<CheckboxComponent {...args} />
			<br />
			<CheckboxComponent {...args} defaultChecked />
			<br />
			<CheckboxComponent {...args} disabled />
			<br />
			<CheckboxComponent {...args} defaultChecked disabled />
		</React.Fragment>
	)
}
