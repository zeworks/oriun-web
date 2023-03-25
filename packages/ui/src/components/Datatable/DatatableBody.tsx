import { VariantProps } from "@stitches/react"
import { FC, PropsWithChildren } from "react"
import { DatatableBodyCSS } from "../../styles/datatable"
import theme from "../../theme"

const StyledDatatableBody = theme.styled("tbody", DatatableBodyCSS)
type StyledDatatableBodyProps = VariantProps<typeof StyledDatatableBody>

export interface DatatableBodyProps extends StyledDatatableBodyProps {}

export const DatatableBody: FC<PropsWithChildren<DatatableBodyProps>> = ({
	children,
}) => {
	return <StyledDatatableBody>{children}</StyledDatatableBody>
}
