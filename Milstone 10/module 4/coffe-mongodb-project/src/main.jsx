import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import React from 'react'
import { createRoot } from 'react-dom/client'
import AddCoffe from './AddCoffe';
import UpdateCoffe from './UpdateCoffe';
import './index.css'
import App from './App.jsx'
import Singup from "./Singup.jsx";
import AuthProvider from "./AuthProvider.jsx";
import Users from "./Users.jsx";
import Singin from "./Singin.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader:()=>fetch('https://coffe-mongodb-hrffoye3v-md-moonzoor-mamun-munnas-projects.vercel.app/coffee')
  },
  {
    path: "/AddCoffe",
    element: <AddCoffe></AddCoffe>,
  },
  {
    path: "/UpdateCoffe/:id",
    element: <UpdateCoffe></UpdateCoffe>,
    loader:({params})=>fetch(`https://coffe-mongodb-hrffoye3v-md-moonzoor-mamun-munnas-projects.vercel.app/coffee/${params.id}`)
  },
  {
    path:"/singup",
    element:<Singup></Singup>
  },
  {
    path:"/users",
    element:<Users></Users>,
    loader:()=>fetch('https://coffe-mongodb-hrffoye3v-md-moonzoor-mamun-munnas-projects.vercel.app/users')
  },
  
  {
    path:"/singin",
    element:<Singin></Singin>,
  },
  
 
]);
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)
