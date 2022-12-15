import type * as Stitches from '@stitches/react';
import React, { PropsWithChildren } from 'react'
import { ButtonSquareCSS } from '../../styles/buttonSquare';
import theme from '../../theme';
import { Icon, IconProps } from '../Icon';

const StyledButton = theme.styled('button', ButtonSquareCSS)

export type ButtonSquareProps =
  PropsWithChildren<
    Pick<React.ButtonHTMLAttributes<any>, "onClick" | "disabled" | "className"> &
    Stitches.VariantProps<typeof ButtonSquareCSS>
  >

export function ButtonSquare({
  variant = "primary",
  size = "medium",
  rounded = false,
  ...props
}: ButtonSquareProps) {
  return (
    <StyledButton
      variant={variant}
      size={size}
      rounded={rounded}
      {...props}
    >
      {props.children}
    </StyledButton>
  )
}
