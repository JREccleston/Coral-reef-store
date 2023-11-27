import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
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
import HomePage from './HomePage';
import LoginPage from './Pages/Login';
import CartPage from './Pages/CartPage';

// const http = require('http');
// const port = 3000;
// const server = http.createServer(function (req, res) {
//   res.write('Hello Node')
//   res.end()
// });

// server.listen(port, function (error) {
//   if (error) {
//     console.log('Something went wrong', error);
//   } else {
//     console.log('Server is listening on port' + port);
//   }
// })


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
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
    element: <HomePage />,
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
    path: "LoginPage",
    element: <LoginPage />,
  },
  {
    path: "CartPage",
    element: <CartPage />,
  },

]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <RouterProvider router={router} />

);


