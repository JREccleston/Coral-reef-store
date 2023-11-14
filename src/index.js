import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import RefundPolicy from './Pages/RefundPolicy';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ShippingPolicy from './Pages/ShippingPolicy';
import ContactInformation from './Pages/ContactInformation';
import About from './Pages/About';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "RefundPolicy",
    element: <RefundPolicy />,
  },
  {
    path: "ShippingPolicy",
    element: <ShippingPolicy />,
  },
  {
    path: "ContactInformation",
    element: <ContactInformation />,
  },
  {
    path: "Home",
    element: <App />,
  },
  {
    path: "About",
    element: <About />,
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <RouterProvider router={router} />

);


