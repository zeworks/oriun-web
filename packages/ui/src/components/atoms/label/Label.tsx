import { styled } from "@stitches/react"
import React, { LabelHTMLAttributes, PropsWithChildren } from "react"
import { LabelCSS } from "../../../styles/label"

export interface LabelProps extends LabelHTMLAttributes<any> {
  text?: string,
}

const StyledLabel = styled('label', LabelCSS)

export function Label({ text, children, ...props }: PropsWithChildren<LabelProps>) {
  return (
    <StyledLabel {...props}>{text || children}</StyledLabel>
  )
}
