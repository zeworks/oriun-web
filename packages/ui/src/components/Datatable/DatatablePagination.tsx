import { VariantProps } from "@stitches/react"
import { FC } from "react"
import { DatatablePaginationCSS } from "../../styles/datatable"
import theme from "../../theme"
import ReactPagination from "react-responsive-pagination"
import { pxToRem } from "../../utils/rem"

type Pagination = {
	/**
	 * total number of elements
	 */
	total: number
	/**
	 * current page/position selected
	 */
	current: number
	/**
	 * on change fn
	 * @returns the current page/position selected
	 */
	onChange: (page: number) => void
}

const StyledPaginationRoot = theme.styled("div", DatatablePaginationCSS)
const StyledReactPagination = theme.styled(ReactPagination, {
	justifyContent: "center",
	display: "flex",
	paddingLeft: 0,
	listStyle: "none",
	whiteSpace: "nowrap",

	".page-item": {
		margin: "0 2px",

		"&.active .page-link": {
			backgroundColor: "$primary",
			color: "$white",
		},

		"&:not(.active):not(.disabled):not(:first-child):not(:last-child) .page-link:hover":
			{
				backgroundColor: "$primaryTransparent",
				color: "$primary",
			},
	},

	".page-link": {
		color: "$dark",
		textDecoration: "none",
		fontSize: pxToRem(12),

		width: 25,
		height: 25,
		flex: "0 0 25px",

		display: "flex",
		alignItems: "center",
		justifyContent: "center",

		backgroundColor: "transparent",
		borderRadius: "100%",
	},
})

type StyledDatatablePaginationRootProps = VariantProps<
	typeof StyledPaginationRoot
>

export type DatatablePaginationProps = StyledDatatablePaginationRootProps &
	Pagination

export const DatatablePagination: FC<DatatablePaginationProps> = ({
	current,
	total,
	onChange,
}) => {
	return (
		<StyledPaginationRoot>
			<StyledReactPagination
				onPageChange={onChange}
				total={total}
				current={current}
				ariaPreviousLabel={" "}
				ariaNextLabel={" "}
				a11yActiveLabel={" "}
				previousLabel="<"
				nextLabel=">"
			/>
		</StyledPaginationRoot>
	)
}
