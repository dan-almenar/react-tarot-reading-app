import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutPage from './routes/AboutPage'
import TarotPage from './routes/TarotPage'
import ErrorPage from './routes/ErrorPage'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="about" element={<AboutPage />} />
        <Route path='tarot' element={<TarotPage />} />        
        <Route path='*'
          element={<ErrorPage code={'404: Not found'}
          message={'The page you are trying to access does not exist'} />}
        />
      </Routes>
      {/* <React.StrictMode>
        <App />
      </React.StrictMode> */}
    </BrowserRouter>
)
