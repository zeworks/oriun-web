import type * as Stitches from '@stitches/react';
import React, { FC, PropsWithChildren } from 'react'
import { ButtonIconCSS } from '../../styles/buttonIcon';
import theme from '../../theme';
import { Icon } from '../Icon';

const StyledButton = theme.styled('button', ButtonIconCSS)

export type ButtonIconProps =
  Pick<React.ButtonHTMLAttributes<any>, "onClick" | "disabled" | "className"> &
  Stitches.VariantProps<typeof ButtonIconCSS> & {
    icon: React.ReactElement | string;
  }

export function ButtonIcon({
  variant = "primary",
  size = "medium",
  rounded = false,
  ...props
}: ButtonIconProps) {
  return (
    <StyledButton
      variant={variant}
      size={size}
      rounded={rounded}
    >
      {typeof props.icon === "string"
        ? <Icon>{props.icon}</Icon>
        : props.icon
      }
    </StyledButton>
  )
}
