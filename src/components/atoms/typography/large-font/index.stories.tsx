import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import LargeFont from './index'

export default {
  component: LargeFont,
} as Meta

const Template: StoryFn<typeof LargeFont> = (args) => {
  return (
    <LargeFont {...args} />
  )
}

export const Default = Template.bind({})
Default.args = {
  text: 'text',
}




