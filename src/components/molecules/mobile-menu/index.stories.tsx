import { Meta, StoryFn } from '@storybook/react'
import MobileMenu from './index'
import { useState } from 'react'

export default {
  component: MobileMenu,
} as Meta

const Template: StoryFn<typeof MobileMenu> = (args) => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <div className="hidden md:block">Please make the screen smaller.</div>
      <MobileMenu {...args} open={open} setOpen={setOpen} />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {}
