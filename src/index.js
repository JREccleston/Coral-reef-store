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
import LpsPage from './Pages/LpsPage';
import SpsPage from './Pages/SpsPage';
import SftPage from './Pages/SftPage';
import MotherColPage from './Pages/MotherColPage';


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
  {
    path: "LpsPage",
    element: <LpsPage />,
  },
  {
    path: "SpsPage",
    element: <SpsPage />,
  },
  {
    path: "SftPage",
    element: <SftPage />,
  },
  {
    path: "MotherColPage",
    element: <MotherColPage />,
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <RouterProvider router={router} />

);


