import H3 from '../../../components/atoms/typography/h3'
import Icon from '../../../components/atoms/icon'
import { Field, FieldProps, Form, Formik } from 'formik'
import { Trans, useTranslation } from 'react-i18next'
import { setUser } from '../../../store/userSlice'
import Input from '../../../components/atoms/input'
import Checkbox from '../../../components/atoms/checkbox'
import Button from '../../../components/atoms/button'
import { realEstateAgents } from '../ServiceAround/mock.ts'
import { useAppDispatch } from '../../../store'
import { useNavigate } from '../../../helpers/hooks/useNavigate.ts'
import { ROUTES } from '../../../@constants/routes.ts'
import { useValidationRegisterSchema } from './validation.ts'

const agent = realEstateAgents[0]

export const RegisterPage = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  return (
    <div className="w-full max-w-[22.5rem] pt-[6.8125rem]">
      <div className="flex items-center justify-between pb-10">
        <H3 text={t('register.title')} />
        <span className="text-gray flex items-center">
          {t('login.form.connection-secure')}
          <Icon id="lockIcon" className="h-[24px] w-[24px]" />
        </span>
      </div>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          termsOfUse: false,
        }}
        onSubmit={() => {
          navigate(ROUTES.confirmRegister)
          dispatch(setUser(agent))
        }}
        validationSchema={useValidationRegisterSchema()}
      >
        {({ isValid, dirty, values }) => (
          <Form className="flex w-full flex-col gap-3">
            <Field name="firstName">
              {({ field, meta }: FieldProps) => (
                <Input
                  {...field}
                  placeholder="John"
                  label={t('register.form.first-name')}
                  id="firstName"
                  error={meta.touched && meta.error ? meta.error : undefined}
                  className="min-h-[48px]"
                />
              )}
            </Field>{' '}
            <Field name="lastName">
              {({ field, meta }: FieldProps) => (
                <Input
                  {...field}
                  placeholder="Smith"
                  label={t('register.form.last-name')}
                  id="lastName"
                  error={meta.touched && meta.error ? meta.error : undefined}
                  className="min-h-[48px]"
                />
              )}
            </Field>{' '}
            <Field name="email">
              {({ field, meta }: FieldProps) => (
                <Input
                  {...field}
                  placeholder="johnsmith@email.at"
                  label={t('register.form.email')}
                  id="email"
                  error={meta.touched && meta.error ? meta.error : undefined}
                  className="min-h-[48px]"
                />
              )}
            </Field>
            <Field name="password">
              {({ field, meta }: FieldProps) => (
                <Input
                  {...field}
                  placeholder="************"
                  type="password"
                  label={t('register.form.password')}
                  id="password"
                  error={meta.touched && meta.error ? meta.error : undefined}
                  className="min-h-[48px]"
                />
              )}
            </Field>
            <div className="my-3 flex items-center">
              <Field name="termsOfUse">
                {({ field, form }: FieldProps) => (
                  <span
                    className="flex w-full cursor-pointer items-center gap-1.5"
                    onClick={() => {
                      form.setFieldValue('termsOfUse', !field.value)
                    }}
                  >
                    <Checkbox
                      {...field}
                      checked={field.value}
                      setChecked={(v) => {
                        form.setFieldValue('termsOfUse', v)
                      }}
                      className="self-start"
                    />
                    <span className="text-xs">
                      <Trans
                        i18nKey="register.form.terms-agree"
                        components={{
                          span: (
                            <span
                              className="text-coral hover:text-light-coral cursor-pointer text-xs transition-all duration-300"
                              onClick={(e) => {
                                e.stopPropagation()
                                e.preventDefault()
                                navigate(ROUTES.termsOfUse)
                              }}
                            />
                          ),
                        }}
                      />
                    </span>
                  </span>
                )}
              </Field>
            </div>
            <Button
              type="submit"
              className="w-full"
              disabled={!isValid || !dirty || !values.termsOfUse}
            >
              {t('buttons.register')}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
