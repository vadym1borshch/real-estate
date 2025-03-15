import { useTranslation } from 'react-i18next'
import { Field, FieldProps, Form, Formik } from 'formik'
import Input from '../../../../../components/atoms/input'
import { ReactNode } from 'react'
import Dropdown from '../../../../../components/atoms/dropdown'
import RadioButton from '../../../../../components/atoms/radio-button'
import TextArea from '../../../../../components/atoms/text-area'
import Button from '../../../../../components/atoms/button'
import { cn } from '../../../../../helpers/ui.ts'
import Icon from '../../../../../components/atoms/icon'

export const DetailPage = () => {
  const { t } = useTranslation()
  return (
    <Formik
      initialValues={{
        object: '',
        title: '',
        country: '',
        city: '',
        postCode: '',
        visibleAddresses: false,
        street: '',
        number: '',
        permittedRentInfo: '',
        buildYear: '',
        numsOfFloors: '',
        livingSpase: '',
        balcony: '',
        terrace: '',
        garden: '',
        heatingType: '',
        energyCertificate: '',
        HBW: '',
        HBWEnergyClass: '',
        fGEE: '',
        fGEEEnergyClass: '',
        cellar: false,
        price: '',
        parkPlacePrice: '',
        parkPlace: '',
        rooms: 1,
        WC: '',
        storage: '',
        netOperationCosts: '',
        brokerCommissions: '',
        brokerCommissionsPercentage: '',
        propertyDescriptions: '',
        locationDescriptions: '',
        latitude: '',
        longitude: '',
        photos: [],
      }}
      onSubmit={async (_values, { resetForm }) => {
        /* handleSubmit(values)*/
        resetForm()
      }}
      /*  validationSchema={useValidationSchema()}*/
    >
      {({ isValid, dirty }) => (
        <Form className="flex w-full flex-col gap-3">
          <FieldWrapper label="Object">
            <Field name="object">
              {({ field, meta }: FieldProps) => (
                <Dropdown
                  label="Wählen Sie"
                  open={false}
                  setOpen={() => {}}
                  id="object"
                  variant="outlined"
                  withIcon
                  triggerButtonClassName="min-h-[48px] w-full"
                >
                  <div>options</div>
                </Dropdown>
              )}
            </Field>
          </FieldWrapper>
          <FieldWrapper label="Tilte">
            <Field name="title">
              {({ field, meta }: FieldProps) => (
                <Input
                  {...field}
                  placeholder="Sie müssen den Text eingeben"
                  id="title"
                  error={meta.touched && meta.error ? meta.error : undefined}
                  className="placeholder-gray min-h-[48px]"
                  errorPosition="bottom"
                />
              )}
            </Field>
          </FieldWrapper>
          <FieldWrapper label="Country">
            <Field name="country">
              {({ field, meta }: FieldProps) => (
                <Dropdown
                  label="Wählen Sie"
                  open={false}
                  setOpen={() => {}}
                  id="country"
                  variant="outlined"
                  withIcon
                  triggerButtonClassName="min-h-[48px] w-full"
                >
                  <div>options</div>
                </Dropdown>
              )}
            </Field>
          </FieldWrapper>
          <FieldWrapper label="City">
            <Field name="city">
              {({ field, meta }: FieldProps) => (
                <Input
                  {...field}
                  placeholder="Sie müssen den Text eingeben"
                  id="city"
                  error={meta.touched && meta.error ? meta.error : undefined}
                  className="placeholder-gray min-h-[48px]"
                  errorPosition="bottom"
                />
              )}
            </Field>
          </FieldWrapper>
          <FieldWrapper label="Post code">
            <Field name="postCode">
              {({ field, meta }: FieldProps) => (
                <Input
                  {...field}
                  placeholder="Sie müssen den Text eingeben"
                  id="postCode"
                  error={meta.touched && meta.error ? meta.error : undefined}
                  className="placeholder-gray min-h-[48px]"
                  errorPosition="bottom"
                />
              )}
            </Field>
          </FieldWrapper>
          <FieldWrapper label="Visible Addresses">
            <Field name="postCode">
              {({ field, meta }: FieldProps) => (
                <div className="flex items-center gap-6 py-3">
                  <RadioButton
                    label="Yes"
                    name="visibleAddresses"
                    value="Yes"
                    checked={false}
                    onChange={() => {}}
                  />
                  <RadioButton
                    label="No"
                    name="visibleAddresses"
                    value="No"
                    checked={true}
                    onChange={() => {}}
                  />
                </div>
              )}
            </Field>
          </FieldWrapper>
          <FieldWrapper label="Street">
            <Field name="street">
              {({ field, meta }: FieldProps) => (
                <Input
                  {...field}
                  placeholder="Sie müssen den Text eingeben"
                  id="street"
                  error={meta.touched && meta.error ? meta.error : undefined}
                  className="placeholder-gray min-h-[48px]"
                  errorPosition="bottom"
                />
              )}
            </Field>
          </FieldWrapper>
          <FieldWrapper label="Number">
            <Field name="number">
              {({ field, meta }: FieldProps) => (
                <Input
                  {...field}
                  placeholder="Sie müssen den Text eingeben"
                  id="number"
                  error={meta.touched && meta.error ? meta.error : undefined}
                  className="placeholder-gray min-h-[48px]"
                  errorPosition="bottom"
                />
              )}
            </Field>
          </FieldWrapper>
          <FieldWrapper label="Permitted rent formation" extra="icon">
            <Field name="permittedRentInfo">
              {({ field, meta }: FieldProps) => (
                <Dropdown
                  label="Wählen Sie"
                  open={false}
                  setOpen={() => {}}
                  id="permittedRentInfo"
                  variant="outlined"
                  withIcon
                  triggerButtonClassName="min-h-[48px] w-full"
                >
                  <div>options</div>
                </Dropdown>
              )}
            </Field>
          </FieldWrapper>
          <FieldWrapper label="Year of construction of the house">
            <Field name="buildYear">
              {({ field, meta }: FieldProps) => (
                <Input
                  {...field}
                  placeholder="Sie müssen den Text eingeben"
                  id="buildYear"
                  error={meta.touched && meta.error ? meta.error : undefined}
                  className="placeholder-gray min-h-[48px]"
                  errorPosition="bottom"
                />
              )}
            </Field>
          </FieldWrapper>
          <FieldWrapper label="Number of floors">
            <Field name="numsOfFloors">
              {({ field, meta }: FieldProps) => (
                <Input
                  {...field}
                  placeholder="Sie müssen den Text eingeben"
                  id="numsOfFloors"
                  error={meta.touched && meta.error ? meta.error : undefined}
                  className="placeholder-gray min-h-[48px]"
                  errorPosition="bottom"
                />
              )}
            </Field>
          </FieldWrapper>
          <FieldWrapper label="Living space (m2)">
            <Field name="livingSpase">
              {({ field, meta }: FieldProps) => (
                <Input
                  {...field}
                  placeholder="Sie müssen den Text eingeben"
                  id="livingSpase"
                  error={meta.touched && meta.error ? meta.error : undefined}
                  className="placeholder-gray min-h-[48px]"
                  errorPosition="bottom"
                />
              )}
            </Field>
          </FieldWrapper>
          <FieldWrapper label="Balcony (m2)">
            <Field name="balcony">
              {({ field, meta }: FieldProps) => (
                <Input
                  {...field}
                  placeholder="Sie müssen den Text eingeben"
                  id="balcony"
                  error={meta.touched && meta.error ? meta.error : undefined}
                  className="placeholder-gray min-h-[48px]"
                  errorPosition="bottom"
                />
              )}
            </Field>
          </FieldWrapper>
          <FieldWrapper label="Terrace (m2)">
            <Field name="terrace">
              {({ field, meta }: FieldProps) => (
                <Input
                  {...field}
                  placeholder="Sie müssen den Text eingeben"
                  id="terrace"
                  error={meta.touched && meta.error ? meta.error : undefined}
                  className="placeholder-gray min-h-[48px]"
                  errorPosition="bottom"
                />
              )}
            </Field>
          </FieldWrapper>
          <FieldWrapper label="Garden (m2)">
            <Field name="garden">
              {({ field, meta }: FieldProps) => (
                <Input
                  {...field}
                  placeholder="Sie müssen den Text eingeben"
                  id="garden"
                  error={meta.touched && meta.error ? meta.error : undefined}
                  className="placeholder-gray min-h-[48px]"
                  errorPosition="bottom"
                />
              )}
            </Field>
          </FieldWrapper>
          <FieldWrapper label="Heizungstyp">
            <Field name="heatingType">
              {({ field, meta }: FieldProps) => (
                <Input
                  {...field}
                  placeholder="Sie müssen den Text eingeben"
                  id="heatingType"
                  error={meta.touched && meta.error ? meta.error : undefined}
                  className="placeholder-gray min-h-[48px]"
                  errorPosition="bottom"
                />
              )}
            </Field>
          </FieldWrapper>
          <FieldWrapper label="Energy certificate valid until">
            <Field name="energyCertificate">
              {({ field, meta }: FieldProps) => (
                <Input
                  {...field}
                  placeholder="Sie müssen den Text eingeben"
                  id="energyCertificate"
                  error={meta.touched && meta.error ? meta.error : undefined}
                  className="placeholder-gray min-h-[48px]"
                  errorPosition="bottom"
                />
              )}
            </Field>
          </FieldWrapper>
          <FieldWrapper label="HBW">
            <Field name="HBW">
              {({ field, meta }: FieldProps) => (
                <Input
                  {...field}
                  placeholder="Sie müssen den Text eingeben"
                  id="HBW"
                  error={meta.touched && meta.error ? meta.error : undefined}
                  className="placeholder-gray min-h-[48px]"
                  errorPosition="bottom"
                />
              )}
            </Field>
          </FieldWrapper>
          <FieldWrapper label="HBW energy class">
            <Field name="HBWEnergyClass">
              {({ field, meta }: FieldProps) => (
                <Input
                  {...field}
                  placeholder="Sie müssen den Text eingeben"
                  id="HBWEnergyClass"
                  error={meta.touched && meta.error ? meta.error : undefined}
                  className="placeholder-gray min-h-[48px]"
                  errorPosition="bottom"
                />
              )}
            </Field>
          </FieldWrapper>
          <FieldWrapper label="fGEE">
            <Field name="fGEE">
              {({ field, meta }: FieldProps) => (
                <Input
                  {...field}
                  placeholder="Sie müssen den Text eingeben"
                  id="fGEE"
                  error={meta.touched && meta.error ? meta.error : undefined}
                  className="placeholder-gray min-h-[48px]"
                  errorPosition="bottom"
                />
              )}
            </Field>
          </FieldWrapper>
          <FieldWrapper label="fGEE energy class">
            <Field name="fGEEEnergyClass">
              {({ field, meta }: FieldProps) => (
                <Input
                  {...field}
                  placeholder="Sie müssen den Text eingeben"
                  id="fGEEEnergyClass"
                  error={meta.touched && meta.error ? meta.error : undefined}
                  className="placeholder-gray min-h-[48px]"
                  errorPosition="bottom"
                />
              )}
            </Field>
          </FieldWrapper>
          <FieldWrapper label="Cellar">
            <Field name="postCode">
              {({ field, meta }: FieldProps) => (
                <div className="flex items-center gap-6 py-3">
                  <RadioButton
                    label="Yes"
                    name="cellar"
                    value="Yes"
                    checked={false}
                    onChange={() => {}}
                  />
                  <RadioButton
                    label="No"
                    name="cellar"
                    value="No"
                    checked={true}
                    onChange={() => {}}
                  />
                </div>
              )}
            </Field>
          </FieldWrapper>
          <FieldWrapper label="Purchase price">
            <Field name="price">
              {({ field, meta }: FieldProps) => (
                <Input
                  {...field}
                  placeholder="Sie müssen den Text eingeben"
                  id="price"
                  error={meta.touched && meta.error ? meta.error : undefined}
                  className="placeholder-gray min-h-[48px]"
                  errorPosition="bottom"
                />
              )}
            </Field>
          </FieldWrapper>
          <FieldWrapper label="Purchase price parking space">
            <Field name="parkPlacePrice">
              {({ field, meta }: FieldProps) => (
                <Input
                  {...field}
                  placeholder="Sie müssen den Text eingeben"
                  id="parkPlacePrice"
                  error={meta.touched && meta.error ? meta.error : undefined}
                  className="placeholder-gray min-h-[48px]"
                  errorPosition="bottom"
                />
              )}
            </Field>
          </FieldWrapper>
          <FieldWrapper label="Park place" infoIcon>
            <Field name="parkPlace">
              {({ field, meta }: FieldProps) => (
                <Dropdown
                  label="Wählen Sie"
                  open={false}
                  setOpen={() => {}}
                  id="parkPlace"
                  variant="outlined"
                  withIcon
                  triggerButtonClassName="min-h-[48px] w-full"
                >
                  <div>options</div>
                </Dropdown>
              )}
            </Field>
          </FieldWrapper>
          <FieldWrapper label="Rooms">
            <Field name="rooms">
              {({ field, meta }: FieldProps) => (
                <div id="rooms" className="flex gap-1.5 py-3">
                  <span>-</span>
                  {field.value}
                  <span>+</span>
                </div>
              )}
            </Field>
          </FieldWrapper>
          <FieldWrapper label="WC">
            <Field name="WC">
              {({ field, meta }: FieldProps) => (
                <Input
                  {...field}
                  placeholder="Sie müssen den Text eingeben"
                  id="WC"
                  error={meta.touched && meta.error ? meta.error : undefined}
                  className="placeholder-gray min-h-[48px]"
                  errorPosition="bottom"
                />
              )}
            </Field>
          </FieldWrapper>
          <FieldWrapper label="Storage" extra="icon">
            <Field name="storage">
              {({ field, meta }: FieldProps) => (
                <Dropdown
                  label="Wählen Sie"
                  open={false}
                  setOpen={() => {}}
                  id="storage"
                  variant="outlined"
                  withIcon
                  triggerButtonClassName="min-h-[48px] w-full"
                >
                  <div>options</div>
                </Dropdown>
              )}
            </Field>
          </FieldWrapper>
          <FieldWrapper label="Net operating costs">
            <Field name="netOperationCosts">
              {({ field, meta }: FieldProps) => (
                <Input
                  {...field}
                  placeholder="Sie müssen den Text eingeben"
                  id="netOperationCosts"
                  error={meta.touched && meta.error ? meta.error : undefined}
                  className="placeholder-gray min-h-[48px]"
                  errorPosition="bottom"
                />
              )}
            </Field>
          </FieldWrapper>
          <FieldWrapper label="Brokerage commission">
            <Field name="brokerCommissions">
              {({ field, meta }: FieldProps) => (
                <Input
                  {...field}
                  placeholder="Sie müssen den Text eingeben"
                  id="brokerCommissions"
                  error={meta.touched && meta.error ? meta.error : undefined}
                  className="placeholder-gray min-h-[48px]"
                  errorPosition="bottom"
                />
              )}
            </Field>
          </FieldWrapper>
          <FieldWrapper label="Brokerage commission" extra="(%)">
            <Field name="brokerCommissionsPercentage">
              {({ field, meta }: FieldProps) => (
                <Input
                  {...field}
                  placeholder="Sie müssen den Text eingeben"
                  id="brokerCommissionsPercentage"
                  error={meta.touched && meta.error ? meta.error : undefined}
                  className="placeholder-gray min-h-[48px]"
                  errorPosition="bottom"
                />
              )}
            </Field>
          </FieldWrapper>
          <FieldWrapper label="Description of the property">
            <Field name="propertyDescriptions">
              {({ field, meta }: FieldProps) => (
                <TextArea
                  {...field}
                  rows={8}
                  placeholder="Sie müssen den Text eingeben"
                  id="propertyDescriptions"
                  error={meta.touched && meta.error ? meta.error : undefined}
                  className="placeholder-gray min-h-[48px]"
                  errorPosition="bottom"
                />
              )}
            </Field>
          </FieldWrapper>
          <FieldWrapper label="Description of the location">
            <Field name="locationDescriptions">
              {({ field, meta }: FieldProps) => (
                <TextArea
                  {...field}
                  rows={8}
                  placeholder="Sie müssen den Text eingeben"
                  id="locationDescriptions"
                  error={meta.touched && meta.error ? meta.error : undefined}
                  className="placeholder-gray min-h-[48px]"
                  errorPosition="bottom"
                />
              )}
            </Field>
          </FieldWrapper>
          <FieldWrapper label="Latitude and longitude">
            <div className="flex gap-3">
              <Field name="latitude">
                {({ field, meta }: FieldProps) => (
                  <Input
                    {...field}
                    placeholder="48.2082"
                    id="latitude"
                    error={meta.touched && meta.error ? meta.error : undefined}
                    className="placeholder-gray min-h-[48px]"
                    errorPosition="bottom"
                  />
                )}
              </Field>
              <Field name="longitude">
                {({ field, meta }: FieldProps) => (
                  <Input
                    {...field}
                    placeholder="16.3738"
                    id="longitude"
                    error={meta.touched && meta.error ? meta.error : undefined}
                    className="placeholder-gray min-h-[48px]"
                    errorPosition="bottom"
                  />
                )}
              </Field>
              <Button className="bg-charcoal hover:bg-seafoam-green h-[48px] w-[48px] text-white">
                M
              </Button>
            </div>
          </FieldWrapper>
          <FieldWrapper
            label="Add photos"
            className="items-start rounded-lg pt-[5.625rem]"
          >
            <div className="bg-gray flex h-[7.5rem] w-[10rem] cursor-pointer items-center justify-center rounded-lg">
              <Icon
                id="roundedPlusIcon"
                className="text-blue-gray h-[48px] w-[48px] cursor-pointer"
              />
            </div>
          </FieldWrapper>
          <div className="flex flex-col gap-3 pt-[5.625rem] md:flex-row">
            <Button size="sm" className="w-full md:w-fit">
              Speichern Sie
            </Button>
            <Button
              size="sm"
              className="bg-charcoal hover:bg-seafoam-green w-full text-white md:w-fit"
            >
              Nächste Seite
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export const FieldWrapper = ({
  children,
  label,
  extra,
  className,
}: {
  children: ReactNode
  label: string
  extra?: ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 items-center gap-1.5 md:grid-cols-2',
        className
      )}
    >
      <label className="flex w-full gap-3">
        {label} {extra ? <span>{extra}</span> : null}
      </label>
      {children}
    </div>
  )
}
