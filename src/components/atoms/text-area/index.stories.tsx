import { Meta, StoryFn } from '@storybook/react'
import TextArea from './index'
import { useState } from 'react'

export default {
  component: TextArea,
} as Meta

const Template: StoryFn<typeof TextArea> = (args) => {
  const [query, setQuery] = useState('')
  return (
    <TextArea
      {...args}
      value={query}
      onChange={(e) => setQuery(e.currentTarget.value)}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  label: 'label',
}

export const Error = Template.bind({})
Error.args = {
  error: 'error',
  label: 'label',
}
