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


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader:()=>fetch('http://localhost:5001/coffee')
  },
  {
    path: "/AddCoffe",
    element: <AddCoffe></AddCoffe>,
  },
  {
    path: "/UpdateCoffe/:id",
    element: <UpdateCoffe></UpdateCoffe>,
    loader:({params})=>fetch(`http://localhost:5001/coffee/${params.id}`)
  },
  {
    path:"/singup",
    element:<Singup></Singup>
  }
 
]);
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)
