import React from "react";
import { RouteObject } from "react-router";

import ErrorPage from './ErrorPage/index';
import Home from './Home/index';
import Punish from './Punish/index';
import Tops from './Tops/index';

const route: Array<RouteObject> = [
    {
      path: "/",
      element: <Home/>,
      errorElement: <ErrorPage/>
    },
    {
      path: "/punish/*",
      element: <Punish/>
    },
    {
      path: "/tops/*",
      element: <Tops/>
    }
]

export default route;