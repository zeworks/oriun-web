import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Button as ButtonComponent } from './Button';
import { Icon } from '../Icon';

export default {
  title: 'Form/Button',
  component: ButtonComponent,
  args: {
    label: "Button Text",
    variant: "primary",
    icon: false,
    disabled: false
  },
  argTypes: {
    variant: { control: 'radio', options: ["primary", "secondary", "link"] },
    icon: { name: "icon", control: 'boolean', options: [true, false] }
  }
} as ComponentMeta<typeof ButtonComponent>;

export const Button = (args: any) => {
  return (
    <ButtonComponent {...args}>
      {args.icon && (<Icon>check</Icon>)}
    </ButtonComponent>
  )
}
