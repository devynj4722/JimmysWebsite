import React from 'react'
import { createRoot } from 'react-dom/client';
import Basic from './pages/Components/Checkoutpage';
import Cars from './pages/Stores/Cars';
import App from './pages/Components/App';
import Home from './pages/Home';
import './style/style.css'

import {
  createBrowserRouter,
  RouterProvider,
  HashRouter,
  Route,
  Link,
} from "react-router-dom";
import Motorcycles from './pages/Stores/Motorcycles';
import CarsTruckProjects from './pages/Stores/CarTruckProjects';
import MotorcycleParts from './pages/Stores/MotorcycleParts';
import Contact from './pages/Components/Contact';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path:'/shop',
    element:<App />
  },
  {
    path:'/contact',
    element: <Contact />
  },
  {
    path: "/check-out",
    element: <Basic />,
  },
  {
    path:'/cars',
    element: <Cars />
  },
  {
    path:'/motorcycles',
    element: <Motorcycles />
  },
  {
    path:'/mcycle-parts',
    element: <MotorcycleParts />
  },
  {
    path:'/car-truck-projects',
    element: <CarsTruckProjects />
  },
]);

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<RouterProvider router={router} />);