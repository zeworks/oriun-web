import { FC, PropsWithChildren } from "react"
import * as Stitches from "@stitches/react"
import theme from "../../theme"
import { DatatableHeaderItemCSS } from "../../styles/datatable"
import { Text } from "../Text"

const StyledDatatableHeaderItem = theme.styled("th", DatatableHeaderItemCSS)
const StyledDatatableHeaderItemText = theme.styled(Text, {
	textTransform: "uppercase",
})

type StyledDatatableHeaderItemProps = Stitches.VariantProps<
	typeof StyledDatatableHeaderItem
>

export interface DatatableHeaderItemProps
	extends StyledDatatableHeaderItemProps {
	width?: string
}

export const DatatableHeaderItem: FC<
	PropsWithChildren<DatatableHeaderItemProps>
> = ({ children, width }) => {
	return (
		<StyledDatatableHeaderItem css={{ width }}>
			<StyledDatatableHeaderItemText size="xsmall" weight="bold">
				{children}
			</StyledDatatableHeaderItemText>
		</StyledDatatableHeaderItem>
	)
}
