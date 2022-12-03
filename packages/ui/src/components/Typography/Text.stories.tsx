import React from "react"
import { ComponentMeta } from '@storybook/react';
import { Text as TextComponent, TextSmall as TextSmallComponent } from "./Text"

export const Text = (args: any) => {
  return (
    <>
      <TextComponent {...args} />
      <TextSmallComponent {...args} />
    </>
  )
}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: "Text here..."
  }
} as ComponentMeta<typeof Text>;
