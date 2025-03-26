import { Meta, StoryFn } from '@storybook/react'
import LanguageSwitcher from './index'

export default {
  component: LanguageSwitcher,
} as Meta

const Template: StoryFn<typeof LanguageSwitcher> = (args) => {
  return (
    <LanguageSwitcher {...args} />
  )
}

export const Default = Template.bind({})
Default.args = {

}




