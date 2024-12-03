import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import UsersCopy from './UsersCopy';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    
  },
  {
    path:"/users",
    element: <UsersCopy></UsersCopy>,
    loader:()=>fetch('https://module-4-server.vercel.app/users')
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
