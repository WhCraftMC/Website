import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/assets/css/global.scss';
import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom';
import route from './routes/index';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const routes : Array<RouteObject> = [
  ...route
]

const router = createBrowserRouter(routes);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);