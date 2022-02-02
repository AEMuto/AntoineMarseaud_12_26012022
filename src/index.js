import React from 'react'
import ReactDOM from 'react-dom'
import Profil from './pages/Profil'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SelectUser from './pages/SelectUser'
import NotFound from './pages/NotFound'
import { GlobalStyles } from './theme/GlobalStyles'
import { UserProvider } from './utils/context'
import Nav from './components/Nav'
import Wrapper from './components/Wrapper'

function Router() {
  return (
    <BrowserRouter>
      <UserProvider>
        <GlobalStyles />
        <Nav />
        <Wrapper>
          <Routes>
            <Route path="/" element={<SelectUser />} />
            <Route path="/users/:id" element={<Profil />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Wrapper>
      </UserProvider>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
)
