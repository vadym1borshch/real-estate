import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import H3 from './index'

export default {
  component: H3,
} as Meta

const Template: StoryFn<typeof H3> = (args) => {
  return (
    <H3 {...args} />
  )
}

export const Default = Template.bind({})
Default.args = {
  text: 'text',
}




