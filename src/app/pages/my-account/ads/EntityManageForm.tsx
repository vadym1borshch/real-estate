import { Field, FieldProps, Form, Formik } from 'formik'
import { useTranslation } from 'react-i18next'

import { ReactNode, useRef, useState } from 'react'
import { MapRef } from 'react-map-gl'
import { usePathname } from '../../../../helpers/hooks/usePathname'
import { ADS_ROUTES } from '../../../../@constants/routes'
import {
  countries,
  objectsTypes,
  parkingTypes,
  permittedRentInfos,
  permittedSellInfos,
  stateTypes,
} from './details/common'
import {
  FieldWrapper,
  FormDropdownWrapper,
  FormInputWrapper,
  FormRadioWrapper,
} from './details/Wrappers'
import Icon from '../../../../components/atoms/icon'
import TextArea from '../../../../components/atoms/text-area'
import Button from '../../../../components/atoms/button'
import FileUpload from '../../../../components/molecules/file-upload'
import Modal from '../../../../components/molecules/modal'
import Map from '../../../../components/organisms/map'
import { useAxiosHook } from '../../../../helpers/hooks/useAxios.ts'
import { ESTATES, URL as ROUTE } from '../../../../@constants/urls.ts'
import { useAppDispatch, useAppSelector } from '../../../../store'
import { selectUser } from '../../../../store/userSlice/selectors.ts'
import { RealEstate } from '../../../../store/estateSlice'
import { useValidationSchema } from './useValidationSchema.ts'
import { useImagesUpload } from '../../../../helpers/hooks/useImagesUpload.ts'
import { useInitialValues } from './useInitialValues.ts'
import { cn } from '../../../../helpers/ui.ts'
import { selectCurrentEstate } from '../../../../store/estateSlice/selectors.ts'
import { useWindowDimensions } from '../../../../helpers/hooks/useWindowDimensions.ts'
import { BREAKPOINTS } from '../../../../@constants'
import { addToast } from '../../../../store/toastSlise'

interface Props {
  children?: ReactNode
}

export const EntityManageForm = ({ children }: Props) => {
  const { t } = useTranslation()
  const [openMap, setOpenMap] = useState(false)
  const [imgs, setImgs] = useState<string[]>([])
  const mapRef = useRef<MapRef | null>(null)
  const path = usePathname()
  const [currImageIdx, setCurrImageIdx] = useState<number | null>(null)
  const isSellPath = path.includes(ADS_ROUTES.SELL_ADS)
  const user = useAppSelector(selectUser)
  const currEstate = useAppSelector(selectCurrentEstate)
  const { width } = useWindowDimensions()
  const dispatch = useAppDispatch()

  const { execute: create } = useAxiosHook<{ estate: RealEstate }>(
    { url: ROUTE.ESTATES, method: 'POST' },
    { manual: true }
  )

  const { execute: update } = useAxiosHook(
    { url: ESTATES.UPDATE, method: 'PATCH' },
    { manual: true }
  )

  const uploadImages = useImagesUpload()

  const initValues = useInitialValues({ callback: setImgs })

  return (
    <Formik
      initialValues={initValues}
      validationSchema={useValidationSchema(
        path.includes(ADS_ROUTES.CREATE_AD)
      )}
      onSubmit={async (_values, { resetForm }) => {
        if (path.includes(ADS_ROUTES.CREATE_AD)) {
          if (!imgs.length) {
            dispatch(addToast({type:"error", message:"please add images"}))
            return
          } else {
            const createRes = await create({
              data: {
                ..._values,
                images: imgs,
                userId: user?.id,
              },
            })

            console.log(createRes.data.estate)
          }
          resetForm()
        } else {
          if (currEstate) {
            await update({
              data: {
                id: +currEstate?.id,
                ..._values,
                images: imgs,
              },
            })
            dispatch(addToast({type:"success", message:"updated successfully"}))
          }
        }
      }}
    >
      {({ setFieldValue }) => (
        <Form className="flex flex-col gap-3">
          <FieldWrapper label={t('details.details-form.object')}>
            <FormDropdownWrapper
              fieldName="typeKey"
              dropdownElements={objectsTypes}
            />
          </FieldWrapper>
          <FieldWrapper label={t('details.details-form.title')}>
            <FormInputWrapper fieldName="label" />
          </FieldWrapper>
          <FieldWrapper label={t('details.details-form.country')}>
            <FormDropdownWrapper
              fieldName="country"
              dropdownElements={countries}
            />
          </FieldWrapper>
          <FieldWrapper label={t('details.details-form.city')}>
            <FormInputWrapper fieldName="city" />
          </FieldWrapper>
          <FieldWrapper label={t('details.details-form.post-code')}>
            <FormInputWrapper fieldName="postCode" />
          </FieldWrapper>
          <FieldWrapper label={t('details.details-form.visible-addresses')}>
            <FormRadioWrapper fieldName="visibleDetailedAddress" />
          </FieldWrapper>
          <FieldWrapper label={t('details.details-form.street')}>
            <FormInputWrapper fieldName="street" />
          </FieldWrapper>
          <FieldWrapper label={t('details.details-form.number')}>
            <FormInputWrapper fieldName="number" />
          </FieldWrapper>
          <FieldWrapper
            label={t('details.details-form.permitted-rent-form')}
            extra={
              <Icon
                id="roundedQuestionMarkIcon"
                className="text-blue-gray h-6 w-6"
              />
            }
          >
            <FormDropdownWrapper
              fieldName="rentFormation"
              dropdownElements={
                isSellPath ? permittedSellInfos : permittedRentInfos
              }
            />
          </FieldWrapper>
          <FieldWrapper label={t('details.details-form.build-year')}>
            <FormInputWrapper fieldName="yearBuilt" />
          </FieldWrapper>
          <FieldWrapper label={t('details.details-form.nums-of-floors')}>
            <FormInputWrapper fieldName="floors" />
          </FieldWrapper>
          <FieldWrapper label={t('details.details-form.living-spase')}>
            <FormInputWrapper fieldName="livingAreaM2" />
          </FieldWrapper>
          <FieldWrapper label={t('details.details-form.balcony')}>
            <FormInputWrapper fieldName="balcony" />
          </FieldWrapper>
          <FieldWrapper label={t('details.details-form.terrace')}>
            <FormInputWrapper fieldName="terrace" />
          </FieldWrapper>
          <FieldWrapper label={t('details.details-form.garden')}>
            <FormInputWrapper fieldName="garden" />
          </FieldWrapper>
          <FieldWrapper label={t('details.details-form.heating-type')}>
            <FormInputWrapper fieldName="heating" />
          </FieldWrapper>
          <FieldWrapper label={t('condition')}>
            <FormInputWrapper fieldName="condition" />
          </FieldWrapper>
          <FieldWrapper label={t('details.details-form.energy-certificate')}>
            <FormInputWrapper fieldName="energyCertificate" />
          </FieldWrapper>
          <FieldWrapper label="HBW">
            <FormInputWrapper fieldName="HBW" />
          </FieldWrapper>
          <FieldWrapper label={t('details.details-form.HBW-energy-class')}>
            <FormInputWrapper fieldName="HBWEnergyClass" />
          </FieldWrapper>
          <FieldWrapper label="fGEE">
            <FormInputWrapper fieldName="fGEE" />
          </FieldWrapper>
          <FieldWrapper label={t('details.details-form.fGEE-energy-class')}>
            <FormInputWrapper fieldName="fGEEEnergyClass" />
          </FieldWrapper>
          <FieldWrapper label={t('details.details-form.cellar')}>
            <FormRadioWrapper fieldName="cellar" />
          </FieldWrapper>
          <FieldWrapper label={t('details.details-form.price')}>
            <FormInputWrapper fieldName="price" />
          </FieldWrapper>
          {isSellPath && (
            <FieldWrapper label={t('details.details-form.park-place-price')}>
              <FormInputWrapper fieldName="parkPlacePrice" />
            </FieldWrapper>
          )}
          <FieldWrapper label={t('details.details-form.park-place')}>
            <FormDropdownWrapper
              fieldName="garage"
              dropdownElements={parkingTypes}
            />
          </FieldWrapper>
          <FieldWrapper label={t('details.details-form.rooms')}>
            <Field name="rooms">
              {({ field, form }: FieldProps) => (
                <div
                  id="rooms"
                  className="text-charcoal flex items-center gap-1.5 py-3"
                >
                  <Icon
                    id="roundedSmallMinusIcon"
                    className="text-blue-gray h-6 w-6 cursor-pointer"
                    onClick={() => {
                      form.setFieldValue(
                        'rooms',
                        field.value <= 1 ? 1 : field.value - 1
                      )
                    }}
                  />
                  {field.value}
                  <Icon
                    id="roundedSmallPlusIcon"
                    className="text-blue-gray h-6 w-6 cursor-pointer"
                    onClick={() => {
                      form.setFieldValue('rooms', field.value + 1)
                    }}
                  />
                </div>
              )}
            </Field>
          </FieldWrapper>
          <FieldWrapper label="WC">
            <FormInputWrapper fieldName="bathroomsTotal" />
          </FieldWrapper>
          <FieldWrapper label={t('details.details-form.state')}>
            <FormDropdownWrapper
              fieldName="state"
              dropdownElements={stateTypes}
            />
          </FieldWrapper>
          <FieldWrapper label={t('details.details-form.net-operation-costs')}>
            <FormInputWrapper fieldName="netOperationCosts" />
          </FieldWrapper>
          <FieldWrapper label={t('details.details-form.broker-commissions')}>
            <FormInputWrapper fieldName="brokerCommissions" />
          </FieldWrapper>
          <FieldWrapper
            label={t('details.details-form.broker-commissions-percentage')}
          >
            <FormInputWrapper fieldName="brokerCommissionsPercentage" />
          </FieldWrapper>
          <FieldWrapper label={t('details.details-form.property-descriptions')}>
            <Field name="propertyDescriptions">
              {({ field, meta }: FieldProps) => (
                <TextArea
                  {...field}
                  rows={8}
                  placeholder={t('details.details-form.placeholder')}
                  id="propertyDescriptions"
                  error={meta.touched && meta.error ? meta.error : undefined}
                  errorPosition="bottom"
                />
              )}
            </Field>
          </FieldWrapper>
          <FieldWrapper label={t('details.details-form.location-descriptions')}>
            <Field name="locationDescriptions">
              {({ field, meta }: FieldProps) => (
                <TextArea
                  {...field}
                  rows={8}
                  placeholder={t('details.details-form.placeholder')}
                  id="locationDescriptions"
                  error={meta.touched && meta.error ? meta.error : undefined}
                  errorPosition="bottom"
                />
              )}
            </Field>
          </FieldWrapper>
          <FieldWrapper label={t('details.details-form.coordinates')}>
            <div className="flex gap-3">
              <FormInputWrapper fieldName="addressLng" placeholder="48.2082" />
              <FormInputWrapper fieldName="addressLat" placeholder="16.3738" />
              <Button
                className="bg-charcoal hover:bg-seafoam-green h-12 min-w-12 p-3 text-white"
                onClick={() => setOpenMap(true)}
              >
                <Icon
                  id="navigateMarkerIcon"
                  className="h-6 w-6 text-white"
                  onClick={() => setOpenMap(true)}
                />
              </Button>
            </div>
          </FieldWrapper>
          <FieldWrapper
            label={t('details.details-form.photos')}
            className="items-start rounded-lg pt-3 lg:pt-[5.625rem]"
          >
            <div className="grid grid-cols-2 gap-5 pt-3 lg:gap-10">
              {imgs.map((image, index) => (
                <div
                  key={image + index}
                  className="relative h-full"
                  onPointerEnter={() => {
                    setCurrImageIdx(index)
                  }}
                  onPointerLeave={() => {
                    setCurrImageIdx(null)
                  }}
                >
                  <span
                    className={cn(
                      'bg-light-gray2 absolute top-2 right-2 cursor-pointer rounded-md opacity-100 transition-all duration-300 lg:opacity-0',
                      {
                        'transition-all duration-300 lg:opacity-100':
                          currImageIdx === index,
                      }
                    )}
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      setImgs((state) =>
                        state.filter((_, idx) => idx !== index)
                      )
                    }}
                  >
                    <Icon id="deleteIcon" className="text-red h-6 w-6" />
                  </span>
                  <img
                    src={image}
                    alt={image + index}
                    style={{
                      height:
                        width < BREAKPOINTS.MD
                          ? '30vw'
                          : width < BREAKPOINTS.LG
                            ? '20vw'
                            : '',
                    }}
                    className="h-[7.5rem] max-h-full min-h-[6.5625rem] w-full cursor-pointer justify-center rounded-lg object-cover lg:object-center"
                  />
                </div>
              ))}
              <div className="bg-gray flex max-h-full min-h-[6.5625rem] w-full cursor-pointer items-center justify-center rounded-lg lg:h-[7.5rem]">
                <FileUpload
                  isMultiple
                  className="bg-transparent hover:bg-transparent hover:outline-0 focus:border-0 z-1000"
                  buttonTitle={
                    <Icon
                      id="roundedPlusIcon"
                      className="text-blue-gray h-12 w-12 cursor-pointer"
                    />
                  }
                  callback={async (files) => {
                    if (Array.isArray(files)) {
                      const res = await uploadImages({
                        urlsArr: files,
                      })
                      if (res) {
                        setImgs((state) => [...state, ...res])
                        setFieldValue('images', files)
                      }
                    }
                  }}
                />
              </div>
            </div>
          </FieldWrapper>
          {children}
          <Modal open={openMap} setOpen={setOpenMap}>
            <Map
              className="h-[80vh] 2xl:h-[50vh]"
              loading={false}
              data={[1]}
              ref={mapRef}
              onClick={(e) => {
                setFieldValue('addressLng', e.lngLat.lng.toFixed(5))
                setFieldValue('addressLat', e.lngLat.lat.toFixed(5))
                setOpenMap(false)
              }}
            >
              <></>
            </Map>
          </Modal>
        </Form>
      )}
    </Formik>
  )
}
