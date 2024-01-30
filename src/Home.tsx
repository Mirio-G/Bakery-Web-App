import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

 // We import all the components we need in our app
import Navbar from "./components/navbar.tsx";
import RecordList from "./components/recordList.tsx";
import Edit from "./components/edit.tsx";
import Create from "./components/create.tsx";
import Test from "./Test.tsx";

import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style/App.css'

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>

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
    </>
  )
}

export default Home
