import { Meta, StoryFn } from '@storybook/react'
import DropdownInput from './index'
import { useState } from 'react'

export default {
  component: DropdownInput,
} as Meta

const Template: StoryFn<typeof DropdownInput> = (args) => {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  return (
    <DropdownInput
      {...args}
      setOpen={setOpen}
      open={open}
      inputValue={query}
      setInputValue={setQuery}
    >
      <div
        onClick={(e) => {
          setOpen(false)
          setQuery(e.currentTarget.innerText)
        }}
      >
        item
      </div>
    </DropdownInput>
  )
}

export const Default = Template.bind({})
Default.args = {}
