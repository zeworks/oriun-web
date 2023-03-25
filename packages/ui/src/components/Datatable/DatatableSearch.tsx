import { FC } from "react"
import theme from "../../theme"
import { InputField, InputFieldProps } from "../InputField"

const StyledDatatableSearch = theme.styled(InputField, {})

export interface DatatableSearchProps extends InputFieldProps {}

export const DatatableSearch: FC<DatatableSearchProps> = ({ ...props }) => {
	return <StyledDatatableSearch css={{ margin: 0 }} {...props} />
}
