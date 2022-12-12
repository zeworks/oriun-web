import React, { ChangeEvent, Ref, useCallback } from 'react'
import { RadioButtonInputCSS, RadioButtonRootCSS, RadioButtonTextCSS } from '../../styles/radiobutton';
import theme from '../../theme';
import { Text } from '../Text';

type RadioButtonHTMLAttributes = Pick<HTMLInputElement, "disabled" | "required" | "id" | "className" | "checked" | "value">;

export type RadioButtonProps = RadioButtonHTMLAttributes & {
  /** RadioButton name */
  name: string;
  /** RadioButton element ref */
  innerRef?: Ref<any>
  /** RadioButton label, using text or component */
  label?: React.ReactElement | string;
  /** RadioButton on change fn */
  onChange: (value: string, name: string, valid?: boolean) => void;
}

const StyledRoot = theme.styled("label", RadioButtonRootCSS);
const StyledText = theme.styled(Text, RadioButtonTextCSS);
const StyledInput = theme.styled("input", RadioButtonInputCSS);

function Component({
  label,
  className,
  id,
  disabled,
  onChange,
  innerRef,
  name,
  ...props
}: RadioButtonProps) {

  const onChangeRadioButton = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const valid = e.target.validity.valid || false;
    onChange(value, name, valid)
  }, [onChange, name]);

  return (
    <StyledRoot
      disabled={disabled}
      htmlFor={id}
      className={className}
    >
      <StyledInput
        id={id}
        ref={innerRef}
        disabled={disabled}
        onChange={onChangeRadioButton}
        name={name}
        type="radio"
        {...props}
      />
      {label
        ? <StyledText size="normal" as="span">{label}</StyledText>
        : null
      }
    </StyledRoot>
  )
}

export const RadioButton = React.forwardRef<any, RadioButtonProps>((props, ref) => <Component innerRef={ref} {...props} />)
