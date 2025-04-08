import { Meta, StoryFn } from '@storybook/react'
import Footer from './index'

export default {
  component: Footer,
} as Meta

const Template: StoryFn<typeof Footer> = () => {
  return (
      <Footer />
  )
}

export const Default = Template.bind({})
Default.args = {}
