import { styled } from "@stitches/react"
import React, { LabelHTMLAttributes, PropsWithChildren } from "react"
import { pxToRem } from "../../../utils/rem"
import theme from "../../../theme"

export interface LabelProps extends LabelHTMLAttributes<any> {
  text?: string,
}

const StyledLabel = styled('label', {
  fontWeight: theme.theme.fontWeights.bold,
  textTransform: "uppercase",
  fontSize: pxToRem(13)
})

export function Label({ text, children, ...props }: PropsWithChildren<LabelProps>) {
  return (
    <StyledLabel {...props}>{text || children}</StyledLabel>
  )
}
