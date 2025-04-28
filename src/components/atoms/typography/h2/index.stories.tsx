import { Meta, StoryFn } from '@storybook/react'
import H2 from './index'

export default {
  component: H2,
} as Meta

const Template: StoryFn<typeof H2> = (args) => {
  return <H2 {...args} />
}

export const Default = Template.bind({})
Default.args = {
  text: 'text',
}
