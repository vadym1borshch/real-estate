import { useTranslation } from 'react-i18next'
import { useEffect, useMemo, useState, useCallback } from 'react'

import H2 from '../../../components/atoms/typography/h2'
import Input from '../../../components/atoms/input'
import Button from '../../../components/atoms/button'
import Avatar from '../../../components/atoms/avatar'
import H3 from '../../../components/atoms/typography/h3'
import OutlinedCheckbox from '../../../components/molecules/outlinedCheckbox'
import AssistantCard from '../../../components/molecules/assistant-card'
import Modal from '../../../components/molecules/modal'

import { useAxiosHook } from '../../../helpers/hooks/useAxios.ts'
import {
  Service,
  ServiceWorkers,
  updateService,
} from '../../../api/services.ts'

export const ServiceAround = () => {
  const { t } = useTranslation()

  const [postalCode, setPostalCode] = useState('')
  const [selectedFields, setSelectedFields] = useState<string[]>([])
  const [currentAssistantId, setCurrentAssistantId] = useState<string | null>(
    null
  )
  const [query, setQuery] = useState('')

  const { data: services, execute: fetchServices } = useAxiosHook<Service[]>(
    { url: '/services', method: 'GET' },
    { manual: true }
  )

  const { data: serviceWorkers, execute: fetchServiceWorkers } = useAxiosHook<
    ServiceWorkers[]
  >({ url: '/serviceWorkers', method: 'GET' }, { manual: true })

  const handlePostalCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    if (/^\d{0,4}$/.test(value)) {
      setQuery(value)
    }
  }

  const addPostalCode = () => {
    setPostalCode(query)
    setQuery('')
  }

  const checkedHandler = useCallback(
    async (id: string, checked: boolean) => {
      await updateService(id, checked)
      await fetchServices()

      setSelectedFields((prev) =>
        checked ? [...prev, id] : prev.filter((field) => field !== id)
      )

      setPostalCode('')
    },
    [fetchServices]
  )

  const foundWorkers = useMemo(() => {
    if (!serviceWorkers) return []
    return serviceWorkers
      .filter((worker) => worker.address.includes(postalCode))
      .filter((worker) => selectedFields.includes(worker.profession.key))
  }, [postalCode, selectedFields, serviceWorkers])

  const currentAssistant = useMemo(() => {
    return (
      foundWorkers.find((worker) => worker.id === currentAssistantId) || null
    )
  }, [foundWorkers, currentAssistantId])


  useEffect(() => {
    fetchServices()
    fetchServiceWorkers()
  }, [fetchServices, fetchServiceWorkers])

  if (!services) return null

  return (
    <div className="flex w-full flex-col items-center">
      <H2 text={t('service-around.title')} className="text-center" />
      <p className="mt-6 mb-[3.75rem] w-full max-w-[47.5rem] text-center lg:mb-[5.625rem]">
        {t('service-around.descriptions')}
      </p>

      <div className="grid w-full max-w-[72.5rem] grid-cols-1 gap-x-10 gap-y-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((item) => (
          <OutlinedCheckbox
            key={item.id}
            label={t(item.title)}
            checked={selectedFields.includes(item.id)}
            setChecked={(value) => checkedHandler(item.id, value)}
          />
        ))}
      </div>

      <div className="mt-[3.75rem] mb-[6.25rem] flex w-full flex-col items-center lg:mt-[5.625rem] lg:mb-[9.375rem]">
        <div className="flex w-full max-w-[47.5rem] items-center gap-3">
          <Input
            value={query}
            onChange={handlePostalCodeChange}
            placeholder={t('common.postal-code')}
          />
          <Button onClick={addPostalCode}>{t('buttons.find')}</Button>
        </div>
        {!!foundWorkers?.length && (
          <div className="border-t-gray mx-auto mt-[3.75rem] grid w-full max-w-[72.5rem] grid-cols-1 gap-5 lg:gap-10 border-t-1 pt-[3.75rem] sm:grid-cols-2 md:grid-cols-3 lg:mt-[5.625rem] lg:grid-cols-4 lg:pt-[5.625rem]">
            {foundWorkers?.map((item) => (
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
        className="max-w-[560px] h-[92svh] md:h-fit"
      >
        <div className="flex flex-col items-center h-[calc(92svh-48px)] md:h-fit justify-center gap-6">
          <Avatar
            userName={currentAssistant?.name}
            src={currentAssistant?.photo}
            size={10}
          />
          <div className="flex w-full max-w-[360px] flex-col items-center gap-1.5">
            <H3 text={currentAssistant?.name as string} />
            <span className="text-blue-gray text-center text-xs">
              {t(currentAssistant?.profession.title)}
            </span>
          </div>
          <p className="text-center">{currentAssistant?.description}</p>
          <p className="flex w-full max-w-[360px] flex-col items-center">
            <span className="font-700">
              {t('contacts.tel')}: {currentAssistant?.phone}
            </span>
            <span className="font-700 text-center">
              {t('contact-us.assistance.email')} {currentAssistant?.email}
            </span>
          </p>
        </div>
      </Modal>
    </div>
  )
}
