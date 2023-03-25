import theme from "../theme"

const DEFAULT_PADDING_ROW = "12px 16px"
const DEFAULT_BORDER_STYLE = "1px solid rgba($borders$color, $borders$opacity)"

export const DatatableHeaderCSS = theme.css({})

export const DatatableHeaderItemCSS = theme.css({
	padding: DEFAULT_PADDING_ROW,
	borderBottom: DEFAULT_BORDER_STYLE,
	textAlign: "left",
})

export const DatatableTitleCSS = theme.css({
	padding: "24px 16px",
	backgroundColor: "$white",
})

export const DatatableBodyCSS = theme.css({})

export const DatatablePaginationCSS = theme.css({
	padding: "16px",
	display: "flex",
	justifyContent: "flex-end",
	alignItems: "center",
	maxWidth: "350px",
	width: "100%",
})

export const DatatableRowCSS = theme.css({
	height: "3.25rem",

	"&:last-child td": {
		border: "none",
	},
})

export const DatatableColumnCSS = theme.css({
	textAlign: "left",
	borderBottom: DEFAULT_BORDER_STYLE,
	padding: DEFAULT_PADDING_ROW,
})

export const DatatableRootCSS = theme.css({
	margin: 0,
	width: "100%",
	backgroundColor: "$white",
	overflow: "hidden",
	border: DEFAULT_BORDER_STYLE,
	borderRadius: 6,
	boxShadow: "$secondary",

	variants: {
		highlightOnHover: {
			true: {
				[`& tbody tr:hover`]: {
					backgroundColor: "rgba(1, 1, 1, 0.02)",
				},
			},
		},
	},
})

export const DatatableTableCSS = theme.css({
	borderSpacing: 0,
	margin: 0,
	width: "100%",
	overflow: "hidden",
	backgroundColor: "$white",
})

export const DatatableDividerCSS = theme.css({
	height: "1px",
	width: "100%",
	borderTop: DEFAULT_BORDER_STYLE,
})

export const DatatableCounterCSS = theme.css({
	padding: 16,
})
