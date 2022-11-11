import type * as Stitches from '@stitches/core';
import { styled } from '@stitches/react';
import React, { FC, PropsWithChildren } from 'react'
import { ButtonCSS } from '../../../styles/button';

const StyledButton: FC<ButtonProps> = styled('button', ButtonCSS)

export type ButtonProps =
  PropsWithChildren<Pick<React.ButtonHTMLAttributes<any>, "onClick" | "disabled">> &
  Stitches.VariantProps<typeof ButtonCSS> & {
    label?: string;
  }

export function Button({
  label,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <StyledButton
      variant={variant}
      {...props}
    >
      <span>{label}</span>
      {props.children}
    </StyledButton>
  )
}
