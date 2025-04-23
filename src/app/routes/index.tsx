import {
  createBrowserRouter,
  Navigate,
  type RouteObject,
  RouterProvider,
  useNavigate,
  useParams,
} from 'react-router-dom'
import { HomePage } from '../pages/home'
import { About } from '../pages/about'
import { useEffect } from 'react'
import { DEFAULT_LANG, STORAGE_KEY } from '../../common/constants.ts'
import { MainWrapper } from '../../components/wrappers/main-wrapper'
import { MainLayout } from '../../components/templates/layouts/main'
import { HomePageLayout } from '../pages/home/layout.tsx'
import { DefaultPageLayout } from '../../components/templates/layouts/default-pages'
import { EstatesList } from '../pages/estates-list'
import { NotFoundPage } from '../pages/not-found'
import { Contacts } from '../pages/contacts'
import { FAQPage } from '../pages/faq'
import { ContactUsPage } from '../pages/contact-us'
import { TermsOfUse } from '../pages/terms-of-use'
import { ServiceAround } from '../pages/service-around'
import { EstatesDetails } from '../pages/estates-list/estate-details'
import { KnowledgeRealEstate } from '../pages/knowledge-real-estate'
import { MyAccount } from '../pages/my-account'
import { ProfilePage } from '../pages/my-account/profile'
import { Ads } from '../pages/my-account/ads'
import { Rent } from '../pages/my-account/ads/rent'
import { Sell } from '../pages/my-account/ads/sell'
import { AdsType } from '../pages/my-account/ads/ads-type'
import { DetailPage } from '../pages/my-account/ads/details'
import { DetailsLayout } from '../pages/my-account/ads/DetailsLayout.tsx'
import { Premises } from '../pages/my-account/ads/details/premises'
import { Equipments } from '../pages/my-account/ads/details/equipments'
import { Fees } from '../pages/my-account/ads/details/fees'
import { MonthlyCosts } from '../pages/my-account/ads/details/monthly-costs'
import { Messages } from '../pages/my-account/messages'
import { MessagesContent } from '../pages/my-account/messages/MessagesContent.tsx'
import { LoginPage } from '../pages/login'
import { FavoritesPage } from '../pages/my-account/favorites'
import { PhotoVideoOrderPage } from '../pages/my-account/photo-video-order'
import { PaymentMethodsPage } from '../pages/my-account/payment-methods'
import { RegisterPage } from '../pages/register'
import { ForgotPassword } from '../pages/forgot-password'
import { AuthLayout } from '../../components/templates/layouts/auth-layout'
import { ConfirmRegister } from '../pages/confirm-register'
import { AUTH_ROUTES, MY_ACCOUNT, ROUTES } from '../../@constants/routes.ts'
import { usePathname } from '../../helpers/hooks/usePathname.ts'
import { CreateAd } from '../pages/my-account/ads/create-ad'

const EmptyUrlRedirect = () => {
  const pathname = usePathname()
  const navigate = useNavigate()
  useEffect(() => {
    const savedLang = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG
    if (pathname === '/' || pathname === '') {
      navigate(`/${savedLang}/`, { replace: true })
    }
  }, [navigate, pathname])

  return null
}

const RedirectToErrorPage = () => {
  const { lang } = useParams<{ lang: string }>()
  return <Navigate to={`/${lang}/${ROUTES.NOT_FOUND}`} replace />
}

const routes: RouteObject[] = [
  /* {
     
     errorElement: <ErrorBoundary />,
 
   },*/
  {
    path: '/',
    element: <EmptyUrlRedirect />,
  },
  {
    path: '/:lang',
    element: <MainWrapper />,
    children: [
      {
        path: AUTH_ROUTES.ROOT,
        element: <AuthLayout />,
        children: [
          {
            path: AUTH_ROUTES.LOGIN,
            element: <LoginPage />,
          },
          {
            path: AUTH_ROUTES.FORGOT_PASSWORD,
            element: <ForgotPassword />,
          },
          {
            path: AUTH_ROUTES.REGISTER,
            element: <RegisterPage />,
          },
          {
            path: AUTH_ROUTES.CONFIRM_REGISTER,
            element: <ConfirmRegister />,
          },
        ],
      },
      {
        path: '',
        element: <MainLayout />,
        children: [
          {
            path: '',
            element: <HomePageLayout />,
            children: [
              {
                path: '',
                element: <HomePage />,
              },
            ],
          },
          {
            path: '',
            element: <DefaultPageLayout />,
            children: [
              {
                path: ROUTES.ABOUT,
                element: <About />,
              },
              {
                path: ROUTES.ESTATES,
                element: <EstatesList />,
              },
              {
                path: ROUTES.RENT,
                element: <EstatesList />,
              },
              {
                path: ROUTES.BUY,
                element: <EstatesList />,
              },
              {
                path: ROUTES.RENT_DETAILS,
                element: <EstatesDetails />,
              },

              {
                path: ROUTES.BUY_DETAILS,
                element: <EstatesDetails />,
              },
              {
                path: ROUTES.KNOWLEDGE_REAL_ESTATE,
                element: <KnowledgeRealEstate />,
              },
              {
                path: ROUTES.CONTACTS,
                element: <Contacts />,
              },
              {
                path: ROUTES.FAQ,
                element: <FAQPage />,
              },
              {
                path: ROUTES.CONTACT_US,
                element: <ContactUsPage />,
              },
              {
                path: ROUTES.TERMS_OF_USE,
                element: <TermsOfUse />,
              },
              {
                path: ROUTES.SERVICE_AROUND,
                element: <ServiceAround />,
              },
              {
                path: MY_ACCOUNT.ROOT,
                element: <MyAccount />,
                children: [
                  {
                    path: MY_ACCOUNT.PROFILE,
                    element: <ProfilePage />,
                  },
                  {
                    path: MY_ACCOUNT.ADS,
                    element: <Ads />,
                  },
                  {
                    path: MY_ACCOUNT.CREATE_AD,
                    element: <CreateAd />,
                  },
                  {
                    path: MY_ACCOUNT.RENT_ADS,
                    element: <Rent />,
                    children: [
                      {
                        path: MY_ACCOUNT.ACTIVE,
                        element: <AdsType />,
                      },
                      {
                        path: MY_ACCOUNT.INACTIVE,
                        element: <AdsType />,
                      },
                      {
                        path: MY_ACCOUNT.MODERATION,
                        element: <AdsType />,
                      },
                      {
                        path: MY_ACCOUNT.REJECTED,
                        element: <AdsType />,
                      },
                    ],
                  },
                  {
                    path: MY_ACCOUNT.RENT_ADS,
                    element: <DetailsLayout />,
                    children: [
                      {
                        path: MY_ACCOUNT.DETAILS,
                        element: <DetailPage />,
                      },
                      {
                        path: MY_ACCOUNT.PREMISES,
                        element: <Premises />,
                      },
                      {
                        path: MY_ACCOUNT.EQUIPMENTS,
                        element: <Equipments />,
                      },
                      {
                        path: MY_ACCOUNT.FEES,
                        element: <Fees />,
                      },
                      {
                        path: MY_ACCOUNT.MONTHLY_COSTS,
                        element: <MonthlyCosts />,
                      },
                    ],
                  },
                  {
                    path: MY_ACCOUNT.SELL_ADS,
                    element: <Sell />,
                    children: [
                      {
                        path: MY_ACCOUNT.ACTIVE,
                        element: <AdsType />,
                      },
                      {
                        path: MY_ACCOUNT.INACTIVE,
                        element: <AdsType />,
                      },
                      {
                        path: MY_ACCOUNT.MODERATION,
                        element: <AdsType />,
                      },
                      {
                        path: MY_ACCOUNT.REJECTED,
                        element: <AdsType />,
                      },
                    ],
                  },
                  {
                    path: MY_ACCOUNT.SELL_ADS,
                    element: <DetailsLayout />,
                    children: [
                      {
                        path: MY_ACCOUNT.DETAILS,
                        element: <DetailPage />,
                      },
                      {
                        path: MY_ACCOUNT.PREMISES,
                        element: <Premises />,
                      },
                      {
                        path: MY_ACCOUNT.EQUIPMENTS,
                        element: <Equipments />,
                      },
                      {
                        path: MY_ACCOUNT.FEES,
                        element: <Fees />,
                      },
                      {
                        path: MY_ACCOUNT.MONTHLY_COSTS,
                        element: <MonthlyCosts />,
                      },
                    ],
                  },
                  {
                    path: MY_ACCOUNT.MESSAGES,
                    element: <Messages />,
                    children: [
                      {
                        path: MY_ACCOUNT.INBOXES,
                        element: <MessagesContent />,
                      },
                      {
                        path: MY_ACCOUNT.SENT,
                        element: <MessagesContent />,
                      },
                      {
                        path: MY_ACCOUNT.ARCHIVE,
                        element: <MessagesContent />,
                      },
                    ],
                  },
                  {
                    path: MY_ACCOUNT.FAVORITES,
                    element: <FavoritesPage />,
                  },
                  {
                    path: MY_ACCOUNT.ORDER,
                    element: <PhotoVideoOrderPage />,
                  },
                  {
                    path: MY_ACCOUNT.PAYMENTS,
                    element: <PaymentMethodsPage />,
                  },
                ],
              },
              { path: ROUTES.NOT_FOUND, element: <NotFoundPage /> },
              { path: '*', element: <RedirectToErrorPage /> },
            ],
          },
        ],
      },
    ],
  },
]

const router = createBrowserRouter(routes)

const Routes = () => <RouterProvider router={router} />

export default Routes
