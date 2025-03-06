import MainBlock from '../main-block'
import Accordion from '../../../atoms/accordion'
import { ReactNode, useEffect, useState } from 'react'
import { sleep } from '../../../../helpers/common.ts'
import { faqData, Data } from './data.ts'
import { useTranslation } from 'react-i18next'

interface Props {
  children?: ReactNode
  filter?: string
}

const FAQ = ({ children, filter = 'buy' }: Props) => {
  const [data, setData] = useState<Data[]>([])
  const [openId, setOpenId] = useState<string | null>('2')
  const { t } = useTranslation()

  const openHandler = (id: string) => {
    if (id === openId) {
      setOpenId(null)
      return
    }
    setOpenId(id)
  }

  useEffect(() => {
    const fetchData = async () => {
      await sleep(1000)
      setData(faqData.find((el) => el.key === filter)?.data || [])
    }
    fetchData()
  }, [filter])

  return (
    <MainBlock title={t('faq.title')} description={t('faq.descriptions')}>
      {children}
      <div className="flex max-w-[760px] flex-col gap-3 pt-[90px] pb-[150px]">
        {!data.length && <div>Loading ...</div>}
        {data.map(({ id, question, answer }: Data) => (
          <Accordion
            key={id}
            label={t(question)}
            open={openId === id}
            setOpen={() => openHandler(id)}
          >
            {t(answer)}
          </Accordion>
        ))}
      </div>
    </MainBlock>
  )
}

export default FAQ
