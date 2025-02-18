import React, { useState } from 'react'
import { Meta, StoryFn } from '@storybook/react'
import Accordion from './index'

export default {
  component: Accordion,
} as Meta

const Template: StoryFn<typeof Accordion> = (args) => {
  const [open, setOpen] = useState(false)
  return (
    <Accordion open={open} setOpen={setOpen}  {...args}>
      You can append elements as well
    </Accordion>
  )
}

export const Default = Template.bind({})
Default.args = {
  label: 'Accordion',
}


