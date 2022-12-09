import { HTMLAttributes } from "react";
import { CheckboxRootCSS } from "../../styles/checkbox"
import theme from "../../theme"

export interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
  label?: string
}

const StyledRoot = theme.styled("div", CheckboxRootCSS);

export function Checkbox({ label, className, ...props }: CheckboxProps) {
  return (
    <StyledRoot className={className}>
      <input type="checkbox" {...props} />
      {label ? <span>{label}</span> : null}
    </StyledRoot>
  )
}
