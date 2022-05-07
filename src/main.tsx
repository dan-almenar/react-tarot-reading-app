import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './routes/HomePage'
import AboutPage from './routes/AboutPage'
import Error404Page from './routes/404'
import { ParallaxProvider } from 'react-scroll-parallax'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ParallaxProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="about" element={<AboutPage />} />
        <Route path='*' element={<Error404Page />} />
      </Routes>
      {/* <React.StrictMode>
        <App />
      </React.StrictMode> */}
    </BrowserRouter>
  </ParallaxProvider>
)
