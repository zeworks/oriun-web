import React from "react"
import { ComponentMeta } from "@storybook/react"
import { Text as TextComponent } from "../components/Text/Text"

export const ExtraExtraLarge = (args: any) => {
	return (
		<>
			<TextComponent size={"xxlarge"} {...args} />
		</>
	)
}

export const ExtraLarge = (args: any) => {
	return (
		<>
			<TextComponent size={"xlarge"} {...args} />
		</>
	)
}

export const Large = (args: any) => {
	return (
		<>
			<TextComponent size={"large"} {...args} />
		</>
	)
}

export const Normal = (args: any) => {
	return (
		<>
			<TextComponent size={"normal"} {...args} />
		</>
	)
}

export const Small = (args: any) => {
	return (
		<>
			<TextComponent size={"small"} {...args} />
		</>
	)
}

export const ExtraSmall = (args: any) => {
	return (
		<>
			<TextComponent size={"xsmall"} {...args} />
		</>
	)
}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Typography/Text",
	component: Normal,
	args: {
		children: "Text here...",
		weight: "regular",
		color: "dark",
	},
	argTypes: {
		color: {
			control: "select",
			options: ["grey", "dark", "danger"],
		},
		as: {
			control: "select",
			options: ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span"],
		},
		weight: {
			control: "select",
			options: ["thin", "light", "regular", "medium", "bold"],
		},
	},
} as ComponentMeta<typeof TextComponent>
