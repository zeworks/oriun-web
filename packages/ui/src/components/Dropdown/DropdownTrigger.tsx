import { theme } from "oriun-ui";
import { cloneElement, PropsWithChildren, useMemo } from "react";
import { DropdownTriggerCSS } from "../../styles/dropdown";

const StyledDropdownTrigger = theme.styled("div", DropdownTriggerCSS)

export type DropdownTriggerProps = {
  onClick?: () => void;
}

export function DropdownTrigger({ onClick, children }: PropsWithChildren<DropdownTriggerProps>) {
  if (!children) return null;

  const renderChildren = useMemo(() => cloneElement(children as any, { onClick }), [children, onClick]);

  return (
    <StyledDropdownTrigger>
      {renderChildren}
    </StyledDropdownTrigger>
  )
}
