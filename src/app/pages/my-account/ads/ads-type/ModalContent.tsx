import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ModalStatus } from './index.tsx'
import Button from '../../../../../components/atoms/button'
import Dropdown from '../../../../../components/atoms/dropdown'
import Icon from '../../../../../components/atoms/icon'

const initPrice = 5

const days = [
  {
    key: 3,
    label: '3 Tage',
  },
  {
    key: 5,
    label: '5 Tage',
  },
  {
    key: 7,
    label: '1 Woche',
  },
  {
    key: 10,
    label: '10 Tage',
  },
]

interface Props {
  id: string | null
  onClick: (status: ModalStatus) => void
  status: ModalStatus
}

export const ModalContent = ({ id, onClick, status }: Props) => {
  const { t } = useTranslation()
  const [openDropdown, setOpenDropDown] = useState(false)
  const [currentPrice, setCurrentPrice] = useState<{
    key: number
    label: string
  }>(days[0])

  useEffect(() => {
    setOpenDropDown(false)
  }, [currentPrice])

  return useMemo(() => {
    if (!id) return null
    if (id === 'rejected-reason') {
      return <p className="text-center">{t('ads.modal.rejected-reason.p')}</p>
    }
    if (id === 'top') {
      if (status === 'success') {
        return (
          <p className="text-center">{t('ads.modal.increase-top.success.p')}</p>
        )
      }
      if (status === 'rejected') {
        return (
          <p className="text-center">
            {t('ads.modal.increase-top.rejected.p')}
          </p>
        )
      }
    }
    return (
      <div className="flex flex-col items-center gap-6">
        <p className="text-center">{t('ads.modal.increase-top.main.p')}</p>
        <div className="flex w-full max-w-[20rem] flex-col items-center gap-6">
          <div className="flex w-full gap-3">
            <div className="flex-grow">
              <Dropdown
                label={currentPrice.label}
                open={openDropdown}
                setOpen={(open) => setOpenDropDown(open)}
                variant="outlined"
                withIcon
                triggerButtonClassName="w-full"
              >
                <div className="flex flex-col items-start">
                  {days.map((day) => (
                    <span
                      onClick={() => setCurrentPrice(day)}
                      className="hover:bg-seafoam-green w-full py-2 pl-4"
                      key={day.key}
                    >
                      {day.label}
                    </span>
                  ))}
                </div>
              </Dropdown>
            </div>
            <span className="border-blue-gray flex w-full max-w-[6.875rem] items-center justify-center rounded-sm border">
              {initPrice * currentPrice.key}{' '}
              <Icon id="euroCurrencyIcon" className="h-6 w-6" />
            </span>
          </div>

          <Button
            className="w-full"
            onClick={() => {
              onClick('rejected')
            }}
          >
            {t('buttons.pay')}
          </Button>
        </div>
      </div>
    )
  }, [id, status, onClick, openDropdown])
}
