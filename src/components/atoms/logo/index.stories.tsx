import { Meta, StoryFn } from '@storybook/react'
import Logo from './index'
import { cn } from '../../../helpers/ui.ts'

export default {
  component: Logo,
} as Meta

const Template: StoryFn<typeof Logo> = (args) => {
  return (
    //div wrapper only for presentation
    <div
      className={cn('p-3', {
        'bg-charcoal': args.variant === 'white',
      })}
    >
      <Logo {...args} />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {}

export const white = Template.bind({})
white.args = {
  variant: 'white',
}
