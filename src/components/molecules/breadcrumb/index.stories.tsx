import { Meta, StoryFn } from '@storybook/react'
import Breadcrumb from './index'

export default {
  component: Breadcrumb,
} as Meta

const items = [
  {
    id: '1',
    href: '',
    label: 'Home ',
  },
  {
    id: '2',
    href: '',
    label: 'Extra ',
  },
]

const Template: StoryFn<typeof Breadcrumb> = (args) => {
  return <Breadcrumb {...args} items={items} />
}

export const Default = Template.bind({})
Default.args = {}
