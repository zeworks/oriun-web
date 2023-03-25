import React from "react"
import { ComponentMeta } from "@storybook/react"
import D from "../components/Dropdown"
import { Button } from "../components/Button/Button"

export default {
	title: "Overlay/Dropdown",
	component: D.Root,
	args: {
		active: false,
		position: "left",
	},
	argTypes: {
		active: { name: "active", control: "boolean", options: [true, false] },
		position: {
			name: "position",
			control: "select",
			options: ["left", "right", "center"],
		},
	},
} as ComponentMeta<typeof D.Root>

export const Dropdown = (args: any) => {
	return (
		<D.Root>
			<D.Trigger>
				<Button>click on me</Button>
			</D.Trigger>
			<D.Content position={args.position}>
				<D.Label>label</D.Label>
				<D.Item>testde 1</D.Item>
				<D.Item>testde 2</D.Item>
				<D.Separator />
				<D.Label>label</D.Label>
				<D.Item>testde 1</D.Item>
				<D.Item>testde 2</D.Item>
				<D.Item>testde 3</D.Item>
			</D.Content>
		</D.Root>
	)
}
