import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import About from './components/about/About.jsx';
import Home from './components/home/home.jsx';
import Contact from './components/contact/Contact.jsx';
import Users from './components/Users.jsx';
import UserDetails from './UserDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:"/about",
        element: <About></About>
      },
      {
        path:"/contact",
        element: <Contact></Contact>
      },

    ]
  },
  {
    path: '/users',
    loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
    element: <Users></Users>
  },
  {
    path: '/user/:userId',
    loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
    element: <UserDetails></UserDetails>
  },
  
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
