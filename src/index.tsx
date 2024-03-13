import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/assets/css/global.scss';
import { BrowserRouter, RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom';
import route from './routes/index';
import docsroute from './routes/Docs/index';
import NavBar from './components/NavBar/NavBar';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const routes : Array<RouteObject> = [
  ...route,
  ...docsroute
]

const router = createBrowserRouter(routes);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar/>
    </BrowserRouter>
    <RouterProvider router={router} />
  </React.StrictMode>
);