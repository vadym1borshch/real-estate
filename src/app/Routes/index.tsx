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
