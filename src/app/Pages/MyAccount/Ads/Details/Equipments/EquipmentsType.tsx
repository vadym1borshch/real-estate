import H3 from '../../../../../../components/atoms/typography/h3'
import { Equipment } from './mock.ts'
import OutlinedCheckbox from '../../../../../../components/molecules/outlinedCheckbox'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

interface Props {
  data: Equipment[]
  label: string
}

export const EquipmentsType = ({ data, label }: Props) => {
  const [state, setState] = useState(data)
  const { t } = useTranslation()
  return (
    <div className="flex flex-col gap-10">
      <H3 text={t(label)} />
      <div className="grid grid-cols-1 gap-x-10 gap-y-3 lg:grid-cols-2">
        {state.map((item) => (
          <OutlinedCheckbox
            key={item.id}
            label={t(item.label)}
            checked={item.checked}
            setChecked={() =>
              setState((s) =>
                s.map((el) => {
                  if (el.id === item.id) {
                    return {
                      ...el,
                      checked: !el.checked,
                    }
                  }
                  return el
                })
              )
            }
          />
        ))}
      </div>
    </div>
  )
}
