import { createBrowserRouter, Navigate } from "react-router-dom";
import Home_layout from './../layouts/Home_layout';
import NewsLayout from './../components/NewsLayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home_layout></Home_layout>,
    children: [
      {
        path: "",
        element: <Navigate to={"/category/01"}></Navigate>,
      },
        {
         path: "category/:id", 
         element: <NewsLayout />, 
         loader: ({ params }) => { const formattedId = params.id.replace(/^:/, ''); 
            return fetch(`https://openapi.programming-hero.com/api/news/category/${formattedId}`) 
            .then(response => response.json()) 
            .catch(error => { console.error('Error fetching data:', error); 
                return { error }; 
            }); 
        },
     }, 
    ],
  },
  {
    path: "news",
    element: <h1>News section</h1>,
  },
  {
    path: "auth",
    element: <h1>auth log in section</h1>,
  },
  {
    path: "*",
    element: <h1>Error</h1>,
  },
]);

export default router;