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
import { HomePageLayout } from '../../components/templates/layouts/home-page'
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

const EmptyUrlRedirect = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const savedLang = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG
    navigate(`/${savedLang}`, { replace: true })
  }, [navigate])

  return null
}

const RedirectToErrorPage = () => {
  const { lang } = useParams<{ lang: string }>()
  return <Navigate to={`/${lang}/not-found`} replace />
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
        path: 'auth',
        element: <AuthLayout />,
        children: [
          {
            path: 'login',
            element: <LoginPage />,
          },
          {
            path: 'forgot-password',
            element: <ForgotPassword />,
          },
          {
            path: 'register',
            element: <RegisterPage />,
          },
          {
            path: 'confirm-register',
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
                path: 'about',
                element: <About />,
              },
              {
                path: 'estates',
                element: <EstatesList />,
              },
              {
                path: 'rent',
                element: <EstatesList />,
              },
              {
                path: 'buy',
                element: <EstatesList />,
              },
              {
                path: 'rent/details',
                element: <EstatesDetails />,
              },

              {
                path: 'buy/details',
                element: <EstatesDetails />,
              },
              {
                path: 'knowledge-real-estate',
                element: <KnowledgeRealEstate />,
              },
              {
                path: 'contacts',
                element: <Contacts />,
              },
              {
                path: 'faq',
                element: <FAQPage />,
              },
              {
                path: 'contact-us',
                element: <ContactUsPage />,
              },
              {
                path: 'terms-of-use',
                element: <TermsOfUse />,
              },
              {
                path: 'service-around',
                element: <ServiceAround />,
              },
              {
                path: 'my-account',
                element: <MyAccount />,
                children: [
                  {
                    path: 'profile',
                    element: <ProfilePage />,
                  },
                  {
                    path: 'ads',
                    element: <Ads />,
                  },
                  {
                    path: 'ads/rent-ads',
                    element: <Rent />,
                    children: [
                      {
                        path: 'active',
                        element: <AdsType />,
                      },
                      {
                        path: 'inactive',
                        element: <AdsType />,
                      },
                      {
                        path: 'moderation',
                        element: <AdsType />,
                      },
                      {
                        path: 'rejected',
                        element: <AdsType />,
                      },
                    ],
                  },
                  {
                    path: 'ads/rent-ads',
                    element: <DetailsLayout />,
                    children: [
                      {
                        path: 'details',
                        element: <DetailPage />,
                      },
                      {
                        path: 'premises',
                        element: <Premises />,
                      },
                      {
                        path: 'equipments',
                        element: <Equipments />,
                      },
                      {
                        path: 'fees',
                        element: <Fees />,
                      },
                      {
                        path: 'monthly-costs',
                        element: <MonthlyCosts />,
                      },
                    ],
                  },
                  {
                    path: 'ads/sell-ads',
                    element: <Sell />,
                    children: [
                      {
                        path: 'active',
                        element: <AdsType />,
                      },
                      {
                        path: 'inactive',
                        element: <AdsType />,
                      },
                      {
                        path: 'moderation',
                        element: <AdsType />,
                      },
                      {
                        path: 'rejected',
                        element: <AdsType />,
                      },
                    ],
                  },
                  {
                    path: 'ads/sell-ads',
                    element: <DetailsLayout />,
                    children: [
                      {
                        path: 'details',
                        element: <DetailPage />,
                      },
                      {
                        path: 'premises',
                        element: <Premises />,
                      },
                      {
                        path: 'equipments',
                        element: <Equipments />,
                      },
                      {
                        path: 'fees',
                        element: <Fees />,
                      },
                      {
                        path: 'monthly-costs',
                        element: <MonthlyCosts />,
                      },
                    ],
                  },
                  {
                    path: 'messages',
                    element: <Messages />,
                    children: [
                      {
                        path: 'inboxes',
                        element: <MessagesContent />,
                      },
                      {
                        path: 'sent',
                        element: <MessagesContent />,
                      },
                      {
                        path: 'archive',
                        element: <MessagesContent />,
                      },
                    ],
                  },
                  {
                    path: 'favorites',
                    element: <FavoritesPage />,
                  },
                  {
                    path: 'order',
                    element: <PhotoVideoOrderPage />,
                  },
                  {
                    path: 'payments',
                    element: <PaymentMethodsPage />,
                  },
                ],
              },
              { path: 'not-found', element: <NotFoundPage /> },
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
