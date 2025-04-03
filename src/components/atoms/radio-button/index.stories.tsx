import { Meta, StoryFn } from '@storybook/react'
import RadioButton from './index'
import { useState } from 'react'

export default {
  component: RadioButton,
} as Meta

const Template: StoryFn<typeof RadioButton> = () => {
  const [value, setValue] = useState<'1' | '2'>('1')
  return (
    <div className="flex items-center gap-6 py-3">
      <RadioButton
        label="1"
        name="num"
        value="1"
        checked={value === '1'}
        onChange={() => setValue('1')}
      />
      <RadioButton
        label="2"
        name="num"
        value="2"
        checked={value === '2'}
        onChange={() => setValue('2')}
      />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {}
