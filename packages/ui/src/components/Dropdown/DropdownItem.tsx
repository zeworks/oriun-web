import React, { HTMLAttributes, PropsWithChildren, useCallback } from "react"
import { DropdownItemCSS } from "../../styles/dropdown";
import theme from "../../theme"

const StyledDropdownItem = theme.styled("div", DropdownItemCSS);

export type DropdownItemProps = PropsWithChildren<HTMLAttributes<any>>

export function DropdownItem(props: DropdownItemProps) {

  const onClick = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation(), [])

  return (
    <StyledDropdownItem onClick={onClick} {...props} />
  )
}
