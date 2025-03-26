import { Meta, StoryFn } from '@storybook/react'
import MapMarker from './index'

export default {
  component: MapMarker,
} as Meta

const Template: StoryFn<typeof MapMarker> = (args) => {
  return (
    <MapMarker {...args} />
  )
}

export const Default = Template.bind({})
Default.args = {}

export const limited = Template.bind({})
limited.args = {
  limited: true
}


