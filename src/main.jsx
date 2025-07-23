import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
}from "react-router-dom";
import './index.css'
const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"gadgets/:id",
        element:<GadgetDetails></GadgetDetails>,
        loader: ()=>fetch('/gadgetData.JSON'),
      },
      {
        path:"dashboard",
        element:<Dashboard></Dashboard>,
        loader: ()=>fetch('/gadgetData.JSON'),
      },
      {
        path:"statistics",
        element:<Statistics></Statistics>
      }
      
    ]
  },
]);

import App from './App.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import GadgetDetails from './components/GadgetDetails/GadgetDetails.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Statistics from './components/Statistics/Statistics.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
