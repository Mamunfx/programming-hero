import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
    {
        path:"/",
        element:<h1 className='text-2xl text-blue-500'>Main page</h1>
        
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