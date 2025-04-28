import { useState } from 'react'
import { Meta, StoryFn } from '@storybook/react'
import Modal from './index'
import Button from '../../atoms/button'

export default {
  component: Modal,
} as Meta

const Template: StoryFn<typeof Modal> = (args) => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <Modal {...args} open={open} setOpen={setOpen}>
        <div>content</div>
      </Modal>
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {}
