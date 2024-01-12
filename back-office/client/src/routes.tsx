import { lazy, Suspense } from "react";
import { Outlet, Navigate, useRoutes } from "react-router-dom";
import Layout from "./layout/Layout";

export const Page404 = lazy(() => import("./pages/Page404"));
export const PowertrainTypePage = lazy(() => import("./pages/PowertrainType"));
export const TransmissionTypePage = lazy(() => import("./pages/TransmissionType"));
export const CategoryPage = lazy(() => import("./pages/Category"));
export const BrandPage = lazy(() => import("./pages/Brand"));


export default function Router() {
  const routes = useRoutes([
    {
      path: "/app",
      element: (
        <Layout>
          <Suspense>
            <Outlet />
          </Suspense>
        </Layout>
      ),
      children: [
        {
          path: "/app/powertrain",
          element: <PowertrainTypePage />,
        },
        {
          path: "/app/transmission",
          element: <TransmissionTypePage />,
        },
        {
          path: "/app/category",
          element: <CategoryPage />,
        },
        {
          path: "/app/brand",
          element: <BrandPage />,
        },
      ],
    },
    {
      path: "/404",
      element: <Page404 />,
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
