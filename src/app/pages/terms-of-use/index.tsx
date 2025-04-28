import { useTranslation } from 'react-i18next'
import H2 from '../../../components/atoms/typography/h2'
import LargeFont from '../../../components/atoms/typography/large-font'
import { termsOfUseData } from './mock.ts'

export const TermsOfUse = () => {
  const { t } = useTranslation()
  return (
    <div className="mb-[9.375.rem] flex max-w-[72.5rem] flex-col items-center gap-6 pb-[6.25rem] lg:pb-[9.375rem]">
      <H2 text={t('terms-of-use.title')} />
      {termsOfUseData.map((item) => (
        <DescriptionBlock
          description={item.description}
          paragraphs={item.paragraphs}
          key={item.id}
          title={item.mainTitle}
        />
      ))}
    </div>
  )
}

interface DescriptionBlockProps {
  paragraphs?: {
    id: string
    subTitle: string
    description: string
  }[]
  title: string
  description?: string
}

const DescriptionBlock = ({
  paragraphs,
  title,
  description,
}: DescriptionBlockProps) => {
  const { t } = useTranslation()
  return (
    <div className="flex w-full flex-col gap-6">
      <LargeFont text={t(title)} />
      {description && <p>{t(description)}</p>}
      {paragraphs &&
        paragraphs.map((item) => (
          <div key={item.id}>
            <h5 className="font-600">{t(item.subTitle)}</h5>
            <p>{t(item.description)}</p>
          </div>
        ))}
    </div>
  )
}
