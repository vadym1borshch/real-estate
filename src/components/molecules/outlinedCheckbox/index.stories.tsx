import { useState } from 'react'
import { Meta, StoryFn } from '@storybook/react'
import OutlinedCheckbox from './index'

export default {
  component: OutlinedCheckbox,
} as Meta

const Template: StoryFn<typeof OutlinedCheckbox> = (args) => {
  const [checked, setChecked] = useState(false)
  return (
    <OutlinedCheckbox {...args} checked={checked} setChecked={setChecked} />
  )
}

export const Default = Template.bind({})
Default.args = {
  label: 'Label',
}

export const variantText = Template.bind({})
variantText.args = {
  variant: 'text',
  label: 'Label',
}

export const checkboxSide = Template.bind({})
checkboxSide.args = {
  label: 'Label',
  checkboxSide: 'left',
}

export const checkboxSideVariantText = Template.bind({})
checkboxSideVariantText.args = {
  variant: 'text',
  label: 'Label',
  checkboxSide: 'left',
}
