import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import EstateCard from './index'
import { houses } from '../../../store/estateSlice/data.ts'


export default {
  component: EstateCard,
} as Meta

const Template: StoryFn<typeof EstateCard> = (args) => {
  return (
    <EstateCard {...args} />
  )
}

export const Default = Template.bind({})
Default.args = {
  realEstate: houses[0],
}

export const favorite = Template.bind({})
favorite.args = {
  realEstate: { ...houses[0], favorite: true },
}




