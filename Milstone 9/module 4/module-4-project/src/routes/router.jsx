import { createBrowserRouter } from "react-router-dom";
import Home_layout from './../layouts/Home_layout';


const router = createBrowserRouter([
    {
        path:"/",
        element:<Home_layout></Home_layout>
        
    },
    {
        path:"news",
        element:<h1>News section</h1>
        
    },
    {
        path:"auth",
        element:<h1>auth log in section</h1>
        
    },
    {
      path: "*",
      element: <h1>Error</h1>,
    }
]);

export default router;