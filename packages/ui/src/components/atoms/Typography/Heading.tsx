import { styled } from "@stitches/react";
import { PropsWithChildren } from "react";
import { pxToRem } from "../../../utils/rem";

const StyledHeading1 = styled('h1', {
  fontSize: pxToRem(40),
})

const StyledHeading2 = styled('h2', {
  fontSize: pxToRem(35),
})

const StyledHeading3 = styled('h3', {
  fontSize: pxToRem(30),
})

const StyledHeading4 = styled('h4', {
  fontSize: pxToRem(26),
})

const StyledHeading5 = styled('h5', {
  fontSize: pxToRem(22),
})

const StyledHeading6 = styled('h6', {
  fontSize: pxToRem(19),
})

export interface HeadingProps {
  className?: string;
}

export function Heading1({ children, className }: PropsWithChildren<HeadingProps>) {
  return (
    <StyledHeading1 className={className}>{children}</StyledHeading1>
  )
}

export function Heading2({ children, className }: PropsWithChildren<HeadingProps>) {
  return (
    <StyledHeading2 className={className}>{children}</StyledHeading2>
  )
}

export function Heading3({ children, className }: PropsWithChildren<HeadingProps>) {
  return (
    <StyledHeading3 className={className}>{children}</StyledHeading3>
  )
}

export function Heading4({ children, className }: PropsWithChildren<HeadingProps>) {
  return (
    <StyledHeading4 className={className}>{children}</StyledHeading4>
  )
}

export function Heading5({ children, className }: PropsWithChildren<HeadingProps>) {
  return (
    <StyledHeading5 className={className}>{children}</StyledHeading5>
  )
}

export function Heading6({ children, className }: PropsWithChildren<HeadingProps>) {
  return (
    <StyledHeading6 className={className}>{children}</StyledHeading6>
  )
}
