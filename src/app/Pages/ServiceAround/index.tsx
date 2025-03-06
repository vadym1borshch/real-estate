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
  const [currentAssistantId, setCurrentAssistantId] = useState<string | null>(
    null
  )
  const [query, setQuery] = useState('')
  const { t } = useTranslation()

  const checkedHandler = (id: string) => {
    if (selectedFields.includes(id)) {
      setSelectedFields((fields) => fields.filter((field) => field !== id))
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
      .filter((m) => m.address.includes(postalCode))
      .filter((man) => selectedFields.includes(man.profession.key))
  }, [postalCode, selectedFields])

  const currentAssistant = foundPeople.find(
    (assistant) => assistant.id === currentAssistantId
  )

  return (
    <div className="flex w-full flex-col items-center">
      <H2 text={t('service-around.title')} className="text-center" />
      <p className="mt-6 mb-[5.625rem] w-full max-w-[47.5rem] text-center">
        {t('service-around.descriptions')}
      </p>
      <div className="grid w-full max-w-[72.5rem] grid-cols-1 gap-x-10 gap-y-5 md:grid-cols-2 lg:grid-cols-3">
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
      <div className="mt-[5.625rem] mb-[9.375rem] flex w-full flex-col items-center">
        <div className="flex w-full max-w-[47.5rem] items-center gap-3">
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
        {!!foundPeople.length && (
          <div className="border-t-gray mx-auto mt-[5.625rem] grid w-full max-w-[72.5rem] grid-cols-[repeat(auto-fill,minmax(16.25rem,1fr))] place-items-center gap-10 border-t-1 pt-[5.625rem]">
            {foundPeople.map((item) => (
              <AssistantCard
                assistant={item}
                key={item.id}
                onClick={(id) => setCurrentAssistantId(id)}
              />
            ))}
          </div>
        )}
      </div>
      <Modal
        open={!!currentAssistantId}
        setOpen={() => setCurrentAssistantId(null)}
        className="max-w-[560px]"
      >
        <div className="flex flex-col items-center gap-6">
          <Avatar
            userName={currentAssistant?.name}
            src={currentAssistant?.photo}
            size={10}
          />
          <div className="flex w-full max-w-[360px] flex-col items-center gap-1.5">
            <H3
              //eslint-disable-next-line @typescript-eslint/ban-ts-comment
              //@ts-expect-error
              text={currentAssistant?.name}
            />
            <span className="text-blue-gray text-center text-xs">
              {t(currentAssistant?.profession.title)}
            </span>
          </div>
          <p className="text-center">{currentAssistant?.description}</p>
          <p className="flex w-full max-w-[360px] flex-col items-center">
            <span className="font-700">
              {t('contacts.tel')}: {currentAssistant?.phone}
            </span>
            <span className="font-700">
              {t('contact-us.assistance.email')} {currentAssistant?.email}
            </span>
          </p>
        </div>
      </Modal>
    </div>
  )
}
