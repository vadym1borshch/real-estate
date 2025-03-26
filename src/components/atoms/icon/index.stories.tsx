import { Meta, StoryFn } from '@storybook/react'
import Icon from './index'

export default {
  component: Icon,
} as Meta

const Template: StoryFn<typeof Icon> = (args) => {
  return (
    <Icon {...args} />
  )
}

export const Default = Template.bind({})
Default.args = {
  id: 'deleteIcon',
}
