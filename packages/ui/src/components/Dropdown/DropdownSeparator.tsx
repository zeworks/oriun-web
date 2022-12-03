import { PropsWithChildren, useCallback } from "react";
import { DropdownSeparatorCSS } from "../../styles/dropdown";
import theme from "../../theme";

const StyledDropdownSeparator = theme.styled("div", DropdownSeparatorCSS)

export function DropdownSeparator(props: PropsWithChildren<any>) {

  const onClick = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation(), [])

  return (
    <StyledDropdownSeparator onClick={onClick} {...props} />
  )
}
