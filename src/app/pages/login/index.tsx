import { Field, FieldProps, Form, Formik } from 'formik'
import Input from '../../../components/atoms/input'
import { useTranslation } from 'react-i18next'
import Button from '../../../components/atoms/button'
import Checkbox from '../../../components/atoms/checkbox'
import { realEstateAgents } from '../service-around/mock.ts'
import { useAppDispatch, useAppSelector } from '../../../store'
import { setUser } from '../../../store/userSlice'
import { selectUser } from '../../../store/userSlice/selectors.ts'
import { useEffect } from 'react'
import { useNavigate } from '../../../helpers/hooks/useNavigate.ts'
import { ROUTES } from '../../../@constants/routes.ts'
import H3 from '../../../components/atoms/typography/h3'
import Icon from '../../../components/atoms/icon'
import { useValidationLoginSchema } from './validation.ts'

const agent = realEstateAgents[0]

export const LoginPage = () => {
  const { t } = useTranslation()
  const user = useAppSelector(selectUser)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (user) {
      navigate('')
    }
  }, [user])

  return (
    <div className="flex h-[calc(100svh-78px)] lg:h-[calc(100svh-120px)] w-full max-w-[22.5rem] flex-col items-center justify-center">
      <div className="flex items-center justify-between pb-10 w-full">
        <H3 text={t('login.title')} />
        <span className="text-gray flex items-center">
          {t('login.form.connection-secure')}
          <Icon id="lockIcon" className="h-6 w-6" />
        </span>
      </div>
      <Formik
        initialValues={{
          email: '',
          password: '',
          savePassword: false,
        }}
        onSubmit={() => {
          dispatch(setUser(agent))
        }}
        validationSchema={useValidationLoginSchema()}
      >
        {({ isValid, dirty }) => (
          <Form className="flex w-full flex-col gap-3">
            <Field name="email">
              {({ field, meta }: FieldProps) => (
                <Input
                  {...field}
                  placeholder="johnsmith@email.at"
                  label={t('login.form.email')}
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
                  label={t('login.form.password')}
                  id="password"
                  error={meta.touched && meta.error ? meta.error : undefined}
                  className="min-h-[48px]"
                />
              )}
            </Field>
            <div className="my-3 flex items-center">
              <Field name="savePassword">
                {({ field, form }: FieldProps) => (
                  <span
                    className="flex w-full cursor-pointer items-center gap-1.5"
                    onClick={() => {
                      form.setFieldValue('savePassword', !field.value)
                    }}
                  >
                    <Checkbox
                      {...field}
                      checked={field.value}
                      setChecked={(v) => {
                        form.setFieldValue('savePassword', v)
                      }}
                    />
                    {t('login.form.save-password')}
                  </span>
                )}
              </Field>
              <Button
                className="text-coral p-0 text-xs whitespace-nowrap"
                variant="text"
                onClick={() => {
                  navigate(ROUTES.FORGOT_PASSWORD)
                }}
              >
                {t('login.form.forgot-password')}
              </Button>
            </div>
            <Button
              type="submit"
              className="w-full"
              disabled={!isValid || !dirty}
            >
              {t('buttons.login')}
            </Button>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-xs">{t('login.form.no-account')}</span>
              <Button
                className="text-coral p-0"
                variant="text"
                onClick={() => navigate(ROUTES.REGISTER)}
              >
                {t('buttons.register')}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}
