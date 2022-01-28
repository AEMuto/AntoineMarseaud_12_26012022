import React from 'react'
import ReactDOM from 'react-dom'
import Profil from './pages/Profil'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SelectUser from './pages/SelectUser'
import NotFound from './pages/NotFound'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SelectUser />} />
        <Route path="/users/:id" element={<Profil />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
)
