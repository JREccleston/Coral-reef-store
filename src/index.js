import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DefaultSidebar, NavbarWithMegaMenu } from './componets/NavBarWithMegaMenu';
import { ThemeProvider } from "@material-tailwind/react";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <App />

);


