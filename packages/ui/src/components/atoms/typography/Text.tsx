import { styled } from "@stitches/react";
import React, { PropsWithChildren } from "react";
import { pxToRem } from "../../../utils/rem";

const StyledText = styled('span', {
  fontSize: pxToRem(16),
  display: "block"
})

const StyledTextSmall = styled('span', {
  fontSize: pxToRem(13),
  display: "block"
})

export interface TextProps {
  className?: string;
}

export function Text({ children, className }: PropsWithChildren<TextProps>) {
  return <StyledText className={className}>{children}</StyledText>
}

export function TextSmall({ children, className }: PropsWithChildren<TextProps>) {
  return <StyledTextSmall className={className}>{children}</StyledTextSmall>
}
