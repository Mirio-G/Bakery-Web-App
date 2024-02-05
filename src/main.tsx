import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import socketIO from 'socket.io-client';

import App from './home.tsx';
import ChatPage from "./components/chat/ChatPage.tsx";

const socket = socketIO.connect('');

import './style/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      {/*<App />*/}
      <Routes>
        <Route path="/" element={<App socket={socket} />}></Route>
        <Route path="/chat" element={<ChatPage socket={socket} />}></Route>
      </Routes>

      {/*react carousel*/}
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      {/*bootstrap*/}
      <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>
      <script src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js" crossorigin></script>

      <script src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin></script>
      
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossorigin="anonymous"
      />

    </BrowserRouter>
  </React.StrictMode>,
)
