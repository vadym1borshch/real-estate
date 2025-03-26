import { Meta, StoryFn } from '@storybook/react'
import Overline from './index'

export default {
  component: Overline,
} as Meta

const Template: StoryFn<typeof Overline> = (args) => {
  return (
    <Overline {...args} />
  )
}

export const Default = Template.bind({})
Default.args = {
  text: 'text',
}




