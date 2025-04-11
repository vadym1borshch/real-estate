import { useTranslation } from 'react-i18next'
import { Field, FieldProps, Form, Formik } from 'formik'
import Input from '../../../../components/atoms/input'
import { useValidationSchema } from './validation.ts'
import { Agent } from '../../service-around/mock.ts'
import RadioButton from '../../../../components/atoms/radio-button'
import { useEffect, useRef, useState } from 'react'
import Button from '../../../../components/atoms/button'
import { useAxiosHook } from '../../../../helpers/hooks/useAxios.ts'
import { USER } from '../../../../@constants/URLS.ts'
import { addToast } from '../../../../store/toastSlise'
import { useAppDispatch } from '../../../../store'
import { setUser } from '../../../../store/userSlice'
import { Loader } from '../../../../components/atoms/loader'
import { useElementSizes } from '../../../../helpers/hooks/useElementsSizes.ts'

type User = 'agency' | 'private'

interface Props {
  user: Partial<Agent & { province: string }>
}

export const ProfileForm = ({ user }: Props) => {
  const { t } = useTranslation()
  const [userType, setUserType] = useState<User>('private')
  const dispatch = useAppDispatch()
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const { containerDimension } = useElementSizes({
    containerRef: buttonRef,
    containerDimensionProp: 'width',
  })
  const { execute: update, loading } = useAxiosHook<{ user: Agent }>(
    { url: USER.UPDATE, method: 'PATCH' },
    { manual: true }
  )
  useEffect(() => {
    if (user.agency) {
      setUserType('agency')
    }
  }, [user.agency])

  return (
    <Formik
      initialValues={{
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        password: '',
        agency: user.agency?.name,
        city: user?.address,
        province: user?.province,
      }}
      onSubmit={async (_values) => {
        try {
          const res = await update({
            data: {
              id: user.id,
              name: _values.name,
              lastName: _values.lastName,
              email: _values.email,
              phone: _values.phone,
              password: _values.password,
              agency: _values.agency,
              address: _values.city || user?.address,
              province: _values.province,
              userType,
            },
          })
          dispatch(setUser(res.data.user))
          dispatch(addToast({ type: 'info', message: t('data saved...') }))
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
          dispatch(
            addToast({ type: 'error', message: t('something went wrong...') })
          )
        }
      }}
      validationSchema={useValidationSchema()}
    >
      {() => (
        <Form className="flex w-full flex-col gap-3">
          <div className="flex flex-col gap-4 lg:flex-row lg:gap-10">
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
                  disabled={loading}
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
                  disabled={loading}
                />
              )}
            </Field>
          </div>
          <div className="flex flex-col gap-4 lg:flex-row lg:gap-10">
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
                  disabled={loading}
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
                  disabled={loading}
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
                    disabled={loading}
                  />
                )}
              </Field>
            )}
            <div className="flex flex-col gap-3 lg:flex-row lg:gap-10">
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
                    disabled={loading}
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
                    disabled={loading}
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
                  disabled={loading}
                />
              )}
            </Field>
          </div>

          <Button
            ref={buttonRef}
            type="submit"
            className="w-full md:w-fit"
            disabled={loading}
            style={{
              minWidth: loading ? `${containerDimension}px` : 'auto',
            }}
          >
            {loading ? <Loader size={25} /> : t('buttons.save')}
          </Button>
        </Form>
      )}
    </Formik>
  )
}
