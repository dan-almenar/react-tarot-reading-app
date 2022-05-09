// import { useState, createContext } from 'react'
import './App.css'
import HomePage from './routes/HomePage'
import NavbarComponent from './components/layout/NavbarComponent'
import FooterComponent from './components/layout/FooterComponent'

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <HomePage />
      <FooterComponent />
    </div>
  )
}

export default App
