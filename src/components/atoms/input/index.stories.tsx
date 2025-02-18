import React, { useState } from 'react'
import { Meta, StoryFn } from '@storybook/react'
import Input from './index'

export default {
  component: Input,
} as Meta

const Template: StoryFn<typeof Input> = (args) => {
  const [value, setValue] = useState('')
  return (
    <Input value={value} onChange={(e) => setValue(e.currentTarget.value)} {...args} />
  )
}

export const Default = Template.bind({})
Default.args = {}

export const small = Template.bind({})
small.args = {
  size: 'sm',
}

export const withIcon = Template.bind({})
withIcon.args = {
  iconId: 'playIcon',
}

export const error = Template.bind({})
error.args = {
  error: 'Something went wrong',
}

export const label = Template.bind({})
label.args = {
  label: 'label',
}

export const placeholder = Template.bind({})
placeholder.args = {
  placeholder: 'placeholder',
}
