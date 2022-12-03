import { HTMLAttributes, PropsWithChildren } from "react"
import { DropdownItemCSS } from "../../styles/dropdown";
import theme from "../../theme"

const StyledDropdownItem = theme.styled("div", DropdownItemCSS);

export type DropdownItemProps = PropsWithChildren<HTMLAttributes<any>>

export function DropdownItem(props: DropdownItemProps) {
  return (
    <StyledDropdownItem {...props} />
  )
}
