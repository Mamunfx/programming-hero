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
  },
  {
    path: "/AddCoffe",
    element: <AddCoffe></AddCoffe>,
  },
  {
    path: "/UpdateCoffe",
    element: <UpdateCoffe></UpdateCoffe>,
  },
]);
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
