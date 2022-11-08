import { ComponentMeta } from '@storybook/react';
import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, Text, TextSmall } from "."

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Typography',
} as ComponentMeta<typeof Heading1>;

export const Typography = (args: any) => {
  return (
    <>
      <Heading1 children="Heading 1" {...args} />
      <Heading2 children="Heading 2" {...args} />
      <Heading3 children="Heading 3" {...args} />
      <Heading4 children="Heading 4" {...args} />
      <Heading5 children="Heading 5" {...args} />
      <Heading6 children="Heading 6" {...args} />
      <hr />
      <Text children="Text Component" />
      <TextSmall children="Text Small Component" />
    </>
  )
}
