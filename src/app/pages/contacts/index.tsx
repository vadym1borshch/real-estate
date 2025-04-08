import H2 from '../../../components/atoms/typography/h2'
import { useTranslation } from 'react-i18next'
import LargeFont from '../../../components/atoms/typography/large-font'

export const Contacts = () => {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col items-center">
      <H2 text={t('contacts.title')} />
      <LargeFont text="Fylpi Immo-online GmbH " className="my-5 lg:my-7.5" />
      <p>Forchheimergasse 3/13, 1230 Wien, Österreich</p>
      <p>{t('contacts.tel')}: +43 699 1700 20045</p>
      <p>E-Mail: office@fylpi.at | Website: www.fylpi.at</p>
      <LargeFont
        text={t('contacts.register-entry')}
        className="my-5 lg:my-7.5"
      />
      <p>{t('contacts.state')}: Wien</p>
      <p>{t('contacts.uid')}: ATU 79462519</p>
      <p>{t('contacts.company-register-number')}: FN 603830k </p>
      <LargeFont text={t('contacts.bank-details')} className="my-5 lg:my-7.5" />
      <p>Erste Bank der österreichischen Sparkassen AG</p>
      <p>BIC: GIBAATWWXXX</p>
      <p className="mb-[6.25rem] lg:mb-[9.375rem]">
        IBAN: AT48 2011 1848 2238 6500
      </p>
    </div>
  )
}
