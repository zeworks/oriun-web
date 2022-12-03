import React from "react"
import { ComponentMeta } from '@storybook/react';
import { Heading as HeadingComponent } from "./Heading"

export const Heading = (args: any) => {
  return (
    <>
      <HeadingComponent as="h1" variant={"2xl"} {...args} />
      <HeadingComponent as="h2" variant={"xl"} {...args} />
      <HeadingComponent as="h3" variant="lg" {...args} />
      <HeadingComponent as="h4" variant="md" {...args} />
      <HeadingComponent as="h5" variant="sm" {...args} />
      <HeadingComponent as="h6" variant="xs" {...args} />
    </>
  )
}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: "Heading text here..."
  }
} as ComponentMeta<typeof Heading>;
