import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import CustomButton from './index'

export default {
  component: CustomButton,
} as Meta

const Template: StoryFn<typeof CustomButton> = (args) => {
  return (
    <CustomButton  {...args} />
  )
}

export const Default = Template.bind({})
Default.args = {}


