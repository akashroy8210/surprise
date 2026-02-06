import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './component/Landing Page/LandingPage'
import FloatingHearts from './component/FloatingHeart'
import Happy from './component/Landing Page/Happy'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Teddy,Choclate,Love,Promise,Valentine } from './component/cards'
function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<LandingPage />} />
        <Route path="/teddy" element={<Promise />} />
        <Route path="/teddy" element={<Valentine />} />


        <Route path="/teddy" element={<Teddy />} />
        <Route path="/chocolate" element={<Choclate />} />
        <Route path="/love" element={<Love />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
