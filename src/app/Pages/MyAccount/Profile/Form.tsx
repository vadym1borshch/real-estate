import { useTranslation } from 'react-i18next'
import { Field, FieldProps, Form, Formik } from 'formik'
import Input from '../../../../components/atoms/input'
import { useValidationSchema } from './validation.ts'
import { Agent } from '../../ServiceAround/mock.ts'
import RadioButton from '../../../../components/atoms/radio-button'
import { useState } from 'react'
import Button from '../../../../components/atoms/button'

type User = 'agency' | 'private'

interface Props {
  user: Agent
}

export const ProfileForm = ({ user }: Props) => {
  const { t } = useTranslation()
  const [userType, setUserType] = useState<User>('private')

  return (
    <Formik
      initialValues={{
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        password: '',
        agency: '',
        city: '',
        province: '',
      }}
      onSubmit={async (_values, { resetForm }) => {
        /* handleSubmit(values)*/
        console.log(_values)
        resetForm()
      }}
      validationSchema={useValidationSchema()}
    >
      {() => (
        <Form className="flex w-full flex-col gap-3">
          <div className="flex flex-col gap-4 md:flex-row md:gap-10">
            <Field name="name">
              {({ field, meta }: FieldProps) => (
                <Input
                  {...field}
                  placeholder="John"
                  label={`${t('profile.form.name')}`}
                  id="name"
                  iconId="editIcon"
                  error={meta.touched && meta.error ? meta.error : undefined}
                  className="placeholder-gray min-h-[48px]"
                  errorPosition="bottom"
                />
              )}
            </Field>
            <Field name="lastName">
              {({ field, meta }: FieldProps) => (
                <Input
                  {...field}
                  placeholder="Smith"
                  label={`${t('profile.form.last-name')}`}
                  id="lastName"
                  iconId="editIcon"
                  error={meta.touched && meta.error ? meta.error : undefined}
                  className="placeholder-gray min-h-[48px]"
                  errorPosition="bottom"
                />
              )}
            </Field>
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:gap-10">
            <Field name="email">
              {({ field, meta }: FieldProps) => (
                <Input
                  {...field}
                  placeholder="johnsmith@email.at"
                  label={`${t('profile.form.email')}`}
                  id="email"
                  iconId="editIcon"
                  error={meta.touched && meta.error ? meta.error : undefined}
                  className="placeholder-gray min-h-[48px]"
                  errorPosition="bottom"
                />
              )}
            </Field>
            <Field name="phone">
              {({ field, meta }: FieldProps) => (
                <Input
                  {...field}
                  placeholder="+43 676 920 74 99"
                  label={`${t('profile.form.tel')}`}
                  id="phone"
                  iconId="editIcon"
                  error={meta.touched && meta.error ? meta.error : undefined}
                  className="placeholder-gray min-h-[48px]"
                  errorPosition="bottom"
                />
              )}
            </Field>
          </div>
          <div className="flex items-center gap-6 py-6">
            <RadioButton
              label={`${t('profile.form.agency.main')}`}
              name="user"
              value="agency"
              checked={userType === 'agency'}
              onChange={(value) => setUserType(value as User)}
            />
            <RadioButton
              label={`${t('profile.form.private')}`}
              name="user"
              value="private"
              checked={userType === 'private'}
              onChange={(value) => setUserType(value as User)}
            />
          </div>
          <div className="flex w-full flex-col gap-3 pb-3">
            {userType !== 'private' && (
              <Field name="agency">
                {({ field, meta }: FieldProps) => (
                  <Input
                    {...field}
                    placeholder={`${t('profile.form.agency.main')}`}
                    label={`${t('profile.form.agency.extra')}`}
                    id="agency"
                    iconId="editIcon"
                    error={meta.touched && meta.error ? meta.error : undefined}
                    className="placeholder-gray min-h-[48px]"
                    errorPosition="bottom"
                  />
                )}
              </Field>
            )}
            <div className="flex flex-col gap-3 md:flex-row md:gap-10">
              <Field name="city">
                {({ field, meta }: FieldProps) => (
                  <Input
                    {...field}
                    placeholder="Wien"
                    label={`${t('profile.form.city')}`}
                    id="city"
                    iconId="editIcon"
                    error={meta.touched && meta.error ? meta.error : undefined}
                    className="placeholder-gray min-h-[48px]"
                    errorPosition="bottom"
                  />
                )}
              </Field>
              <Field name="province">
                {({ field, meta }: FieldProps) => (
                  <Input
                    {...field}
                    placeholder="Wien"
                    label={`${t('profile.form.province.extra')}`}
                    id="province"
                    iconId="editIcon"
                    error={meta.touched && meta.error ? meta.error : undefined}
                    className="placeholder-gray min-h-[48px]"
                    errorPosition="bottom"
                  />
                )}
              </Field>
            </div>
            <Field name="password">
              {({ field, meta }: FieldProps) => (
                <Input
                  {...field}
                  placeholder={`${t('profile.form.password.main')}`}
                  label={`${t('profile.form.password.extra')}`}
                  id="password"
                  type="password"
                  iconId="editIcon"
                  error={meta.touched && meta.error ? meta.error : undefined}
                  className="placeholder-gray min-h-[48px]"
                  errorPosition="bottom"
                />
              )}
            </Field>
          </div>

          <Button type="submit" className="w-full md:w-fit">
            {t('buttons.save')}
          </Button>
        </Form>
      )}
    </Formik>
  )
}
