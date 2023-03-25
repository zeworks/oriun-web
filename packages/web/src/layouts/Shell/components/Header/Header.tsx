import { theme } from "@oriun/ui"
import { Icon } from "@oriun/ui/lib/components/Icon"
import Dropdown from "@oriun/ui/src/components/Dropdown"
import React from "react"
import { DropdownUser } from "./components/DropdownUser"

const RootInner = theme.styled("div", {
	position: "relative",
	width: "100%",
	backgroundColor: "$white",
	display: "flex",
	alignItems: "center",
	height: "65px",
	padding: "0 16px",
	borderRadius: "6px",
	boxShadow: "$primary",
})

const Root = theme.styled("header", {
	width: "100%",
	position: "sticky",
	top: "0",
	zIndex: 101,
	paddingTop: "15px",

	"&::before": {
		content: "",
		backgroundColor: "white",
		position: "absolute",
		width: "calc(100% + 24px)",
		height: "100%",
		padding: "10px 10px 0",
		filter: "blur(4px) opacity(0.8)",

		left: "-24px",
		top: "-10px",
	},
})

export function Header() {
	const searchRef = React.useRef<HTMLInputElement>(null)

	function onSearchSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		console.log("search value", searchRef.current?.value)
	}

	return (
		<Root>
			<RootInner>
				<div className="flex-fill d-flex justify-content-between">
					<div className="d-flex align-items-center">
						<form className="d-flex flex-fill" onSubmit={onSearchSubmit}>
							{/* search input here */}
						</form>
					</div>
					<div className="d-flex align-items-center">
						<Dropdown.Root className="me-3">
							<Dropdown.Trigger>
								<Icon style="filled">notifications</Icon>
							</Dropdown.Trigger>
							<Dropdown.Content position="right">
								<Dropdown.Item>teste de notifications</Dropdown.Item>
							</Dropdown.Content>
						</Dropdown.Root>
						<DropdownUser />
					</div>
				</div>
			</RootInner>
		</Root>
	)
}
