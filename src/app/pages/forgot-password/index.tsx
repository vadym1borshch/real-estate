import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import H3 from '../../../components/atoms/typography/h3'
import { useNavigate } from '../../../helpers/hooks/useNavigate.ts'
import { ROUTES } from '../../../@constants/routes.ts'
import { Step } from './Step.tsx'

export const ForgotPassword = () => {
  const { t } = useTranslation()
  const [step, setStep] = useState(1)
  const navigate = useNavigate()

  const content = useMemo(() => {
    if (step === 1) {
      return (
        <Step
          step={step}
          paragraph={t('forgot-password.step1')}
          onClick={() => {
            setStep(2)
          }}
          buttonText={t('buttons.restore')}
        />
      )
    }
    if (step === 2) {
      return (
        <Step
          step={step}
          paragraph={t('forgot-password.step2')}
          onClick={() => {
            setStep(3)
          }}
          buttonText={t('buttons.send')}
        />
      )
    }
    return (
      <Step
        step={step}
        paragraph={t('forgot-password.step3')}
        onClick={() => {
          navigate(ROUTES.LOGIN)
        }}
        buttonText={t('buttons.send')}
      />
    )
  }, [step])

  return (
    <div className="flex max-w-[360px] flex-col gap-10 pt-[6.8125rem]">
      <H3 text={t('forgot-password.title')} />
      {content}
    </div>
  )
}

