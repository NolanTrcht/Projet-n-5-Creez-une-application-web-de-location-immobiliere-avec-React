import './style/App.css'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Error from './pages/Error.jsx'
import Logement from './pages/Logement.jsx'
import Layout from './components/Layout.jsx'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
      <Router>
          <Routes>
            <Route element={<Layout />} >
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/logement/:id' element={<Logement />} />
              <Route path='*' element={<Error />} />
            </Route>
          </Routes>
      </Router>
  )
}

export default App
