import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home_page'
import Prestamos from '../pages/prestamos' 
import Reserva_Salas from '../pages/reserva_salas'

import NavBar from '../components/nav_bar'
import logo from '../assets/logo.png' // Asegúrate de que la ruta al logo sea correcta

const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'>
        <div className='layout__header' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: '10px', backgroundColor: '#D6A539' }}>
          <img src={logo} alt='Logo' className='layout__logo' style={{ marginRight: '10px', width: '200px', height: '100px' }} />
          <h1 className='layout__title' style={{ flex: 1, textAlign: 'center', color: 'white', textTransform: 'uppercase', marginRight: '200px' }}>Biblioteca USM</h1>
        </div>
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
