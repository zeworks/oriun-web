import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { DropdownRoot } from './DropdownRoot';
import { DropdownTrigger } from './DropdownTrigger';
import { DropdownContent } from './DropdownContent';
import { DropdownSeparator } from './DropdownSeparator';
import { DropdownLabel } from './DropdownLabel';
import { DropdownItem } from './DropdownItem';
import { Button } from '../Button/Button';

export default {
  title: 'Overlay/Dropdown',
  component: DropdownRoot,
  args: {
    active: false,
    position: "left"
  },
  argTypes: {
    active: { name: "active", control: 'boolean', options: [true, false] },
    position: { name: "position", control: 'select', options: ["left", "right", "center"] },
  }
} as ComponentMeta<typeof DropdownRoot>;

export const Dropdown = (args: any) => {
  return (
    <DropdownRoot>
      <DropdownTrigger>
        <Button>click on me</Button>
      </DropdownTrigger>
      <DropdownContent position={args.position}>
        <DropdownLabel>label</DropdownLabel>
        <DropdownItem>testde 1</DropdownItem>
        <DropdownItem>testde 2</DropdownItem>
        <DropdownSeparator />
        <DropdownLabel>label</DropdownLabel>
        <DropdownItem>testde 1</DropdownItem>
        <DropdownItem>testde 2</DropdownItem>
        <DropdownItem>testde 3</DropdownItem>
      </DropdownContent>
    </DropdownRoot>
  )
}
