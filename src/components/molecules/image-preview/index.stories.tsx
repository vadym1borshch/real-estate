import { Meta, StoryFn } from '@storybook/react'
import ImagePreview from './index'
import { images } from '../../../app/pages/estates-list/estate-details/mock.ts'

export default {
  component: ImagePreview,
} as Meta

const Template: StoryFn<typeof ImagePreview> = (args) => {
  return <ImagePreview {...args} images={images} withButtons />
}

export const Default = Template.bind({})
Default.args = {}
