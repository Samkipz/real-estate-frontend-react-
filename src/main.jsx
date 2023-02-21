import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import './main.scss'
import { ContextProvider } from './contexts/ContextProvider'
import { ToastContainer } from 'react-toastify';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <ToastContainer />
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>,
)
