import React from "react"
import { styled } from "@stitches/react"
import { ComponentMeta } from "@storybook/react"
import { InputField as InputFieldComponent } from "./InputField"
import { Icon } from "../Icon"
import { Text } from "../Text"

export default {
  title: "Form/InputField",
  component: InputFieldComponent,
  args: {
    label: "Label Input field",
    placeholder: "Placeholder text here...",
  },
  argTypes: {
    action: {
      control: false
    }
  }
} as ComponentMeta<typeof InputFieldComponent>

export const InputField = (props: any) => {
  return <InputFieldComponent {...props} />
}

export const InputFieldWithAction = (props: any) => {
  return <InputFieldComponent action={
    <Icon
      onClick={() => alert("clicked")}
    >
      visibility
    </Icon>
  } {...props} />
}

export const InputFieldWithIcon = (props: any) => {
  return <InputFieldComponent icon="check" {...props} />
}

const StyledErrorText = styled(Text, {
  color: "$danger"
})

export const InputFieldWithText = (props: any) => {
  return <InputFieldComponent text={<StyledErrorText size={"small"} children="this is my small text" />} {...props} />
}
