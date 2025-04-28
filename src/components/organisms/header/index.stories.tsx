import { Meta, StoryFn } from '@storybook/react'
import Header from './index'

export default {
  component: Header,
} as Meta

const Template: StoryFn<typeof Header> = (args) => {
  return <Header {...args} />
}

export const Default = Template.bind({})
Default.args = {}
