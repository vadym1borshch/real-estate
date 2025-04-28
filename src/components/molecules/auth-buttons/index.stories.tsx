import { Meta, StoryFn } from '@storybook/react'
import AuthButtons from './index'

export default {
  component: AuthButtons,
} as Meta

const Template: StoryFn<typeof AuthButtons> = (args) => {
  return (
    <div className="bg-charcoal p-4">
      <AuthButtons {...args} onClick={() => {}} />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {}
