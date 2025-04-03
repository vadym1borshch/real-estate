import { Meta, StoryFn } from '@storybook/react'
import Slider from './index'
import { services } from '../../../common/mock.ts'
import LinkCard from '../link-card'
import { useTranslation } from 'react-i18next'

export default {
  component: Slider,
} as Meta

const Template: StoryFn<typeof Slider> = (args) => {
  const { t } = useTranslation()
  return (
    <Slider {...args}>
      {services.map((service) => (
        <LinkCard
          key={service.label}
          src={service.src}
          label={t(service.label)}
          descriptions={t(service.descriptions)}
          href="#"
        />
      ))}
    </Slider>
  )
}

export const Default = Template.bind({})
Default.args = {}
