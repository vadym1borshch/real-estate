import {
  createBrowserRouter, Navigate,
  type RouteObject,
  RouterProvider, useNavigate, useParams,
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
  return (
    <Navigate to={`/${lang}/not-found`} replace />
  )
}

const routes: RouteObject[] = [
  /* {
     path: "/:lang",
     element: <></>,
     errorElement: <ErrorBoundary />,
     children: [
       { path: '', element: <HomePage /> },
       {
         path: 'about',
         element: <About />,
         children: [
           { path: '', element: <ProvidersPage /> },
           { path: ':providerId', element: <ProviderPage /> },
         ],
       },
       {
         element: <PrivateRoute />,
         children: [
           {
             element: <PrivateLayout />,
             children: [

             ],
           },
         ],
       },
       {
         path: '*',
         element: <Error404Page />,
       },
     ],
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
        path: '', element: <MainLayout />,
        children: [
          {
            path: '', element: <HomePageLayout />,
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
               /* children: [
                  {
                    path: ':id',
                    element: <Details />,
                  },
                ],*/
              },
              {
                path: 'estates',
                element: <EstatesList />,
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
              { path: 'not-found', element: <NotFoundPage/> },
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


