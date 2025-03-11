import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ReactMarkdown from 'react-markdown'
import Button from '../../../components/atoms/button'
import H2 from '../../../components/atoms/typography/h2'
import ContactUsForm from '../../../components/organisms/contact-us-form'
import { DescriptionsParagraph } from './DescriptionsParagraph.tsx'
import Accordion from '../../../components/atoms/accordion'
import { pieces_of_knowledge } from './mock.ts'

export const KnowledgeRealEstate = () => {
  const { t } = useTranslation()
  const [openId, setOpenId] = useState<string | null>('2')

  const openHandler = (id: string) => {
    if (id === openId) {
      setOpenId(null)
      return
    }
    setOpenId(id)
  }
  return (
    <div className="flex max-w-[72.5rem] flex-col items-center">
      <DescriptionsParagraph
        title={t('knowledge-real-estate.p1.title')}
        description={t('knowledge-real-estate.p1.description')}
        className="max-w-[47.5rem] gap-6"
        titleClassName="text-center w-full"
        Component={H2}
      />
      <div className="flex flex-col items-center pt-[3.75rem] pb-[6.25rem] md:grid md:grid-cols-[2fr_1fr] md:gap-10">
        <img
          src="/man-with-laptop.png"
          alt="image"
          className="w-full rounded-lg object-cover md:h-[420px]"
        />
        <DescriptionsParagraph
          title={t('knowledge-real-estate.p2.title')}
          description={t('knowledge-real-estate.p2.description')}
          titleClassName="md:text-start"
          descriptionsClassName="md:text-start"
          className="pt-6 md:items-start md:pt-0"
        >
          <Button iconId="downloadIcon">Herunterladen</Button>
        </DescriptionsParagraph>
      </div>
      <DescriptionsParagraph
        title={t('knowledge-real-estate.p3.title')}
        description={t('knowledge-real-estate.p3.description')}
        titleClassName="md:w-full"
      />

      <div className="flex w-full max-w-[47.5rem] flex-col items-center pt-[4.125rem] pb-[9.375rem] gap-3">
        {pieces_of_knowledge.map((item) => (
          <Accordion
            key={item.id}
            label={t(item.label)}
            open={openId === item.id}
            setOpen={() => openHandler(item.id)}
          >
            <p className="whitespace-pre-wrap">
              <ReactMarkdown>{t(item.description)}</ReactMarkdown>
            </p>
          </Accordion>
        ))}
      </div>

      <DescriptionsParagraph
        title={t('knowledge-real-estate.p4.title')}
        description={t('knowledge-real-estate.p4.description')}
        titleClassName="md:w-full"
      />
      <div className="flex w-full max-w-[47.5rem] flex-col items-center pt-[4.125rem] pb-[9.375rem]">
        <ContactUsForm withAgreeField />
      </div>
    </div>
  )
}
