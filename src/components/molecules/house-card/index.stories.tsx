import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import HouseCard from './index'
import { houses } from '../../../common/mock.ts'

export default {
  component: HouseCard,
} as Meta

const Template: StoryFn<typeof HouseCard> = (args) => {
  return (
    <HouseCard {...args} />
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




