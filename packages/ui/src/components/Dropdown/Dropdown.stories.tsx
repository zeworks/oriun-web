import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { DropdownRoot } from './DropdownRoot';
import { DropdownTrigger } from './DropdownTrigger';
import { DropdownContent } from './DropdownContent';

export default {
  title: 'Overlay/Dropdown',
  component: DropdownRoot,
  args: {
    active: false
  },
  argTypes: {
    active: { name: "active", control: 'boolean', options: [true, false] }
  }
} as ComponentMeta<typeof DropdownRoot>;

export const Dropdown = (args: any) => {
  return (
    <DropdownRoot>
      <DropdownTrigger>
        <span>ola</span>
      </DropdownTrigger>
      <DropdownContent>
        <span>testde</span>
      </DropdownContent>
    </DropdownRoot>
  )
}
