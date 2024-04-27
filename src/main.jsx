import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import Router from './routes/Router';
import { Toaster } from 'react-hot-toast';
import GlobalContext from './GlobalContext/GlobalContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalContext>
      <RouterProvider router={Router} />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </GlobalContext>
  </React.StrictMode>,
)
