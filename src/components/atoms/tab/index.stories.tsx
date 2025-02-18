import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import Tab from './index'

export default {
  component: Tab,
} as Meta

const Template: StoryFn<typeof Tab> = (args) => {
  return (
    <Tab {...args} />
  )
}

export const Default = Template.bind({})
Default.args = {
  label: 'Tab',
}

export const selected = Template.bind({})
selected.args = {
  label: 'Tab',
  selected: true
}



