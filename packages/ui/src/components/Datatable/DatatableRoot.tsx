import * as Stitches from "@stitches/react"
import { FC, PropsWithChildren } from "react"
import { DatatableRootCSS } from "../../styles/datatable"
import theme from "../../theme"

const StyledDatatableRoot = theme.styled("div", DatatableRootCSS)
type StyledDatatableRootProps = Stitches.VariantProps<
	typeof StyledDatatableRoot
>

export interface DatatableRootProps
	extends PropsWithChildren,
		StyledDatatableRootProps {}

export const DatatableRoot: FC<DatatableRootProps> = ({
	children,
	...props
}) => {
	return <StyledDatatableRoot {...props}>{children}</StyledDatatableRoot>
}
