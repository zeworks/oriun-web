import { VariantProps } from "@stitches/react"
import React, { FC, useCallback } from "react"
import { DatatableCounterCSS } from "../../styles/datatable"
import theme from "../../theme"
import { Text } from "../Text"

const StyledDatatableCounterRoot = theme.styled("div", DatatableCounterCSS)
const StyledDatatableCounterText = theme.styled(Text, {
	color: "rgba($dark, 0.35)",
})

export interface DatatableCounterProps {
	total?: number
	options: Array<number>
	value?: number
	onChange: (option: number) => void
}

export const DatatableCounter: FC<DatatableCounterProps> = ({
	onChange,
	options,
	value,
	total,
}) => {
	const onSelectOption = useCallback(
		(e: React.ChangeEvent<HTMLSelectElement>) => {
			const value = Number(e.target.value)
			onChange(value)
		},
		[onChange]
	)

	return (
		<StyledDatatableCounterRoot>
			<StyledDatatableCounterText size="xsmall">
				<span>showing </span>
				<select value={value} onChange={onSelectOption}>
					{options.map((o) => (
						<option key={o}>{o}</option>
					))}
				</select>
				<span> of </span>
				<span>{total}</span>
				<span> results</span>
			</StyledDatatableCounterText>
		</StyledDatatableCounterRoot>
	)
}
