import React, { useCallback } from "react";
import { SwitchInputCSS, SwitchInputSliderCSS, SwitchInputWrapper, SwitchRootCSS, SwitchTextCSS } from "../../styles/switch";
import theme from "../../theme";
import { Text } from "../Text";

type SwitchHTMLAttributes = Pick<HTMLInputElement, "disabled" | "required" | "id" | "className" | "checked" | "value">;

export type SwitchProps = SwitchHTMLAttributes & {
  /** switch name */
  name: string;
  /** switch element ref */
  innerRef?: React.Ref<any>
  /** switch label, using text or component */
  label?: React.ReactElement | string;
  /** switch on change fn */
  onChange: (value: string, name: string, valid?: boolean) => void;
}

const StyledRoot = theme.styled("label", SwitchRootCSS);
const StyledText = theme.styled(Text, SwitchTextCSS);
const StyledInput = theme.styled("input", SwitchInputCSS);
const StyledInputSlider = theme.styled("div", SwitchInputSliderCSS);
const StyledInputWrapper = theme.styled("div", SwitchInputWrapper);

function Component({ label, className, id, disabled, onChange, innerRef, name, ...props }: SwitchProps) {

  const onInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
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
      <StyledInputWrapper>
        <StyledInput
          id={id}
          ref={innerRef}
          disabled={disabled}
          onChange={onInputChange}
          name={name}
          type="checkbox"
          {...props}
        />
        <StyledInputSlider />
      </StyledInputWrapper>
      {label
        ? <StyledText size="normal" as="span">{label}</StyledText>
        : null
      }
    </StyledRoot>
  )
}

export const Switch = React.forwardRef<any, SwitchProps>((props, ref) => <Component innerRef={ref} {...props} />)
