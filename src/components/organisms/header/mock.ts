import { ADS_ROUTES, ROUTES } from '../../../@constants/routes.ts'

export const initialButtons = [
  {
    id: 'buy',
    href: ROUTES.BUY,
    title: 'real-estate.operations.buy',
  },
  {
    id: 'rent',
    href: ROUTES.RENT,
    title: 'real-estate.operations.rent',
  },
  {
    id: 'place-advertisement',
    href: ADS_ROUTES.CREATE_AD,
    title: 'buttons.place-advertisement',
  },
]
