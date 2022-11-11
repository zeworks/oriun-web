import React, { Ref } from 'react'
import { styled } from '@stitches/react'
import { InputCSS } from '../../../styles/input'

export const StyledInput = styled('input', InputCSS);

export interface InputProps extends React.InputHTMLAttributes<any> {
  ref?: Ref<any>
}

export function Input(props: InputProps) {
  return (
    <StyledInput {...props} />
  )
}
