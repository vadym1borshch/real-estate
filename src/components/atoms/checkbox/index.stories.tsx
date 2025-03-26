import { Meta, StoryFn } from '@storybook/react'
import Checkbox from './index'

export default {
  component: Checkbox,
} as Meta

const Template: StoryFn<typeof Checkbox> = (args) => {
  return (
    <Checkbox  {...args} />
  )
}

export const Default = Template.bind({})
Default.args = {

}

export const checked = Template.bind({})
checked.args = {
  checked: true,
}
