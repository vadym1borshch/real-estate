import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import Avatar from './index'

export default {
  component: Avatar,
} as Meta

const Template: StoryFn<typeof Avatar> = (args) => {
  return (
    <Avatar  {...args} />
  )
}

export const Default = Template.bind({})
Default.args = {
  userName: 'test',
  userLastName: 'Best',
}

export const sized = Template.bind({})
sized.args = {
  userName: 'test',
  size: 10,
}

export const withSrc = Template.bind({})
withSrc.args = {
  userName: 'test',
  //can pass locale picture
  src: 'https://i.pravatar.cc/300',
}
