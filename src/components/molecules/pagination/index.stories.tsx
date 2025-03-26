import { useState } from 'react'
import { Meta, StoryFn } from '@storybook/react'
import Pagination from './index'

export default {
  component: Pagination,
} as Meta

const Template: StoryFn<typeof Pagination> = (args) => {
  const [page, setPage] = useState(1)
  return <Pagination {...args} count={10} page={page} setPage={setPage} />
}

export const Default = Template.bind({})
Default.args = {}
