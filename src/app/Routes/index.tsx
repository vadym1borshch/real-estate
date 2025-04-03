import {
  createBrowserRouter,
  Navigate,
  type RouteObject,
  RouterProvider,
  useNavigate,
  useParams,
} from 'react-router-dom'
import { HomePage } from '../Pages/Home'
import { About } from '../Pages/About'
import { useEffect } from 'react'
import { DEFAULT_LANG, STORAGE_KEY } from '../../common/constants.ts'
import { MainWrapper } from '../../components/wrappers/main-wrapper'
import { MainLayout } from '../../components/templates/layouts/main'
import { HomePageLayout } from '../Pages/Home/layout.tsx'
import { DefaultPageLayout } from '../../components/templates/layouts/default-pages'
import { EstatesList } from '../Pages/EstatesList'
import { NotFoundPage } from '../Pages/NotFound'
import { Contacts } from '../Pages/Contacts'
import { FAQPage } from '../Pages/FAQ'
import { ContactUsPage } from '../Pages/ContactUs'
import { TermsOfUse } from '../Pages/TermsOfUse'
import { ServiceAround } from '../Pages/ServiceAround'
import { EstatesDetails } from '../Pages/EstatesList/EstateDetails'
import { KnowledgeRealEstate } from '../Pages/KnowledgeRealEstate'
import { MyAccount } from '../Pages/MyAccount'
import { ProfilePage } from '../Pages/MyAccount/Profile'
import { Ads } from '../Pages/MyAccount/Ads'
import { Rent } from '../Pages/MyAccount/Ads/Rent'
import { Sell } from '../Pages/MyAccount/Ads/Sell'
import { AdsType } from '../Pages/MyAccount/Ads/AdsType'
import { DetailPage } from '../Pages/MyAccount/Ads/Details'
import { DetailsLayout } from '../Pages/MyAccount/Ads/DetailsLayout.tsx'
import { Premises } from '../Pages/MyAccount/Ads/Details/Premises'
import { Equipments } from '../Pages/MyAccount/Ads/Details/Equipments'
import { Fees } from '../Pages/MyAccount/Ads/Details/Fees'
import { MonthlyCosts } from '../Pages/MyAccount/Ads/Details/MonthlyCosts'
import { Messages } from '../Pages/MyAccount/Messages'
import { MessagesContent } from '../Pages/MyAccount/Messages/MessagesContent.tsx'
import { LoginPage } from '../Pages/Login'
import { FavoritesPage } from '../Pages/MyAccount/Favorites'
import { PhotoVideoOrderPage } from '../Pages/MyAccount/PhotoVideoOrder'
import { PaymentMethodsPage } from '../Pages/MyAccount/PaymentMethods'
import { RegisterPage } from '../Pages/Register'
import { ForgotPassword } from '../Pages/ForgotPassword'
import { AuthLayout } from '../../components/templates/layouts/auth-layout'
import { ConfirmRegister } from '../Pages/ConfirmRegister'
import { AUTH_ROUTES, MY_ACCOUNT, ROUTES } from '../../@constants/routes.ts'
import { usePathname } from '../../helpers/hooks/usePathname.ts'

const EmptyUrlRedirect = () => {
  const pathname = usePathname()
  const navigate = useNavigate()
  useEffect(() => {
    if (pathname === ROUTES.HOME) {
      navigate(ROUTES.HOME)
    }
    const savedLang = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG
    navigate(`${savedLang}`, { replace: true })
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
    path: '',
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
