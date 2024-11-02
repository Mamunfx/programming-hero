import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './Root/Root'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage';
import Homepage from './components/Homepage';
import Dashboard from './components/Dashboard';
import BookDetails from './components/BookDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Homepage></Homepage>
      },
      {
        path:"/book/:bookId",
        element:<BookDetails ></BookDetails>,
        loader: () => fetch('../data/booksData.json')
      },
      {
        path:"dashboard",
        element:<Dashboard></Dashboard>
      }
    ]
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
