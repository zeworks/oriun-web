import React, { PropsWithChildren } from "react";
import { TextCSS } from "../../styles/typography";
import theme from "../../theme";
import type * as Stitches from "@stitches/react";

const StyledText = theme.styled('span', TextCSS);

export interface TextProps extends Stitches.VariantProps<typeof TextCSS> {
  className?: string;
}

export function Text({ children, className, ...props }: PropsWithChildren<TextProps>) {
  return <StyledText className={className} {...props}>{children}</StyledText>
}
