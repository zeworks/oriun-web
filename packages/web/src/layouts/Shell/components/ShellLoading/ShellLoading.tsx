import { theme } from "@oriun/ui"

const Root = theme.styled("div", {
	position: "fixed",
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	height: "100%",
	backgroundColor: "$white",
	zIndex: 200,
	color: "rgba($dark)",

	display: "flex",
	alignItems: "center",
	justifyContent: "center",
})

export function ShellLoading() {
	return <Root>Oriun loading...</Root>
}
