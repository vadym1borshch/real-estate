import { ADS_ROUTES, ROUTES } from '../../../@constants/routes.ts'

export const authButtons = [
  {
    id: '1',
    href: ROUTES.PROFILE,
    title: 'buttons.profile',
    icon: 'userIcon',
  },
  {
    id: '2',
    href: ADS_ROUTES.ADS,
    title: 'buttons.ads',
    icon: 'boardDocumentIcon',
  },
  {
    id: '3',
    href: ROUTES.MESSAGES,
    title: 'buttons.messages',
    icon: 'emailIcon',
  },
  {
    id: '4',
    href: ROUTES.FAVORITES,
    title: 'buttons.favorite',
    icon: 'standardHeartIcon',
  },
  {
    id: '5',
    href: ROUTES.ORDER,
    title: 'buttons.photo-video',
    icon: 'cameraIcon',
  },
  {
    id: '6',
    href: ROUTES.PAYMENTS,
    title: 'buttons.payment-options',
    icon: 'bankCardIcon',
  },
]
