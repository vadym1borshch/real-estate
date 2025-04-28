import { v4 } from 'uuid'

export type FeeField = {
  id: string
  name: string
  percent: string
  additional_info: string
  key: string
}

export const initialFields: FeeField[] = [
  {
    id: v4(),
    name: 'real-estate.details.detail-info.fees.broker-fee',
    key: 'broker-fee',
    percent: '3,00%',
    additional_info: 'zzgl. UST 20%',
  },
  {
    id: v4(),
    name: 'real-estate.details.detail-info.fees.transfer-tax',
    key: 'transfer-tax',
    percent: '3,50%',
    additional_info: '',
  },
  {
    id: v4(),
    name: 'real-estate.details.detail-info.fees.land-registry',
    key: 'land-registry',
    percent: '1,10%',
    additional_info: '',
  },
  {
    id: v4(),
    name: 'real-estate.details.detail-info.fees.purchase-agreement',
    key: 'purchase-agreement',
    percent: '',
    additional_info: 'nach dem Tarif des jeweiligen Urkundenrichters',
  },
  { id: v4(), name: '', key: 'user-field', percent: '', additional_info: '' },
]
