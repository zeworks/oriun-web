import { styled } from '@stitches/react';
import React, { PropsWithChildren } from 'react'
import theme from '../../../theme';
import { pxToRem } from '../../../utils/rem';

const StyledButton = styled('button', {
  border: 'none',
  outline: "none",
  color: theme.theme.colors.dark,
  fontFamily: theme.theme.fonts.primary,
  padding: '8px 16px',
  borderRadius: theme.theme.borderRadius.primary,
  fontSize: pxToRem(15),
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "40px",

  '& svg, & i': {
    margin: "0 0 0 4px",
  },

  '&:not(:disabled)': {
    cursor: 'pointer',
  },

  '&:disabled': {
    opacity: "0.5",
    cursor: "not-allowed"
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: theme.theme.colors.primary,
        color: theme.theme.colors.white,
        transition: "box-shadow 0.1s ease",

        '&:hover': {
          boxShadow: `0 8px 25px -8px ${theme.theme.colors.primary}`
        }
      },
      secondary: {
        backgroundColor: theme.theme.colors.secondary,
        color: theme.theme.colors.white,
        transition: "box-shadow 0.1s ease",

        '&:hover': {
          boxShadow: `0 8px 25px -8px ${theme.theme.colors.secondary}`
        }
      }
    }
  }
})

export interface ButtonProps extends PropsWithChildren<Pick<React.ButtonHTMLAttributes<any>, "onClick" | "disabled">> {
  label?: string;
  variant?: "primary" | "secondary",
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


<Button />
