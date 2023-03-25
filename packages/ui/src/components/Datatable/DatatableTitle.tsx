import { VariantProps } from "@stitches/react"
import { FC, PropsWithChildren } from "react"
import { DatatableTitleCSS } from "../../styles/datatable"
import theme from "../../theme"
import { Text } from "../Text"

const StyledDatatableTitle = theme.styled("div", DatatableTitleCSS)
type StyledDatatableTitleProps = VariantProps<typeof StyledDatatableTitle>

export interface DatatableTitleProps extends StyledDatatableTitleProps {}

export const DatatableTitle: FC<PropsWithChildren> = ({
	children,
	...props
}) => {
	return (
		<StyledDatatableTitle {...props}>
			<Text size="normal">{children}</Text>
		</StyledDatatableTitle>
	)
}
