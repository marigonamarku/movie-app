import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Home';
import Movie from './Movie';
import {Layout} from './Layout';

const router = createBrowserRouter([
 {path: "/",
  element: <Layout />,
  children: [
    {
      path: "/",
        element: <Home />
    },
    // {
    //     path: "movie",
    //     element: <Movie />
        
    // },
],}
  
]);



createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>,
)
