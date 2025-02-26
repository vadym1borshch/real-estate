import H2 from '../../../components/atoms/typography/h2'
import { useTranslation } from 'react-i18next'
import { Formik, Form, Field, FormikValues } from 'formik'
import Input from '../../../components/atoms/input'
import TextArea from '../../../components/atoms/text-area'
import * as Yup from 'yup'
import Checkbox from '../../../components/atoms/checkbox'
import Button from '../../../components/atoms/button'

const useValidationSchema = () => {
  const { t } = useTranslation()

  return Yup.object({
    name: Yup.string()
      .min(3, t('validation.message_min', { value: '3' }))
      .required(t('validation.required')),
    lastName: Yup.string()
      .min(3, t('validation.message_min', { value: '3' }))
      .required(t('validation.required')),
    email: Yup.string()
      .email(t('validation.email'))
      .required(t('validation.required')),
    phone: Yup.string()
      .matches(/^[+\d\s]+$/, t('validation.phone'))
      .required(t('validation.required')),
    message: Yup.string()
      .min(10, t('validation.message_min', { value: '10' }))
      .required(t('validation.required')),
    agree: Yup.boolean()
      .oneOf([true], t('validation.required'))
  })
}


export const ContactUsPage = () => {
  const { t } = useTranslation()


  const handleSubmit = (values: FormikValues) => {
    if (!values.agree) {
      console.error("error log");
    } else {

    }
  }



  return (
    <div className="w-full flex flex-col items-center max-w-[1160px]">
      <div className="flex flex-col items-center w-full max-w-[760px]">
        <H2 text={t('contact-us.title')} />
        <p className="text-center mt-6 mb-[90px]">{t('contact-us.descriptions')}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-10 w-full pb-[150px]">
        <Formik
          initialValues={{
            name: '',
            lastName: '',
            email: '',
            phone: '',
            message: '',
            agree: false
          }}
          onSubmit={async (values) => {
            handleSubmit(values)
          }}
          validationSchema={useValidationSchema()}
        >
          {({ errors, touched, values }) => (
            <Form className="flex flex-col w-full gap-3">
              <div className="flex gap-10">
                <Field name={'name'}>
                  {({ field, meta }: any) => (
                    <Input
                      {...field}
                      placeholder="John"
                      label={`${t('contact-us.form.name')} *`}
                      id="email"
                      error={meta.touched && meta.error}
                      className="min-h-[40px]"
                      errorPosition="bottom"
                    />
                  )}
                </Field>
                <Field name={'lastName'}>
                  {({ field, meta }: any) => (
                    <Input
                      {...field}
                      placeholder="Smith"
                      label={`${t('contact-us.form.last-name')} *`}
                      id="lastName"
                      error={meta.touched && meta.error}
                      className="min-h-[40px]"
                      errorPosition="bottom"
                    />
                  )}
                </Field>
              </div>
              <div className="flex gap-10">
                <Field name={'email'}>
                  {({ field, meta }: any) => (
                    <Input
                      {...field}
                      placeholder="johnsmith@email.at"
                      label={`${t('contact-us.form.email')} *`}
                      id="email"
                      error={meta.touched && meta.error}
                      className="min-h-[40px]"
                      errorPosition="bottom"
                    />
                  )}
                </Field>
                <Field name={'phone'}>
                  {({ field, meta }: any) => (
                    <Input
                      {...field}
                      placeholder="+43 676 920 74 99"
                      label={`${t('contact-us.form.tel')} *`}
                      id="phone"
                      error={meta.touched && meta.error}
                      className="min-h-[40px]"
                      errorPosition="bottom"
                    />
                  )}
                </Field>
              </div>
              <Field name={'message'}>
                {({ field, meta }: any) => (
                  <TextArea
                    {...field}
                    placeholder={t('contact-us.form.message-placeholder')}
                    label={`${t('contact-us.form.message')} *`}
                    id="message"
                    error={meta.touched && meta.error}
                    className="min-h-[40px]"
                    errorPosition="bottom"
                  />
                )}
              </Field>
                <div className="w-full">
                  <span className="w-full flex items-center gap-1.5 mb-6 mt-3">
                    <Field name={'agree'}>
                      {({ field, form }: any) => (
                        <Checkbox
                          {...field}
                          checked={field.value}
                          setChecked={(v) => form.setFieldValue("agree", v)}
                        />
                      )}
                    </Field>
                    {t("contact-us.form.agree-terms")}
                  </span>
                  <Button onClick={()=>handleSubmit(values)} type="submit">
                    {t('contact-us.form.send')}
                  </Button>
              </div>
            </Form>
          )}
        </Formik>
        <div className="mt-6 flex flex-col gap-6">
          <p>
            {t('contact-us.assistance.descriptions')}
          </p>
          <div className="flex flex-col">
            <h5 className="font-600"> {t('contact-us.assistance.address')}</h5>
            <span>Fylpi Immo-online GmbH</span>
            <span>Forchheimergasse 3/13</span>
            <span>1230 Wien</span>
            <span>Österreich</span>
          </div>
          <div className="flex flex-col">
            <h5 className="font-600">{t('contact-us.assistance.email')}</h5>
            <span>office@fylpi.at</span>
          </div>
          <div className="flex flex-col">
            <h5 className="font-600"> {t('contact-us.assistance.open-hours')}</h5>
            <span>{t('contact-us.assistance.mon-to-fri', { value: '9:00 - 18:00' })}</span>
            <span>{t('contact-us.assistance.sat', { value: '10:00 - 14:00' })}</span>
            <span>{t('contact-us.assistance.sun')}</span>
          </div>
        </div>
      </div>
    </div>
  )
}