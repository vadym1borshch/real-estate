import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import SmallFont from './index'

export default {
  component: SmallFont,
} as Meta

const Template: StoryFn<typeof SmallFont> = (args) => {
  return (
    <SmallFont {...args} />
  )
}

export const Default = Template.bind({})
Default.args = {
  text: 'text',
}




