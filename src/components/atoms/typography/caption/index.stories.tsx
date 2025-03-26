import { Meta, StoryFn } from '@storybook/react'
import Caption from './index'

export default {
  component: Caption,
} as Meta

const Template: StoryFn<typeof Caption> = (args) => {
  return (
    <Caption {...args} />
  )
}

export const Default = Template.bind({})
Default.args = {
  text: 'text',
}




