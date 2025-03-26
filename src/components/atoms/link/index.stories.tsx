import { Meta, StoryFn } from '@storybook/react'
import Link from './index'

export default {
  component: Link,
} as Meta

const Template: StoryFn<typeof Link> = (args) => {
  return (
    <Link {...args} >
      link
    </Link>
  )
}

export const Default = Template.bind({})
Default.args = {
  href: '',
}

export const withIcon = Template.bind({})
withIcon.args = {
  href: '',
  iconId: 'playIcon',
}
