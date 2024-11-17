import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import AuthLayout from "../components/AuthLayout/AuthLayout";
import Login from "../components/Login";
import Register from "../components/Register";
import PrivateRoute from "../components/PrivateRoute";
import Private from "../components/Private";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Navigate to={"/category/01"}></Navigate>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/news",
    element: <h1>News Layout</h1>,
  },
  {
    path: "/AuthLayout",
    element: <AuthLayout></AuthLayout>,
    children:[
      {
        path:"",
        element: <Login></Login>,
      },
      {
        path:"/AuthLayout/register",
        element: <Register></Register>
      }
    ]
  },
  {
    path: "*",
    element: <h1>Error</h1>,
  },
  {
    path:"User",
    element: (
    <PrivateRoute>
      <Private></Private>
    </PrivateRoute>
    ),
  }
]);

export default router;
