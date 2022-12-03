import { PropsWithChildren } from "react";
import { DropdownSeparatorCSS } from "../../styles/dropdown";
import theme from "../../theme";

const StyledDropdownSeparator = theme.styled("div", DropdownSeparatorCSS)

export function DropdownSeparator(props: PropsWithChildren<any>) {
  return (
    <StyledDropdownSeparator {...props} />
  )
}
