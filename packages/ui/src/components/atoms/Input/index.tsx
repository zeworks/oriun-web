import React, { Ref } from 'react'
import { styled } from '@stitches/react'
import { pxToRem } from '../../../utils/rem'
import theme from '../../../theme'

const StyledInput = styled('input', {
  padding: "12px 16px",
  fontSize: pxToRem(16),
  color: "$dark",
  outline: "none",
  border: "1px solid $grey",
  borderRadius: "6px",
  minHeight: "30px",
  fontWeight: "300",
  fontFamily: theme.theme.fonts.primary,
  width: "100%",

  '&:focus': {
    borderColor: "$primary",
    boxShadow: theme.theme.shadows.secondary,

    '&::placeholder': {
      paddingLeft: "6px"
    }
  },

  '&::placeholder': {
    color: "$grey",
    transition: "padding-left .2s ease-in",
  }
})

export interface InputProps extends React.InputHTMLAttributes<any> {
  ref?: Ref<any>
}

export function Input(props: InputProps) {
  return (
    <StyledInput {...props} />
  )
}
