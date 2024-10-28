import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home_page'
import Prestamos from '../pages/prestamos' 
import LightbulbPage from '../pages/lightbulb_page'
import Reserva_Salas from '../pages/reserva_salas'


import NavBar from '../components/nav_bar'

const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'>
        <h1 className='layout__title' style={{ textAlign: 'center', color: 'white', textTransform: 'uppercase' }}>Biblioteca USM</h1>
        <NavBar />
        <div className='layout__page'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/prestamos' element={<Prestamos />} /> 
            <Route path='/reserva_salas' element={<Reserva_Salas />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Layout
