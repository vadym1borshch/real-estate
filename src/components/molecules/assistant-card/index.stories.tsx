import { Meta, StoryFn } from '@storybook/react'
import AssistantCard from './index'
import { serviceMen } from '../../../app/pages/service-around/mock.ts'

const assistant = serviceMen[0]

export default {
  component: AssistantCard,
} as Meta

const Template: StoryFn<typeof AssistantCard> = (args) => {
  return <AssistantCard {...args} assistant={assistant} />
}

export const Default = Template.bind({})
Default.args = {}
