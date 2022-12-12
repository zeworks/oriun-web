import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { RadioButton as RadioButtonComponent } from './RadioButton';

export default {
  title: 'Form/RadioButton',
  component: RadioButtonComponent,
  args: {
    label: "Label component here",
  },
  argTypes: {
    variant: {
      control: "select", options: ["default", "rounded"]
    }
  }
} as ComponentMeta<typeof RadioButtonComponent>;

export const RadioButton = (args: any) => {
  return (
    <React.Fragment>
      <RadioButtonComponent name="inputname" value="value-1" {...args} />
      <br />
      <RadioButtonComponent name="inputname" value="value-2" {...args} defaultChecked />
      <br />
      <RadioButtonComponent {...args} disabled />
      <br />
      <RadioButtonComponent {...args} defaultChecked disabled />
    </React.Fragment>
  )
}
