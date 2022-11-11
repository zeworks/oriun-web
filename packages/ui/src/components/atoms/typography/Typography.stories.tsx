import React from "react"
import { ComponentMeta } from '@storybook/react';
import { Heading } from "./Heading"
import { Text, TextSmall } from "./Text"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Typography',
} as ComponentMeta<typeof Heading>;

export const Typography = (args: any) => {
  return (
    <>
      <Heading as="h1" variant={"2xl"} children="Heading 1" {...args} />
      <Heading as="h2" variant={"xl"} children="Heading 2" {...args} />
      <Heading as="h3" variant="lg" children="Heading 3" {...args} />
      <Heading as="h4" variant="md" children="Heading 4" {...args} />
      <Heading as="h5" variant="sm" children="Heading 5" {...args} />
      <Heading as="h6" variant="xs" children="Heading 6" {...args} />
      <hr />
      <Text children="Text Component" />
      <TextSmall children="Text Small Component" />
    </>
  )
}
