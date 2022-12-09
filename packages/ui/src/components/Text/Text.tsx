import React, { PropsWithChildren } from "react";
import { TextCSS } from "../../styles/text";
import theme from "../../theme";
import type * as Stitches from "@stitches/react";

const StyledText = theme.styled('span', TextCSS);

export interface TextProps extends Stitches.VariantProps<typeof TextCSS> {
  className?: string;
  /** @default p */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span",
}

export function Text({ children, className, as = "p", ...props }: PropsWithChildren<TextProps>) {
  return <StyledText as={as} className={className} {...props}>{children}</StyledText>
}
