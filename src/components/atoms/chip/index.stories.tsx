import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import Chip from './index'

export default {
  component: Chip,
} as Meta

const Template: StoryFn<typeof Chip> = (args) => {
  return (
    <Chip  {...args} />
  )
}

export const Default = Template.bind({})
Default.args = {
  value: 'Chip',
}
