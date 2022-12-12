import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { ButtonIcon as ButtonIconComponent } from './ButtonIcon';
import { Icon } from '../Icon';

export default {
  title: 'Form/Button Icon',
  component: ButtonIconComponent,
  args: {
    variant: "primary",
    icon: "home"
  },
  argTypes: {
    variant: { control: 'radio', options: ["primary", "secondary", "link"] },
    size: { control: 'select', options: ["small", "medium", "large"] },
    rounded: { control: 'boolean', options: [true, false] },
  }
} as ComponentMeta<typeof ButtonIconComponent>;

export const ButtonIcon = (args: any) => {
  return (
    <ButtonIconComponent {...args}>
      {args.icon && (<Icon>check</Icon>)}
    </ButtonIconComponent>
  )
}
