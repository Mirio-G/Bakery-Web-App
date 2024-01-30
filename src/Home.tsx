import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

 // We import all the components we need in our app
import Navbar from "./components/navbar.tsx";
import RecordList from "./components/recordList.tsx";
import Edit from "./components/edit.tsx";
import Create from "./components/create.tsx";
import Test from "./Test.tsx";
<<<<<<< HEAD
=======
import Card from "./components/card.tsx"
>>>>>>> 20547344c6f048dbf4753f2d63feaaaad9592fae

import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style/App.css'
import './style/card.css'

import Carousel from "./components/carousel.tsx";

function home() {
  const [count, setCount] = useState(0);

  return (
    <>
<<<<<<< HEAD

      <body>
        <div>
          <h2 id="left"><b>Deals</b></h2>
        </div>
      </body>

      <body>
        <div>
          <h2 id="left"><b>Trending</b></h2>
        </div>
      </body>
=======
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>ByteSized Bakery</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/Home.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Carousel />
      <Test />
      <Card />
>>>>>>> 20547344c6f048dbf4753f2d63feaaaad9592fae
    </>
  )
}

export default home
