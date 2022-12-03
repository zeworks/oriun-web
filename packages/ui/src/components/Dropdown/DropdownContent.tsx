import React from "react"
import { PropsWithChildren } from "react";
import { DropdownContentCSS } from "../../styles/dropdown";
import theme from "../../theme";

const StyledDropdownContent = theme.styled("div", DropdownContentCSS);

export type DropdownContentProps = {
  active?: boolean;
  position?: "left" | "right" | "center"
}

export function DropdownContent({ active, position = "center", ...props }: PropsWithChildren<DropdownContentProps>) {
  if (!active) return null;

  return (
    <StyledDropdownContent variant={position} {...props} />
  )
}
