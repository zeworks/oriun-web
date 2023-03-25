import * as Stitches from "@stitches/react"
import { FC, PropsWithChildren } from "react"
import { DatatableTableCSS } from "../../styles/datatable"
import theme from "../../theme"

const StyledDatatableTable = theme.styled("table", DatatableTableCSS)
type StyledDatatableTableProps = Stitches.VariantProps<
	typeof StyledDatatableTable
>

export interface DatatableTableProps
	extends PropsWithChildren,
		StyledDatatableTableProps {}

export const DatatableTable: FC<DatatableTableProps> = ({
	children,
	...props
}) => {
	return <StyledDatatableTable {...props}>{children}</StyledDatatableTable>
}
