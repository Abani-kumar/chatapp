import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Appcontextprovider from './Appcontext/Appcontextprovider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<ToastContainer></ToastContainer>
 <Appcontextprovider>
      <App />
 </Appcontextprovider>
</BrowserRouter>
);

