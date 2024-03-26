import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './Home.tsx';
import Checkout from "./components/checkout.tsx";
import Payment from "./components/payment.tsx";

import './style/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
