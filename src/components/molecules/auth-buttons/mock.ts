import { ADS_ROUTES, ROUTES } from '../../../@constants/routes.ts'

export const authButtons = [
  {
    id: '1',
    href: ROUTES.profile,
    title: 'buttons.profile',
    icon: 'userIcon',
  },
  {
    id: '2',
    href: ADS_ROUTES.ads,
    title: 'buttons.ads',
    icon: 'boardDocumentIcon',
  },
  {
    id: '3',
    href: ROUTES.messages,
    title: 'buttons.messages',
    icon: 'emailIcon',
  },
  {
    id: '4',
    href: ROUTES.favorites,
    title: 'buttons.favorite',
    icon: 'standardHeartIcon',
  },
  {
    id: '5',
    href: '#',
    title: 'buttons.photo-video',
    icon: 'cameraIcon',
  },
  {
    id: '6',
    href: '#',
    title: 'buttons.payment-options',
    icon: 'bankCardIcon',
  },
]
