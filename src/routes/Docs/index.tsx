import React from "react";
import { RouteObject } from "react-router";

import About from "./About/index";
import Eula from "./Eula/index";
import FriendUrls from "./FriendUrls/index";
import Join from './Join/index';

const route: Array<RouteObject> = [
    {
      path: "/docs/about",
      element: <About/>
    },
    {
      path: "/docs/eula",
      element: <Eula/>
    },
    {
      path: "/docs/friends",
      element: <FriendUrls/>
    },
    {
      path: "/docs/join",
      element: <Join/>
    }
]

export default route;