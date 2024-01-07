import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import MainLayout from './Layout/MainLayout';
  import Home from './Layout/MainLayout/Pages/Home/home';
  import About from './Layout/MainLayout/Pages/About/about';
  import Checkout from './Layout/MainLayout/Pages/Checkout/checkout';
  import Register from './Layout/MainLayout/Pages/Register/register';
  import Viewcart from './Layout/MainLayout/Pages/ViewCart/viewcart';
  import Detail from './Layout/MainLayout/Pages/Detail/detail';
  import Shop from "./Layout/MainLayout/Pages/Shop/shop";
import Login from './Layout/MainLayout/Pages/Login/login';
import Dashboard from "./Layout/DashboardLayout/dashboard";
import Orders from "./Layout/DashboardLayout/Pages/Orders";
import Products from "./Layout/DashboardLayout/Pages/Products";
import Customers from "./Layout/DashboardLayout/Pages/Customers";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "product/:id",
          element: <Detail />,
        },
        {
          path: "checkout",
          element: <Checkout />,
        },
        {
          path: "shop",
          element: <Shop/>,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "viewcart",
          element: <Viewcart />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: < Dashboard/>,
      children: [
        {
          path: "orders",
          element: <Orders />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "customers",
          element: <Customers />,
        },
      ],
    },
  ]);

export const MainRoutes=()=>{
    return <RouterProvider router={router} />
}