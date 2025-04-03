import { Meta, StoryFn } from '@storybook/react'
import { TextExpander } from './index'

export default {
  component: TextExpander,
} as Meta

const Template: StoryFn<typeof TextExpander> = (args) => {
  return (
    <TextExpander {...args}>
      The Benefits of Learning a New Language Learning a new language is one of
      the most rewarding skills a person can develop. It not only allows you to
      communicate with people from different cultures but also opens up new
      opportunities for work, travel, and personal growth. When you learn a new
      language, you gain access to literature, music, and films that you may not
      have fully appreciated before. It can also improve your memory,
      problem-solving skills, and overall cognitive function. Many studies have
      shown that bilingual or multilingual individuals are often more creative
      and better at multitasking. In today’s globalized world, being able to
      speak more than one language can make you stand out in the job market and
      help you build stronger relationships with people from around the world.
      Whether you're learning for fun, for work, or for travel, every bit of
      progress brings you closer to a deeper understanding of the world and
      yourself.
    </TextExpander>
  )
}

export const Default = Template.bind({})
Default.args = {}


export const WithParams = Template.bind({})
WithParams.args = {
  linesToShow: 2,
}
