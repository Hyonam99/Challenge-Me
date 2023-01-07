import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Authentication-pages/Login'
import Register from './Pages/Authentication-pages/Register'
import LandingPage from './Pages/Landing-Page/LandingPage'

function App() {
  return (
    <Routes>
      <Route index element={<Login />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/landing-page' element={<LandingPage />}/>
    </Routes>
  );
}

export default App;
