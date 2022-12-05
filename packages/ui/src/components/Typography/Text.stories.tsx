import React from "react"
import { ComponentMeta } from '@storybook/react';
import { Text as TextComponent } from "./Text"

export const Normal = (args: any) => {
  return (
    <>
      <TextComponent variant={"normal"} {...args} />
    </>
  )
}

export const Small = (args: any) => {
  return (
    <>
      <TextComponent variant={"small"} {...args} />
    </>
  )
}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Typography/Text',
  component: Normal,
  args: {
    children: "Text here...",
  }
} as ComponentMeta<typeof TextComponent>;
