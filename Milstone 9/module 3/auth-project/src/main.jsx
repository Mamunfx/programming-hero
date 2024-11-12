import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Login from './Components/login/Login.jsx';
import Register from './Components/register/Register.jsx'
import Authprovider from './Components/auth/Authprovider.jsx';
import Singin from './Components/singin/Singin.jsx';
import Singout from './Components/singout/Singout.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Login></Login>
      },
      {
        path:"Register",
        element:<Register></Register>
      },
      {
        path:'singin',
        element:<Singin></Singin>

      },
      {
        path:'singout',
        element:<Singout></Singout>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
    <RouterProvider router={router} />
    </Authprovider>
  </StrictMode>,
)
