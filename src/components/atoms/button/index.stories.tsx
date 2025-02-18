import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import Button from './index'

export default {
  component: Button,
} as Meta

const Template: StoryFn<typeof Button> = (args) => {
  return (
    <Button  {...args} >
      Button
    </Button>
  )
}

export const Default = Template.bind({})
Default.args = {}

export const witIcon = Template.bind({})
witIcon.args = {
  iconId: 'deleteIcon',
}

export const outlined = Template.bind({})
outlined.args = {
  variant: 'outlined',
}

export const text = Template.bind({})
text.args = {
  variant: 'text',
}

export const iconSide = Template.bind({})
iconSide.args = {
  iconSide: 'left',
  iconId: 'deleteIcon',
}

export const selected = Template.bind({})
selected.args = {
  variant: 'outlined',
  selected: true,
}

