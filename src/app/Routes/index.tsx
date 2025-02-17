import {
  createBrowserRouter, Navigate,
  type RouteObject,
  RouterProvider, useNavigate, useParams,
} from 'react-router-dom'
import { HomePage } from '../Pages/Home'
import { About } from '../Pages/About'
import { useEffect } from 'react'
import { Details } from '../Pages/About/Details'
import { DEFAULT_LANG, STORAGE_KEY } from '../../common/constants.ts'
import { MainWrapper } from '../../components/wrappers/main-wrapper'

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
      { path: '', element: <HomePage /> },
      {
        path: 'about',
        element: <About />,
        children: [
          {
            path: ':id',
            element: <Details />,
          },
        ],
      },
      { path: 'not-found', element: <>❌ 404 Page Not Found</> },
      { path: '*', element: <RedirectToErrorPage /> },
    ],
  },
]

const router = createBrowserRouter(routes)

const Routes = () => <RouterProvider router={router} />

export default Routes


