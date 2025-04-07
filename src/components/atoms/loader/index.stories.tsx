import { Meta, StoryFn } from '@storybook/react'
import { Loader } from './index'

export default {
  component: Loader,
} as Meta

const Template: StoryFn<typeof Loader> = (args) => {
  return <Loader {...args} />
}

export const Default = Template.bind({})
Default.args = {}

export const Sized = Template.bind({})
Sized.args = {
  size: 80,
}

export const Colored = Template.bind({})
Colored.args = {
  color: 'red',
}
