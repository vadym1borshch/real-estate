import { useState } from 'react'
import { Meta, StoryFn } from '@storybook/react'
import Dropdown from './index'

export default {
  component: Dropdown,
} as Meta

const Template: StoryFn<typeof Dropdown> = (args) => {
  const [open, setOpen] = useState(false)
  return (
    <Dropdown {...args} open={open} setOpen={setOpen}>
      <div>Element</div>
    </Dropdown>
  )
}

export const Default = Template.bind({})
Default.args = {
  label: 'Dropdown',
}

export const filled = Template.bind({})
filled.args = {
  label: 'Dropdown',
  variant: 'filled',
}

export const outlined = Template.bind({})
outlined.args = {
  label: 'Dropdown',
  variant: 'outlined',
}

export const withIcon = Template.bind({})
withIcon.args = {
  label: 'Dropdown',
  withIcon: true,
}
