import { VariantProps } from "@stitches/react"
import { FC, PropsWithChildren } from "react"
import { DatatableColumnCSS } from "../../styles/datatable"
import theme from "../../theme"

const StyledDatatableColumn = theme.styled("td", DatatableColumnCSS)
type StyledDatatableColumnProps = VariantProps<typeof StyledDatatableColumn>

export interface DatatableColumnProps extends StyledDatatableColumnProps {}

export const DatatableColumn: FC<PropsWithChildren> = ({ children }) => {
	return <StyledDatatableColumn>{children}</StyledDatatableColumn>
}
