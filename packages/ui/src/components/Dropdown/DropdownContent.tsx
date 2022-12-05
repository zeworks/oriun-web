import React from "react"
import { PropsWithChildren } from "react";
import { DropdownContentCSS } from "../../styles/dropdown";
import theme from "../../theme";

const StyledDropdownContent = theme.styled("div", DropdownContentCSS);

export type DropdownContentProps = {
  /** @default active - false */
  active?: boolean;
  /** @default position - "center" */
  position?: "left" | "right" | "center"
}

export function DropdownContent({ active = false, position = "center", ...props }: PropsWithChildren<DropdownContentProps>) {
  return (
    <StyledDropdownContent active={active} variant={position} {...props} />
  )
}
