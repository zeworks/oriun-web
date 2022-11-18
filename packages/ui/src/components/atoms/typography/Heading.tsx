import { styled } from "@stitches/react";
import { FC, PropsWithChildren } from "react";
import { HeadingCSS } from "../../../styles/typography";
import type * as Stitches from "@stitches/react";

export type HeadingProps = PropsWithChildren<Stitches.VariantProps<typeof HeadingCSS>> & {
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
}

const StyledHeading: FC<HeadingProps> = styled("h2", HeadingCSS);

export function Heading({
  children,
  as = "h2",
  variant = "xl",
  ...props
}: HeadingProps) {
  return (
    <StyledHeading
      as={as}
      variant={variant}
      {...props}
    >
      {children}
    </StyledHeading>
  )
}
