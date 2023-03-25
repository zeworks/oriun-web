import { VariantProps } from "@stitches/react"
import { FC, PropsWithChildren } from "react"
import { DatatableRowCSS } from "../../styles/datatable"
import theme from "../../theme"

const StyledDatatableRow = theme.styled("tr", DatatableRowCSS)
type StyledDatatableRowProps = VariantProps<typeof StyledDatatableRow>

export interface DatatableRowProps extends StyledDatatableRowProps {}

export const DatatableRow: FC<PropsWithChildren> = ({ children, ...props }) => {
	return <StyledDatatableRow {...props}>{children}</StyledDatatableRow>
}
