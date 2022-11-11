import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Button as ButtonComponent } from './Button';
import { Icon } from '../icon';

export default {
  title: 'Atoms/Button',
  component: ButtonComponent,
  args: {
    label: "Button Text",
    variant: "primary",
    icon: false
  },
  argTypes: {
    variant: { control: 'radio', options: ["primary", "secondary"] },
    icon: { name: "icon", control: 'radio', options: [true, false] }
  }
} as ComponentMeta<typeof ButtonComponent>;

export const Button = (args: any) => {
  return (
    <ButtonComponent {...args}>
      {args.icon && (<Icon>check</Icon>)}
    </ButtonComponent>
  )
}
