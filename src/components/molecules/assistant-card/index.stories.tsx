import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import AssistantCard from './index'
import { assistant } from '../../../common/mock.ts'

export default {
  component: AssistantCard,
} as Meta

const Template: StoryFn<typeof AssistantCard> = (args) => {
  return (
    <AssistantCard {...args} />
  )
}

export const Default = Template.bind({})
Default.args = {
  assistant,
}


