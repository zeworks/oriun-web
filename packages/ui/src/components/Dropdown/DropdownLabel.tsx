import { PropsWithChildren, useCallback } from "react";
import { DropdownLabelCSS } from "../../styles/dropdown";
import theme from "../../theme";

const StyledDropdownLabel = theme.styled("div", DropdownLabelCSS)

export function DropdownLabel(props: PropsWithChildren<any>) {

  const onClick = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation(), [])

  return (
    <StyledDropdownLabel onClick={onClick} {...props} />
  )
}
