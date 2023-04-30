import React, { FC, PropsWithChildren } from "react"
import { DatatableBody } from "./DatatableBody"
import { DatatableRow } from "./DatatableRow"
import { DatatableColumn } from "./DatatableColumn"
import theme from "../../theme"
import { Text } from "../Text"

const StyledColumnError = theme.styled(DatatableColumn, {
	textTransform: "uppercase",
	textAlign: "center",
	padding: "30px 20px",
})

export const DatatableError: FC<PropsWithChildren> = ({ children }) => {
	return (
		<DatatableBody>
			<DatatableRow>
				<StyledColumnError colSpan={40}>
					<Text size="xsmall">{children}</Text>
				</StyledColumnError>
			</DatatableRow>
		</DatatableBody>
	)
}
