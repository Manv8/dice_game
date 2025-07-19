import React, { useState } from 'react'
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from './components/Hero.jsx';
import GamePage from './components/GamePage.jsx';

const App = () => {
  const [isHeroPage, setIsHeroPage] = useState(false)
  const togglePage = () => {
    setIsHeroPage((prev) => !prev);
  }
  return (
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Hero />} />
     <Route path="/game" element={<GamePage />} />
     </Routes>
    </BrowserRouter>
    // <>
    //   {isHeroPage ? <GamePage /> : <Hero
    //     toggle={togglePage}
    //   />}
    // </>
  )
}

export default App