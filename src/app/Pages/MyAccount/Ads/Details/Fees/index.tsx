import { Formik } from 'formik'
import { useRef, useReducer } from 'react'
import { useTranslation } from 'react-i18next'
import { MainFormWrapper } from '../Wrappers.tsx'
import { FieldLayout } from './FieldLayout.tsx'
import { useElementSizes } from '../../../../../../helpers/hooks/useElementsSizes.ts'
import { FeeField, initialFields } from './mock.ts'
import {
  ADD_FIELD_TYPE,
  fieldsReducer,
  RESET_TYPE,
  UPDATE_FIELD_TYPE,
} from './feesReducer.ts'

const generateNextKey = (fields: FeeField[], baseKey: string) => {
  const regex = new RegExp(`^${baseKey}-(\\d+)$`)

  const existingNumbers = fields
    .map((field) => {
      const match = field.key.match(regex)
      return match ? parseInt(match[1], 10) : null
    })
    .filter((num) => num !== null)

  const nextNumber =
    existingNumbers.length > 0 ? Math.max(...existingNumbers) + 1 : 1

  return `${baseKey}-${nextNumber}`
}

export const Fees = () => {
  const nameRef = useRef<HTMLDivElement>(null)
  const percentRef = useRef<HTMLDivElement>(null)
  const additionalInfoRef = useRef<HTMLDivElement>(null)
  const [fields, dispatch] = useReducer(fieldsReducer, initialFields)

  const { t } = useTranslation()

  const { containerDimension: nameWidth } = useElementSizes({
    containerRef: nameRef,
    containerDimensionProp: 'width',
  })
  const { containerDimension: percentWidth } = useElementSizes({
    containerRef: percentRef,
    containerDimensionProp: 'width',
  })
  const { containerDimension: additionalInfoWidth } = useElementSizes({
    containerRef: additionalInfoRef,
    containerDimensionProp: 'width',
  })

  const initialValues = fields.reduce(
    (acc, el) => {
      acc[`${el.key}-name`] = el.name || ''
      acc[`${el.key}-percent`] = el.percent || ''
      acc[`${el.key}-additional_info`] = el.additional_info || ''
      return acc
    },
    {} as Record<string, string>
  )

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (_values, { resetForm }) => {
        console.log(_values)
        resetForm()
        dispatch({ type: RESET_TYPE })
      }}
    >
      {({ setFieldValue }) => {
        const handleAddField = (
          _field: FeeField,
          setFieldValue: (field: string, value: string) => void
        ) => {
          const newKey = generateNextKey(
            fields,
            _field.key.replace(/-\d+$/, '')
          )

          dispatch({ type: ADD_FIELD_TYPE, key: newKey, name: _field.name })

          setTimeout(() => {
            setFieldValue(`${newKey}-name`, _field.name)
            setFieldValue(`${newKey}-percent`, '')
            setFieldValue(`${newKey}-additional_info`, '')
          }, 0)
        }

        const handleUpdateField = (key: string, value: string) => {
          dispatch({ type: UPDATE_FIELD_TYPE, key, value })
          setFieldValue(key, value)
        }

        return (
          <MainFormWrapper
            saveButtonHandler={() => {}}
            nextPageButtonHandler={() => {}}
          >
            <div
              className={`-mb-1.5 hidden gap-3 lg:grid`}
              style={{
                gridTemplateColumns: `${nameWidth}px ${percentWidth}px ${additionalInfoWidth}px`,
              }}
            >
              <label>{t('details.fees-form.labels.fee')}</label>
              <label>{t('details.fees-form.labels.percent')}</label>
              <label>{t('details.fees-form.labels.extra-information')}</label>
            </div>

            {fields.map((field) => (
              <FieldLayout
                key={field.id}
                nameRef={nameRef}
                percentRef={percentRef}
                additionalInfoRef={additionalInfoRef}
                field={field}
                onChange={(key, value) => handleUpdateField(key, value)}
                addHandler={() => handleAddField(field, setFieldValue)}
              />
            ))}
          </MainFormWrapper>
        )
      }}
    </Formik>
  )
}
