import { Meta, StoryFn } from '@storybook/react'
import ContactUsForm from './index'

export default {
  component: ContactUsForm,
} as Meta

const Template: StoryFn<typeof ContactUsForm> = (args) => {
  return <ContactUsForm {...args} />
}

export const Default = Template.bind({})
Default.args = {}
