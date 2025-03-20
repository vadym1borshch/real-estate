import { useRef, useState } from 'react'
import { Field, FieldProps, Formik } from 'formik'
import { useTranslation } from 'react-i18next'
import TextArea from '../../../../../components/atoms/text-area'
import Button from '../../../../../components/atoms/button'
import Icon from '../../../../../components/atoms/icon'
import {
  countries,
  initialValuesForm,
  objectsTypes,
  parkingTypes,
  permittedRentInfos,
  permittedSellInfos,
  stateTypes,
} from './common.ts'
import {
  FieldWrapper,
  FormDropdownWrapper,
  FormInputWrapper,
  FormRadioWrapper,
  MainFormWrapper,
} from './Wrappers.tsx'
import Modal from '../../../../../components/molecules/modal'
import Map from '../../../../../components/organisms/map'
import { MapRef } from 'react-map-gl'
import FileUpload from '../../../../../utils/FileUpload.tsx'
import { usePathname } from '../../../../../helpers/hooks/usePathname.ts'
import { ADS_ROUTES } from '../../../../../@constants/routes.ts'

export const DetailPage = () => {
  const { t } = useTranslation()
  const [openMap, setOpenMap] = useState(false)
  const [images, setImages] = useState<string[]>([])
  const mapRef = useRef<MapRef | null>(null)
  const path = usePathname()

  const isSellPath = path.includes(ADS_ROUTES.sellAds)

  return (
    <Formik
      initialValues={initialValuesForm}
      onSubmit={async (_values, { resetForm }) => {
        /* handleSubmit(values)*/
        /* console.log(_values)*/
        resetForm()
      }}
      /*  validationSchema={useValidationSchema()}*/
    >
      {({ setFieldValue }) => (
        <MainFormWrapper
          saveButtonHandler={() => setImages([])}
          nextPageButtonHandler={() => {}}
        >
          <FieldWrapper label={t('details.details-form.object')}>
            <FormDropdownWrapper
              fieldName="object"
              dropdownElements={objectsTypes}
            />
          </FieldWrapper>
          <FieldWrapper label={t('details.details-form.title')}>
            <FormInputWrapper fieldName="title" />
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
            <FormRadioWrapper fieldName="visibleAddresses" />
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
                className="text-blue-gray h-[24px] w-[24px]"
              />
            }
          >
            <FormDropdownWrapper
              fieldName="permittedRentForm"
              dropdownElements={
                isSellPath ? permittedSellInfos : permittedRentInfos
              }
            />
          </FieldWrapper>
          <FieldWrapper label={t('details.details-form.build-year')}>
            <FormInputWrapper fieldName="buildYear" />
          </FieldWrapper>
          <FieldWrapper label={t('details.details-form.nums-of-floors')}>
            <FormInputWrapper fieldName="numsOfFloors" />
          </FieldWrapper>
          <FieldWrapper label={t('details.details-form.living-spase')}>
            <FormInputWrapper fieldName="livingSpase" />
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
            <FormInputWrapper fieldName="heatingType" />
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
              fieldName="parkPlace"
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
                    className="text-blue-gray h-[24px] w-[24px] cursor-pointer"
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
                    className="text-blue-gray h-[24px] w-[24px] cursor-pointer"
                    onClick={() => {
                      form.setFieldValue('rooms', field.value + 1)
                    }}
                  />
                </div>
              )}
            </Field>
          </FieldWrapper>
          <FieldWrapper label="WC">
            <FormInputWrapper fieldName="WC" />
          </FieldWrapper>
          <FieldWrapper label={t('details.details-form.state')}>
            <FormDropdownWrapper
              fieldName="storage"
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
              <FormInputWrapper fieldName="latitude" placeholder="48.2082" />
              <FormInputWrapper fieldName="longitude" placeholder="16.3738" />
              <Button
                className="bg-charcoal hover:bg-seafoam-green h-[48px] min-w-[48px] p-3 text-white"
                onClick={() => setOpenMap(true)}
              >
                <Icon
                  id="navigateMarkerIcon"
                  className="h-[24px] w-[24px] text-white"
                  onClick={() => setOpenMap(true)}
                />
              </Button>
            </div>
          </FieldWrapper>
          <FieldWrapper
            label={t('details.details-form.photos')}
            className="items-start rounded-lg pt-[5.625rem]"
          >
            <div className="grid grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] place-items-center gap-10 pt-3">
              {images.map((image, index) => (
                <img
                  key={image + index}
                  src={image}
                  alt={image + index}
                  className="h-[7.5rem] w-[10rem] cursor-pointer items-center justify-center rounded-lg"
                />
              ))}
              <div className="bg-gray flex h-[7.5rem] w-[10rem] cursor-pointer items-center justify-center rounded-lg">
                <FileUpload
                  multiple
                  className="bg-transparent hover:bg-transparent hover:outline-0 focus:border-0"
                  buttonTitle={
                    <Icon
                      id="roundedPlusIcon"
                      className="text-blue-gray h-[48px] w-[48px] cursor-pointer"
                    />
                  }
                  callback={(files) => {
                    if (Array.isArray(files)) {
                      const urls = files.map((file) =>
                        URL.createObjectURL(file)
                      )
                      setImages(urls)
                      setFieldValue('photos', files)
                    }
                  }}
                />
              </div>
            </div>
          </FieldWrapper>
          <Modal open={openMap} setOpen={setOpenMap}>
            <Map
              className="h-[80vh] 2xl:h-[50vh]"
              loading={false}
              data={[1]}
              ref={mapRef}
              onClick={(e) => {
                setFieldValue('longitude', e.lngLat.lng.toFixed(5))
                setFieldValue('latitude', e.lngLat.lat.toFixed(5))
                setOpenMap(false)
              }}
            >
              <></>
            </Map>
          </Modal>
        </MainFormWrapper>
      )}
    </Formik>
  )
}
