import { Meta, StoryFn } from '@storybook/react'
import MapWrapper from './index'

export default {
  component: MapWrapper,
} as Meta

const Template: StoryFn<typeof MapWrapper> = (args) => {
  return (
    <MapWrapper {...args} data={[1]}>
      <></>
    </MapWrapper>
  )
}

export const Default = Template.bind({})
Default.args = {}
