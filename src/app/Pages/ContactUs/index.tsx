import H2 from '../../../components/atoms/typography/h2'
import { useTranslation } from 'react-i18next'
import {
  Formik,
  Form,
  Field,
  /*  FormikValues,
    FormikErrors,*/
  FieldProps,
} from 'formik'
import Input from '../../../components/atoms/input'
import TextArea from '../../../components/atoms/text-area'
import Checkbox from '../../../components/atoms/checkbox'
import Button from '../../../components/atoms/button'
import Modal from '../../../components/molecules/modal'
import { useState } from 'react'
import { useValidationSchema } from './validation.ts'

export const ContactUsPage = () => {
  const { t } = useTranslation()
  const [openModal, setOpenModal] = useState(false)

  const handleSubmit = (
    // leave for next use params
    /*    values: FormikValues,
        errors?: FormikErrors<FormikValues>*/
  ) => {
    setOpenModal(true)
  }

  return (
    <div className="flex w-full max-w-[72.5rem] flex-col items-center">
      <div className="flex w-full max-w-[47.5rem] flex-col items-center">
        <H2 text={t('contact-us.title')} className="text-center" />
        <p className="mt-6 mb-[5.625rem] text-center">
          {t('contact-us.descriptions')}
        </p>
      </div>
      <div className="grid w-full grid-cols-1 gap-10 pb-[9.375rem] md:grid-cols-[2fr_1fr]">
        <Formik
          initialValues={{
            name: '',
            lastName: '',
            email: '',
            phone: '',
            message: '',
            agree: false,
          }}
          onSubmit={async (_values, { resetForm }) => {
            /* handleSubmit(values)*/
            resetForm()
          }}
          validationSchema={useValidationSchema()}
        >
          {({ isValid, dirty }) => (
            <Form className="flex w-full flex-col gap-3">
              <div className="flex flex-col gap-4 md:flex-row md:gap-10">
                <Field name={'name'}>
                  {({ field, meta }: FieldProps) => (
                    <Input
                      {...field}
                      placeholder="John"
                      label={`${t('contact-us.form.name')} *`}
                      id="email"
                      error={
                        meta.touched && meta.error ? meta.error : undefined
                      }
                      className="placeholder-gray min-h-[48px]"
                      errorPosition="bottom"
                    />
                  )}
                </Field>
                <Field name={'lastName'}>
                  {({ field, meta }: FieldProps) => (
                    <Input
                      {...field}
                      placeholder="Smith"
                      label={`${t('contact-us.form.last-name')} *`}
                      id="lastName"
                      error={
                        meta.touched && meta.error ? meta.error : undefined
                      }
                      className="placeholder-gray min-h-[48px]"
                      errorPosition="bottom"
                    />
                  )}
                </Field>
              </div>
              <div className="flex flex-col gap-4 md:flex-row md:gap-10">
                <Field name={'email'}>
                  {({ field, meta }: FieldProps) => (
                    <Input
                      {...field}
                      placeholder="johnsmith@email.at"
                      label={`${t('contact-us.form.email')} *`}
                      id="email"
                      error={
                        meta.touched && meta.error ? meta.error : undefined
                      }
                      className="placeholder-gray min-h-[48px]"
                      errorPosition="bottom"
                    />
                  )}
                </Field>
                <Field name={'phone'}>
                  {({ field, meta }: FieldProps) => (
                    <Input
                      {...field}
                      placeholder="+43 676 920 74 99"
                      label={`${t('contact-us.form.tel')} *`}
                      id="phone"
                      error={
                        meta.touched && meta.error ? meta.error : undefined
                      }
                      className="placeholder-gray min-h-[48px]"
                      errorPosition="bottom"
                    />
                  )}
                </Field>
              </div>
              <Field name={'message'}>
                {({ field, meta }: FieldProps) => (
                  <TextArea
                    {...field}
                    placeholder={t('contact-us.form.message-placeholder')}
                    label={`${t('contact-us.form.message')} *`}
                    id="message"
                    error={meta.touched && meta.error ? meta.error : undefined}
                    className="placeholder-gray min-h-[48px]"
                    errorPosition="bottom"
                  />
                )}
              </Field>
              <div className="w-full">
                <Field name={'agree'}>
                  {({ field, form }: FieldProps) => (
                    <span className="mt-3 mb-6 flex w-full items-center gap-1.5">
                      <Checkbox
                        {...field}
                        checked={field.value}
                        setChecked={(v) => form.setFieldValue('agree', v)}
                      />
                      {t('contact-us.form.agree-terms')}
                    </span>
                  )}
                </Field>

                <Button
                  onClick={() => handleSubmit()}
                  type="submit"
                  disabled={!isValid || !dirty}
                >
                  {t('contact-us.form.send')}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
        <div className="mt-6 flex flex-col items-center gap-6 md:items-start">
          <p className="text-center md:text-start">
            {t('contact-us.assistance.descriptions')}
          </p>
          <div className="flex flex-col items-center md:items-start">
            <h5 className="font-600"> {t('contact-us.assistance.address')}</h5>
            <span>Fylpi Immo-online GmbH</span>
            <span>Forchheimergasse 3/13</span>
            <span>1230 Wien</span>
            <span>Österreich</span>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h5 className="font-600">{t('contact-us.assistance.email')}</h5>
            <span>office@fylpi.at</span>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h5 className="font-600">
              {' '}
              {t('contact-us.assistance.open-hours')}
            </h5>
            <span>
              {t('contact-us.assistance.mon-to-fri', { value: '9:00 - 18:00' })}
            </span>
            <span>
              {t('contact-us.assistance.sat', { value: '10:00 - 14:00' })}
            </span>
            <span>{t('contact-us.assistance.sun')}</span>
          </div>
        </div>
      </div>
      <Modal
        open={openModal}
        setOpen={setOpenModal}
        title={t('contact-us.modal.title')}
        className="max-w-[35rem]"
      >
        <p className="text-center">{t('contact-us.modal.message')}</p>
      </Modal>
    </div>
  )
}
