/*
import {
  createBrowserRouter,
  type RouteObject,
  RouterProvider,
} from 'react-router-dom';

const routes: RouteObject[] = [
  {
    element: <MainLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      { path: '', element: <HomePage /> },
      {
        path: 'providers',
        element: <SearchLayout />,
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
  },
];

const router = createBrowserRouter(routes);

const Routes = () => <RouterProvider router={router} />;

export default Routes;
*/

export default {}
