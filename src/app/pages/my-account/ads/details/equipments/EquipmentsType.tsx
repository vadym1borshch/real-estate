import { useTranslation } from 'react-i18next'
import H3 from '../../../../../../components/atoms/typography/h3'
import OutlinedCheckbox from '../../../../../../components/molecules/outlinedCheckbox'
import { Equipment } from '../../../../../../@types/index.ts'

interface Props {
  data: Equipment[]
  label: string
  selectedEquipments: Equipment[]
  onEquipmentsChange: (newEquipments: Equipment[]) => void
}

export const EquipmentsType = ({
  data,
  label,
  selectedEquipments,
  onEquipmentsChange,
}: Props) => {
  const { t } = useTranslation()

  const handleCheckboxChange = (item: Equipment) => {
    const newEquipments = selectedEquipments.some(
      (equipment) => equipment.id === item.id
    )
      ? selectedEquipments.filter((equipment) => equipment.id !== item.id)
      : [...selectedEquipments, item]

    onEquipmentsChange(newEquipments)
  }

  return (
    <div className="flex flex-col gap-10">
      <H3 text={t(label)} />
      <div className="grid grid-cols-1 gap-x-10 gap-y-3 lg:grid-cols-2">
        {data.map((item) => (
          <OutlinedCheckbox
            key={item.id}
            label={t(item.label)}
            checked={selectedEquipments.some(
              (equipment) => equipment.id === item.id
            )}
            setChecked={() => handleCheckboxChange(item)}
          />
        ))}
      </div>
    </div>
  )
}
