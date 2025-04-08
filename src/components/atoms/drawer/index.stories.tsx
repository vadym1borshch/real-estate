import { Meta, StoryFn } from '@storybook/react'
import Drawer from './index'
import { useState } from 'react'
import Button from '../button'

export default {
  component: Drawer,
} as Meta

const Template: StoryFn<typeof Drawer> = (args) => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <Button onClick={() => setOpen(true)}>OPEN</Button>
      <Drawer {...args} open={open} setOpen={setOpen}>
        <Button onClick={() => setOpen(false)}>CLOSE</Button>
        <div>CONTENT</div>
      </Drawer>
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {}
