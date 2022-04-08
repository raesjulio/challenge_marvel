import {  Routes, Route, } from 'react-router-dom'
import { FooterPage } from './components/FooterPage/FooterPage'
import { Header } from './components/Header/Header'
import { Character } from './pages/Character/Character'
import { Home } from './pages/Home/Home'
import { Page } from './pages/Page/Page'
import Search from './pages/Search/Search'
import { Team } from './pages/Team/Team'
import "./styles/global.scss"

function App() {


  return (<>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/yourteam" element={<Team />} />
        <Route path="/character/:id" element={<Character />} />
        <Route path="/search/:search" element={<Search />} />
        <Route  path="/page/:page" element={<Page />} />
      </Routes>
      <FooterPage/>
  </>
  )
}

export default App
