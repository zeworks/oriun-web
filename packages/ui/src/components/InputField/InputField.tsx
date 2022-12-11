import React, { Ref, useState } from 'react'
import { Input as BaseInput, InputProps } from '../Input'
import { Label as BaseLabel } from '../Label';
import { pxToRem } from '../../utils/rem';
import { Icon as BaseIcon, IconProps } from '../Icon';
import theme from '../../theme';
import { useCallback } from 'react';

//#region styles
// override label styles
const StyledLabel = theme.styled(BaseLabel, {
  marginBottom: "12px",
})

// override icon styles
const StyledIconOverride = theme.styled(BaseIcon, {
  position: "absolute",
  left: 4,
  top: "50%",
  fontSize: pxToRem(21),
  transform: "translateY(-50%)",
  color: "$grey",

  variants: {
    isFocus: {
      true: {
        color: "$primary"
      }
    }
  }
});

// override input styles
const StyledInput = theme.styled(BaseInput, {
  variants: {
    hasIcon: {
      true: {
        paddingLeft: '30px',

        '&:focus::placeholder': {
          paddingLeft: 0
        }
      }
    },
    hasAction: {
      true: {
        paddingRight: "45px"
      }
    }
  }
})

const StyledActionWrapper = theme.styled("div", {
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  width: "45px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  userSelect: "none"
})

const StyledText = theme.styled('div', {
  margin: '4px 0 0'
})

const StyledInputIconWrapper = theme.styled('div', {
  position: "relative",
  display: "flex",
})

const Root = theme.styled('div', {
  display: "flex",
  flexDirection: "column",
  marginBottom: "25px"
})
//#endregion

export interface InputFieldProps extends InputProps {
  label?: string;
  icon?: string;
  /**
   * @default "rounded"
   */
  iconStyle?: IconProps["style"];
  /**
   * @default "icons"
   */
  iconVariant?: IconProps["variant"];
  /**
   * ### input action
   * 
   * it will be placed at the right side of the input.
   * you can use it to add an Element to make actions on it, inside input field
   * @returns JSX Element
   */
  action?: React.ReactElement;
  /**
   * ### input text
   * 
   * it will be placed at the bottom of the input.
   * you can use it to show error messages, etc.
   * @returns JSX.Element
   */
  text?: React.ReactElement;
  /** input element ref */
  innerRef?: Ref<any>
}

const Input = ({ label, icon, iconStyle = "rounded", iconVariant = "icons", action, text, innerRef, ...props }: InputFieldProps) => {
  const [isFocus, setFocus] = useState(false);

  const toggleFocus = useCallback(() => setFocus(!isFocus), [isFocus]);

  return (
    <Root>
      {label && (<StyledLabel text={label} />)}
      <StyledInputIconWrapper>
        {icon && (
          <StyledIconOverride
            isFocus={isFocus}
            style={iconStyle}
            variant={iconVariant}
            children={icon}
          />
        )}
        <StyledInput
          onBlur={toggleFocus}
          onFocus={toggleFocus}
          hasIcon={!!icon}
          hasAction={!!action}
          ref={innerRef}
          {...props}
        />
        {action && <StyledActionWrapper>{action}</StyledActionWrapper>}
      </StyledInputIconWrapper>
      {text && <StyledText>{text}</StyledText>}
    </Root>
  )
}

export const InputField = React.forwardRef<any, InputFieldProps>((props, ref) => <Input innerRef={ref} {...props} />)
