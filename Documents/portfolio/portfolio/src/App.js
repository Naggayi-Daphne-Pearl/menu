import React from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css'

// pages 
import HomePage from './Pages/HomePage'
import Projects from './Pages/Projects'
import About from './Pages/About'
import NavBar from './Components/NavBar/NavBar'


function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/about" element={<About />} />
      </Routes>

    </div>
  );
}

export default App;
