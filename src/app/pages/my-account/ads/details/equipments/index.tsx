import { EquipmentsType } from './EquipmentsType.tsx'
import { useAxiosHook } from '../../../../../../helpers/hooks/useAxios.ts'
import { useEffect, useState } from 'react'
import { Loader } from '../../../../../../components/atoms/loader'
import { Data } from '../../../../../../@types/index.ts'
import { FormLayoutButtons } from '../Wrappers.tsx'
import { Formik, Form } from 'formik'
import { Equipment } from '../../../../../../@types/index.ts'
import { ESTATES } from '../../../../../../@constants/urls.ts'
import { RealEstate } from '../../../../../../store/estateSlice/index.ts'
import { selectCurrentEstate } from '../../../../../../store/estateSlice/selectors.ts'
import { useAppSelector } from '../../../../../../store/index.ts'

interface FormValues {
  equipments: Equipment[]
}

export const Equipments = () => {
  const [data, setData] = useState<Data[]>([])
  const currentEstate = useAppSelector(selectCurrentEstate)
  const { execute: getEquipments, loading } = useAxiosHook<Data[]>(
    { url: '/equipments', method: 'GET' },
    { manual: true }
  )
  const { execute: update } = useAxiosHook<{ estate: RealEstate }>(
    { url: ESTATES.UPDATE_INFO, method: 'PATCH' },
    { manual: true }
  )

  useEffect(() => {
    const fetchEquipments = async () => {
      const res = await getEquipments()
      if (res.data) {
        setData(res.data)
      }
    }
    fetchEquipments()
  }, [])

  const initialValues: FormValues = {
    equipments: currentEstate?.equipments || [],
  }

  const handleSubmit = async (values: FormValues) => {
    if (currentEstate?.id) {
      await update({
        data: {
          id: +currentEstate?.id,
          equipments: values.equipments,
        },
      })
    }
  }

  if (loading) return <Loader />
  if (!data.length) {
    return <div className="flex h-full items-center justify-center">Error</div>
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ values, setFieldValue }) => (
        <Form className="flex flex-col gap-[5.625rem]">
          {data.map((item) => (
            <EquipmentsType
              data={item.data}
              label={item.title}
              key={item.id}
              selectedEquipments={values.equipments}
              onEquipmentsChange={(newEquipments) => {
                setFieldValue('equipments', newEquipments)
              }}
            />
          ))}
          <FormLayoutButtons
            handleSave={() => {
              handleSubmit(values)
            }}
            handleNext={() => {}}
          />
        </Form>
      )}
    </Formik>
  )
}
