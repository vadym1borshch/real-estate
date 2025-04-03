import { Meta, StoryFn } from '@storybook/react'
import { Filters } from './index'
import Button from '../../atoms/button'
import { ListingProvider } from '../../../contexts/ListingContext.tsx'

export default {
  component: Filters,
} as Meta

const Template: StoryFn<typeof Filters> = (args) => {
  return (
    <ListingProvider>
      <div className="bg-gray">
        <Filters {...args}>
          <Button>FILTER</Button>
        </Filters>
      </div>
    </ListingProvider>
  )
}

export const Default = Template.bind({})
Default.args = {}
