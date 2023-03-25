import { FC, PropsWithChildren } from "react"
import * as Stitches from "@stitches/react"
import theme from "../../theme"
import { DatatableHeaderCSS } from "../../styles/datatable"

const StyledDatatableHeader = theme.styled("thead", DatatableHeaderCSS)

type StyledDatatableHeaderProps = Stitches.VariantProps<
	typeof StyledDatatableHeader
>

export interface DatatableHeaderProps extends StyledDatatableHeaderProps {}

export const DatatableHeader: FC<PropsWithChildren<DatatableHeaderProps>> = ({
	children,
}) => {
	return (
		<StyledDatatableHeader>
			<tr>{children}</tr>
		</StyledDatatableHeader>
	)
}
