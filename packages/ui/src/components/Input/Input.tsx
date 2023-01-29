import React, { ChangeEvent, Ref, useCallback } from 'react'
import { styled } from '@stitches/react'
import { InputCSS } from '../../styles/input'

export const StyledInput = styled('input', InputCSS);

type InputHTMLAttributes = Pick<React.InputHTMLAttributes<any>, "disabled" | "required" | "value" | "id" | "className" | "onBlur" | "onFocus" | "placeholder">

export interface InputProps extends InputHTMLAttributes {
  innerRef?: Ref<any>;
  name: string;
  type: string;
  onChange?: (value: string, name: string, valid: boolean) => void;
}

export function Input({ name, onChange, innerRef, ...props }: InputProps) {

  const onInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const valid = e.target.validity.valid || false;
    onChange?.(value, name, valid)
  }, [name, onChange])

  return (
    <StyledInput name={name} onChange={onInputChange} ref={innerRef} {...props} />
  )
}
