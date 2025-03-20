import { Formik } from 'formik'
import { useElementSizes } from '../../../../../../helpers/hooks/useElementsSizes.ts'
import { useRef, useReducer } from 'react'
import { useTranslation } from 'react-i18next'
import { MainFormWrapper } from '../Wrappers.tsx'
import { FieldLayout } from './FieldLayout.tsx'
import { initialFields } from './mock.ts'
import { v4 } from 'uuid'

export type Field = {
  id: string
  key: string
  label: string
}
type Action =
  | { type: 'ADD_FIELD'; key: string; label: string }
  | { type: 'RESET' }

const fieldsReducer = (state: Field[], action: Action) => {
  switch (action.type) {
    case 'ADD_FIELD':
      return [
        ...state,
        {
          id: v4(),
          key: action.key,
          label: action.label,
        },
      ]
    case 'RESET':
      return initialFields
    default:
      return state
  }
}

const generateNextKey = (fields: Field[], baseKey: string) => {
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

export const Premises = () => {
  const typeRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLDivElement>(null)
  const squareRef = useRef<HTMLDivElement>(null)
  const [fields, dispatch] = useReducer(fieldsReducer, initialFields)

  const { t } = useTranslation()

  const { containerDimension: typeContainerWidth } = useElementSizes({
    containerRef: typeRef,
    containerDimensionProp: 'width',
  })
  const { containerDimension: nameContainerWidth } = useElementSizes({
    containerRef: nameRef,
    containerDimensionProp: 'width',
  })
  const { containerDimension: squareContainerWidth } = useElementSizes({
    containerRef: squareRef,
    containerDimensionProp: 'width',
  })

  const initialValues = fields.reduce(
    (acc, el) => {
      acc[`${el.key}-name`] = ''
      acc[`${el.key}-square`] = ''
      return acc
    },
    {} as Record<string, string>
  )

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize={false}
      onSubmit={async (_values, { resetForm }) => {
        console.log(_values)
        resetForm()
        dispatch({ type: 'RESET' })
      }}
    >
      {({ setFieldValue }) => {
        const handleAddField = (field: Field) => {
          const newKey = generateNextKey(fields, field.key.replace(/-\d+$/, ''))

          dispatch({
            type: 'ADD_FIELD',
            key: newKey,
            label: field.label,
          })

          setFieldValue(`${newKey}-name`, '')
          setFieldValue(`${newKey}-square`, '')
        }

        return (
          <MainFormWrapper
            saveButtonHandler={() => {}}
            nextPageButtonHandler={() => {}}
          >
            <div
              className={`-mb-1.5 hidden gap-3 lg:grid`}
              style={{
                gridTemplateColumns: `${typeContainerWidth}px ${nameContainerWidth}px ${squareContainerWidth}px`,
              }}
            >
              <label>{t('details.premises-form.labels.type')}</label>
              <label>{t('details.premises-form.labels.name')}</label>
              <label>{t('details.premises-form.labels.square')}</label>
            </div>
            {fields.map((field) => {
              return (
                <FieldLayout
                  key={field.id}
                  typeRef={typeRef}
                  nameRef={nameRef}
                  squareRef={squareRef}
                  addHandler={() => handleAddField(field)}
                  deleteHandler={() => {}}
                  field={field}
                />
              )
            })}
          </MainFormWrapper>
        )
      }}
    </Formik>
  )
}
