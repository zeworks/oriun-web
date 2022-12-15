import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { ButtonSquare as ButtonSquareComponent } from './ButtonSquare';
import { Icon } from '../Icon';

export default {
  title: 'Form/Button Square',
  component: ButtonSquareComponent,
  args: {
    variant: "primary",
    rounded: false
  },
  argTypes: {
    variant: { control: 'radio', options: ["primary", "secondary", "outlined"] },
    size: { control: 'select', options: ["small", "medium", "large"] },
    rounded: { control: 'boolean', options: [true, false] },
  }
} as ComponentMeta<typeof ButtonSquareComponent>;

export const ButtonSquare = (args: any) => {
  return (
    <ButtonSquareComponent {...args}>
      <Icon variant='icons'>search</Icon>
    </ButtonSquareComponent>
  )
}
