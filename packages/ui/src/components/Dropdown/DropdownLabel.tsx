import { PropsWithChildren } from "react";
import { DropdownLabelCSS } from "../../styles/dropdown";
import theme from "../../theme";

const StyledDropdownLabel = theme.styled("div", DropdownLabelCSS)

export function DropdownLabel(props: PropsWithChildren<any>) {
  return (
    <StyledDropdownLabel {...props} />
  )
}
