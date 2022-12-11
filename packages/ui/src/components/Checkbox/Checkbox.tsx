import React, { ChangeEvent, HTMLAttributes, Ref } from "react";
import { useCallback } from "react";
import { CheckboxTextCSS, CheckboxRootCSS, CheckboxInputCSS } from "../../styles/checkbox"
import theme from "../../theme"
import { Text } from "../Text";
import type * as Stitches from "@stitches/react"

type CheckboxHTMLAttributes = Pick<HTMLInputElement, "disabled" | "required" | "id" | "className" | "checked" | "value">;

type CheckboxVariants = Stitches.VariantProps<typeof StyledInput>

export type CheckboxProps = CheckboxVariants & CheckboxHTMLAttributes & {
  /** checkbox name */
  name: string;
  /** checkbox element ref */
  innerRef?: Ref<any>
  /** checkbox label, using text or component */
  label?: React.ReactElement | string;
  /** checkbox on change fn */
  onChange: (value: string, name: string, valid?: boolean) => void;
}

const StyledRoot = theme.styled("label", CheckboxRootCSS);
const StyledText = theme.styled(Text, CheckboxTextCSS);
const StyledInput = theme.styled("input", CheckboxInputCSS);

function Component({ label, className, id, disabled, onChange, innerRef, name, ...props }: CheckboxProps) {

  const onChangeCheckbox = useCallback((e: ChangeEvent<HTMLInputElement>) => {
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
        onChange={onChangeCheckbox}
        name={name}
        type="checkbox"
        {...props}
      />
      {label
        ? <StyledText size="normal" as="span">{label}</StyledText>
        : null
      }
    </StyledRoot>
  )
}
export const Checkbox = React.forwardRef<any, CheckboxProps>((props, ref) => <Component innerRef={ref} {...props} />)
