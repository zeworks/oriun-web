import { styled } from "@stitches/react"
import { ComponentMeta } from "@storybook/react"
import { InputField as InputFieldComponent } from "./index"
import { Icon } from "../../atoms/Icon"
import { TextSmall } from "../../atoms/Typography"

export default {
  title: "Molecules/InputField",
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
  return <InputFieldComponent action={<Icon onClick={() => alert("clicked")}>visibility</Icon>} {...props} />
}

const StyledErrorText = styled(TextSmall, {
  color: "$danger"
})

export const InputFieldWithText = (props: any) => {
  return <InputFieldComponent text={<StyledErrorText children="this is my small text" />} {...props} />
}
