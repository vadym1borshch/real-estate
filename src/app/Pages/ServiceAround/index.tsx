import { useTranslation } from 'react-i18next'
import H2 from '../../../components/atoms/typography/h2'
import { data, serviceMen } from './mock.ts'
import OutlinedCheckbox from '../../../components/molecules/outlinedCheckbox'
import { useMemo, useState } from 'react'
import Input from '../../../components/atoms/input'
import Button from '../../../components/atoms/button'
import AssistantCard from '../../../components/molecules/assistant-card'
import Modal from '../../../components/molecules/modal'
import Avatar from '../../../components/atoms/avatar'
import H3 from '../../../components/atoms/typography/h3'


export const ServiceAround = () => {
  const [postalCode, setPostalCode] = useState('')
  const [selectedFields, setSelectedFields] = useState<string[]>([])
  const [currentAssistantId, setCurrentAssistantId] = useState<string | null>(null)
  const [query, setQuery] = useState('')
  const { t } = useTranslation()

  const checkedHandler = (id: string) => {
    if (selectedFields.includes(id)) {
      setSelectedFields((fields) => fields.filter(field => field !== id))
    } else {
      setSelectedFields([...selectedFields, id])
    }
    setPostalCode('')
  }
  const addPostalCode = () => {
    setPostalCode(query)
    setQuery('')
  }

  const foundPeople = useMemo(() => {
    return serviceMen
      .filter(m => m.address.includes(postalCode))
      .filter(man => selectedFields.includes(man.profession.key))

  }, [selectedFields.length, postalCode])


  const currentAssistant = foundPeople.find((assistant) => assistant.id === currentAssistantId)

  return (
    <div className="flex flex-col w-full items-center">
      <H2 text={t('service-around.title')} />
      <p
        className="w-full max-w-[47.5rem] text-center mt-6 mb-[5.625rem]"
      >
        {t('service-around.descriptions')}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-10 w-full max-w-[72.5rem]">
        {data.map((item) => (
          <OutlinedCheckbox
            key={item.id}
            label={t(item.title)}
            checked={selectedFields.includes(item.id)}
            setChecked={() => {
              checkedHandler(item.id)
            }}
          />
        ))}
      </div>
      <div className="flex flex-col items-center w-full mt-[5.625rem] mb-[9.375rem]">
        <div className="flex items-center gap-3 max-w-[47.5rem] w-full">
          <Input
            value={query}
            onChange={(e) => {
              const value = e.currentTarget.value

              if (/^\d{0,4}$/.test(value)) {
                setQuery(value)
              }

            }}
            placeholder={t('common.postal-code')}
          />
          <Button onClick={addPostalCode}>{t('buttons.find')}</Button>
        </div>
        {!!foundPeople.length && <div
          className="w-full mt-[5.625rem] grid mx-auto gap-10 grid-cols-[repeat(auto-fill,minmax(16.25rem,1fr))] max-w-[72.5rem] border-t-1 border-t-gray pt-[5.625rem] place-items-center">
          {foundPeople.map((item) => (
            <AssistantCard assistant={item} key={item.id} onClick={(id)=>setCurrentAssistantId(id)} />
          ))}
        </div>}
      </div>
      <Modal open={!!currentAssistantId} setOpen={()=>setCurrentAssistantId(null)} className="max-w-[560px]">
        <div className="flex flex-col items-center gap-6">
          <Avatar userName={currentAssistant?.name} src={currentAssistant?.photo} size={10}/>
          <div className="flex flex-col items-center max-w-[360px] w-full gap-1.5">
            <H3 text={currentAssistant?.name}/>
            <span className="text-xs text-blue-gray text-center">{t(currentAssistant?.profession.title)}</span>
          </div>
          <p className="text-center">
            {currentAssistant?.description}
          </p>
          <p className="flex flex-col items-center max-w-[360px] w-full">
            <span className="font-700">{t('contacts.tel')}: {currentAssistant?.phone}</span>
            <span className="font-700">{t('contact-us.assistance.email')} {currentAssistant?.email}</span>
          </p>
        </div>
      </Modal>
    </div>
  )
}