import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import H1 from './index'

export default {
  component: H1,
} as Meta

const Template: StoryFn<typeof H1> = (args) => {
  return (
    <H1 {...args} />
  )
}

export const Default = Template.bind({})
Default.args = {
  text: 'text',
}




