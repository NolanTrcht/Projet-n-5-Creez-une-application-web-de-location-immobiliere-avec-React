import './style/App.css'

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Error from './pages/Error.jsx'
import Logement from './pages/Logement.jsx'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
      <Router>
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/logement/:id' element={<Logement />} />
            <Route path='*' element={<Error />} />
          </Routes>
        <Footer />
      </Router>
  )
}

export default App
