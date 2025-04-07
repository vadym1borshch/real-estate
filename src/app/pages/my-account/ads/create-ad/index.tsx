import Button from '../../../../../components/atoms/button'
import { EntityManageForm } from '../EntityManageForm.tsx'
import { useTranslation } from 'react-i18next'

export const CreateAd = () => {
  const { t } = useTranslation()
  return (
    <EntityManageForm>
      <Button type="submit">{t('buttons.save')}</Button>
    </EntityManageForm>
  )
}
