import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Layout from './components/layout'
import Hero from './pages/hero/hero'
import RifleBird from './pages/riflebird/riflebird'
import Directory from './pages/directory/directory'
import Contact from './pages/contact/contact'

import './App.css'
import "@fontsource/exo-2";
import "@fontsource/inter";
import "@fontsource/teko";
import "@fontsource/michroma"

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Hero />} />
          <Route path='/about' element={<Hero />} />
          <Route path='/directory' element={<Directory />} />
          <Route path='/contact' element={<Contact />}/>
        </Route>
        <Route path='/riflebird' element={<RifleBird />} />
      </Routes>
    </Router>
  )
}

export default App
