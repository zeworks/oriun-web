import { styled } from '@stitches/react';
import React, { Ref, useState } from 'react'
import { Input as BaseInput, InputProps } from '../../atoms/input'
import { Label as BaseLabel } from '../../atoms/label';
import { pxToRem } from '../../../utils/rem';
import { Icon as BaseIcon, IconProps } from '../../atoms/icon';

//#region styles
// override label styles
const StyledLabel = styled(BaseLabel, {
  marginBottom: "12px"
})

// override icon styles
const StyledIconOverride = styled(BaseIcon, {
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
const StyledInput = styled(BaseInput, {
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

const StyledActionWrapper = styled("div", {
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  width: "45px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
})

const StyledText = styled('div', {
  margin: '4px 0 0'
})

const StyledInputIconWrapper = styled('div', {
  position: "relative",
  display: "flex",
})

const StyledWrapper = styled('div', {
  display: "flex",
  flexDirection: "column"
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

  return (
    <StyledWrapper>
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
          onBlur={() => setFocus(false)}
          onFocus={() => setFocus(true)}
          hasIcon={!!icon}
          hasAction={!!action}
          ref={innerRef}
          {...props}
        />
        {action && <StyledActionWrapper>{action}</StyledActionWrapper>}
      </StyledInputIconWrapper>
      {text && <StyledText>{text}</StyledText>}
    </StyledWrapper>
  )
}

export const InputField = React.forwardRef<any, InputFieldProps>((props, ref) => <Input innerRef={ref} {...props} />)
