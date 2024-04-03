import { lazy, Suspense } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Loading from "./components/Loading"; // Import your loading indicator component
import ProtectedRoute from "./utils/ProtectedRoute";


const Home = lazy(() => import("./pages/Home"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

const Dashboard = lazy(()=>import("./pages/dashboard/Dashboard"));
const Products = lazy(()=> import("./pages/dashboard/Products"))
const Customers = lazy(()=> import("./pages/dashboard/Customer"));
const Transaction = lazy(()=> import("./pages/dashboard/Transaction"));

// management
const NewProduct = lazy(()=> import("./pages/management/NewProduct"));
const ProductManagement = lazy(()=> import("./pages/management/ProductManagement"));
const TransactionManagement = lazy(()=> import("./pages/management/TransactionManagement"));

// charts
const BarCharts = lazy(()=> import("./pages/charts/BarCharts"));
const PieCharts = lazy(()=> import("./pages/charts/PieCharts"));
const LineCharts = lazy(()=> import("./pages/charts/LineCharts"));

// apps
const Stopwatch = lazy(()=> import("./pages/apps/StopWatch"));
const Coupen = lazy(()=> import("./pages/apps/Coupon"));
const Toss = lazy(()=> import("./pages/apps/Toss"));

const AppLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

const LazyLoadingComponent = ({ component: LazyComponent }) => {
  return (
    <Suspense fallback={<Loading />}>
      <LazyComponent />
    </Suspense>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <LazyLoadingComponent component={ErrorPage} />,
    children: [
      {
          path:"/",
          element: <LazyLoadingComponent component={Home} />
      },
      {
        element: <ProtectedRoute role="admin" />,
        children: [
          
          {/*  Admin  */},

          {
            path: "/admin/dashboard",
            element: <LazyLoadingComponent component={Dashboard} />,
          },
          {
            path: "/admin/product",
            element: <LazyLoadingComponent component={Products} />,
          },
          {
            path: "/admin/customer",
            element: <LazyLoadingComponent component={Customers} />,
          },
          {
            path: "/admin/transaction",
            element: <LazyLoadingComponent component={Transaction} />,
          },

          {/*  Charts   */},

          {
            path:"/admin/chart/bar",
            element:<LazyLoadingComponent component={BarCharts} />
          },
          {
            path:"/admin/chart/pie",
            element:<LazyLoadingComponent component={PieCharts} />
          },
          {
            path:"/admin/chart/line",
            element:<LazyLoadingComponent component={LineCharts} />
          },

          {/* Apps*/},

          {
            path:"/admin/app/stopwatch",
            element:<LazyLoadingComponent component={Stopwatch} />
          },{
            path:"/admin/app/coupon",
            element:<LazyLoadingComponent component={Coupen} />
          },{
            path:"/admin/app/toss",
            element:<LazyLoadingComponent component={Toss} />
          },

          {/* Management */},

          {
            path:"/admin/product/new",
            element: <LazyLoadingComponent component={NewProduct} />
          },{
            path:"/admin/product/:id",
            element: <LazyLoadingComponent component={ProductManagement} />
          },
          {
            path:"/admin/transaction/:id",
            element: <LazyLoadingComponent component={TransactionManagement} />
          }
        ],
      },
    ],
  },
]);