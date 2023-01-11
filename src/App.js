import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Authentication-pages/Login'
import Register from './Pages/Authentication-pages/Register'
import Dashboards from './Pages/Dashboards/Dashboards'

function App() {
  return (
    <Routes>
      <Route index element={<Login />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/dashboard' element={<Dashboards />}/>
    </Routes>
  );
}

export default App;
