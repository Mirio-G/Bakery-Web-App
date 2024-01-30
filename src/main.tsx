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
    </BrowserRouter>
  </React.StrictMode>,
)
