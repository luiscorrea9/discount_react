import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parrafo from './components/Parrafo.jsx'
import Navbar from './components/Navbar.jsx'
import Lista from './components/Lista.jsx'
import Card from './components/Card.jsx'
import Nav from 'react-bootstrap/Nav';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import Inicio from './components/Inicio'
import Contacto from './components/Contacto'
import Quienessomos from './components/Quienessomos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Nav fill variant="tabs">
      <Nav.Item>
        <Nav.Link href="/">Inicio</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/contacto">Descuentos</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/quienessomos">Productos</Nav.Link>
      </Nav.Item>
        </Nav>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
        <Route path="/quienessomos" element={<Quienessomos/>}/>
      </Routes>
    </Router>
  )
}

export default App
