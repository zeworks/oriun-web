import React from "react"
import { ComponentMeta } from "@storybook/react"
import { Switch as SwitchComponent } from "../components/Switch/Switch"

export default {
	title: "Form/Switch",
	component: SwitchComponent,
	args: {
		label: "Label component here",
	},
} as ComponentMeta<typeof SwitchComponent>

export const Switch = (args: any) => {
	return (
		<React.Fragment>
			<SwitchComponent name="inputname" value="1" {...args} />
			<br />
			<SwitchComponent name="inputname" value="2" {...args} defaultChecked />
			<br />
			<SwitchComponent name="inputname" value="3" {...args} disabled />
			<br />
			<SwitchComponent
				name="inputname"
				value="4"
				{...args}
				defaultChecked
				disabled
			/>
		</React.Fragment>
	)
}
