import { VariantProps } from "@stitches/react"
import {
	FC,
	PropsWithChildren,
	TableHTMLAttributes,
	TdHTMLAttributes,
} from "react"
import { DatatableColumnCSS } from "../../styles/datatable"
import theme from "../../theme"

const StyledDatatableColumn = theme.styled("td", DatatableColumnCSS)
type StyledDatatableColumnProps = VariantProps<typeof StyledDatatableColumn>

export interface DatatableColumnProps
	extends StyledDatatableColumnProps,
		TdHTMLAttributes<any> {}

export const DatatableColumn: FC<PropsWithChildren<DatatableColumnProps>> = ({
	children,
	...props
}) => {
	return <StyledDatatableColumn {...props}>{children}</StyledDatatableColumn>
}
