import MainBlock from '../main-block'
import Accordion from '../../../atoms/accordion'
import { useEffect, useState } from 'react'
import { sleep } from '../../../../helpers/common.ts'
import { faqData } from './data.ts'
import { useTranslation } from 'react-i18next'

const FAQ = () => {
  const [data, setData] = useState<{ id: string, question: string, answer: string }[]>([])
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
      setData(faqData)
    }
    fetchData()
  }, [])

  return (
    <MainBlock
      title={t('home.faq.main-title')}
      description={t('home.faq.descriptions')}
    >
      <div className="flex flex-col max-w-[760px] gap-3 pb-[150px] pt-[90px]">
        {!data.length && <div>Loading ...</div>}
        {data.map(({ id, question, answer }) => (
          <Accordion key={id} label={t(question)} open={openId === id} setOpen={() => openHandler(id)}>
            {t(answer)}
          </Accordion>
        ))}
      </div>
    </MainBlock>
  )
}

export default FAQ