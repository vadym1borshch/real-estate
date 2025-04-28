import { Meta, StoryFn } from '@storybook/react'
import LinkCard from './index'
import { services } from '../../../common/mock.ts'
import { useTranslation } from 'react-i18next'

export default {
  component: LinkCard,
} as Meta

const Template: StoryFn<typeof LinkCard> = (args) => {
  const { t } = useTranslation()
  return (
    <LinkCard
      {...args}
      src={services[0].src}
      label={t(services[0].label)}
      descriptions={t(services[0].descriptions)}
      href=""
    />
  )
}

export const Default = Template.bind({})
Default.args = {}
