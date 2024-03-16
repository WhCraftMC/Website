import React from "react";
import { RouteObject } from "react-router";

import ErrorPage from './ErrorPage/index';
import Home from './Home/index';
import Punish from './Punish/index';

const route: Array<RouteObject> = [
    {
      path: "/",
      element: <Home/>,
      errorElement: <ErrorPage/>
    },
    {
      path: "/punish/*",
      element: <Punish/>
    }
]

export default route;