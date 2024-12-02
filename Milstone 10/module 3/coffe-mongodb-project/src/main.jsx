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
 
]);
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
