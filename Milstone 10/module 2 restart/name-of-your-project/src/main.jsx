import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Users from './Users.jsx';
import UpdateUser from './UpdateUser';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path:"/Users",
    element:<Users></Users>,
    loader:()=> fetch("http://localhost:5002/users"),
  },
  {
    path:"/Users/:id",
    element:<UpdateUser></UpdateUser>,
    loader:({params})=> fetch(`http://localhost:5002/users/${params.id}`),
  }
]);
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
)
