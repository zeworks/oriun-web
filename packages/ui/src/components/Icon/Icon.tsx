import { styled } from '@stitches/react';
import classNames from 'classnames'
import React, { HTMLAttributes, PropsWithChildren } from 'react'
import { IconCSS } from '../../styles/icon';

export const StyledIcon = styled('i', IconCSS)

export type IconProps = Pick<HTMLAttributes<any>, "onClick"> & {
  /**
   * these icons are from material icons
   * - docs (Material Icons): https://fonts.google.com/icons?icon.platform=web&icon.set=Material+Icons,
   * - docs (Material Symbols): https://fonts.google.com/icons?icon.platform=web&icon.set=Material+Symbols
   * 
   * @default variant - icons
   */
  variant?: "icons" | "symbols"
  /**
   * icon style
   * 
   * Note: style "filled" only works with variant "icons"
   * 
   * @default style - outlined
   */
  style?: "outlined" | "filled" | "rounded"
  className?: string;
}

export function Icon({ variant = "icons", style = "outlined", children, className, ...props }: PropsWithChildren<IconProps>) {
  const isIconsOutlined = variant === "icons" && style === "outlined";
  const isIconsRounded = variant === "icons" && style === "rounded";
  const isIconsFilled = variant === "icons" && style === "filled";
  const isSymbolsOutlined = variant === "symbols" && style === "outlined";
  const isSymbolsRounded = variant === "symbols" && style === "rounded";

  return (
    <StyledIcon
      className={classNames({
        "material-icons-outlined": isIconsOutlined,
        "material-icons": isIconsFilled,
        "material-icons-round": isIconsRounded,
        "material-symbols-rounded": isSymbolsRounded,
        "material-symbols-outlined": isSymbolsOutlined,
      }, className)}
      {...props}
    >{children}</StyledIcon>
  )
}
