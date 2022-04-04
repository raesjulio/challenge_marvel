import { useState } from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Home } from './pages/Home/Home'
import { Team } from './pages/Teams/Team'
import "./styles/global.scss"

function App() {


  return (<>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/yourteam" element={<Team />} />
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
