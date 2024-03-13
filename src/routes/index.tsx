import React from "react";
import { RouteObject } from "react-router";

import ErrorPage from './ErrorPage/index';
import Home from './Home/index';

const route: Array<RouteObject> = [
    {
      path: "/",
      element: <Home/>,
      errorElement: <ErrorPage/>
    }
]

export default route;