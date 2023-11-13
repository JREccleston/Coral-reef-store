import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import RefundPolicy from './Pages/RefundPolicy';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PrivacyPolicy from './Pages/PrivacyPolicy';
import TermsOfService from './Pages/TermsOfService';
import ShippingPolicy from './Pages/ShippingPolicy';
import ContactInformation from './Pages/ContactInformation';


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
    path: "PrivacyPolicy",
    element: <PrivacyPolicy />,
  },
  {
    path: "TermsOfService",
    element: <TermsOfService />,
  },
  {
    path: "ShippingPolicy",
    element: <ShippingPolicy />,
  },
  {
    path: "ContactInformation",
    element: <ContactInformation />,
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <RouterProvider router={router} />

);


