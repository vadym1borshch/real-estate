import { Meta, StoryFn } from '@storybook/react'
import Table from './index'

export default {
  component: Table,
} as Meta

const Template: StoryFn<typeof Table> = (args) => {
  return (
    <Table
      {...args}
      tableRows={
        <>
          <tr className="border-blue-gray border-b last-of-type:border-0">
            <td>1</td>
            <td>2</td>
          </tr>
          <tr className="border-blue-gray border-b last-of-type:border-0">
            <td>1</td>
            <td>2</td>
          </tr>
        </>
      }
    />
  )
}

export const Default = Template.bind({})
Default.args = {}

export const WithHead = Template.bind({})
WithHead.args = {
  tableHead: ['head1', 'head2'],
}