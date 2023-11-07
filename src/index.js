import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DefaultSidebar } from './componets/sidebar';
import { ThemeProvider } from "@material-tailwind/react";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <ThemeProvider>
    <DefaultSidebar />
  </ThemeProvider>


);


