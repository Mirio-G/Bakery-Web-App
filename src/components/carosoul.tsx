import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

import './App.css'

function carosoul(){

  return (
    <div className = 'carasoul-container'>
      <div className = 'carasoul-item'>
        <h1>Item 1 </h1>
      </div>
      <div className = 'carasoul-item'>
        <h1>Item 2 </h1>
      </div>
      <div className = 'carasoul-item'>
        <h1>Item 3 </h1>
      </div>
    </div>

  )
}
