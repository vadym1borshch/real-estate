import { Meta, StoryFn } from '@storybook/react'
import { Filters } from './index'
import Button from '../../atoms/button'

export default {
  component: Filters,
} as Meta

const Template: StoryFn<typeof Filters> = (args) => {
  return (
    <div className="bg-gray">
      <Filters {...args}>
        <Button>FILTER</Button>
      </Filters>
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {}
