import React from 'react'

import Home from '../pages/Home';
import About from '../pages/About';
import Vehicles from '../pages/Vehicles';
import Bookings from '../pages/Bookings';
import Login from '../pages/Login';
import {createBrowserRouter} from "react-router-dom";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
        path:"/about",
        element:<About/>,
    },
    {
        path:"/vehicles",
        element:<Vehicles/>
    },
    {
        path:"/bookings",
        element:<Bookings/>,
    },
    {
        path:"/login",
        element:<Login/>
    }
  ]);

export default routes
