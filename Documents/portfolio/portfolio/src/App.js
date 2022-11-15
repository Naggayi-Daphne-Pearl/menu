import React from 'react'
import { Routes, Route } from "react-router-dom";

// pages 
import HomePage from './Pages/HomePage'


function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
      </Routes>

    </div>
  );
}

export default App;
