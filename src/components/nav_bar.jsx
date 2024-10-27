import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

export const NavBar = () => {
  const navLinkClass = ({ isActive }) => {
    const classes = ['nav-bar__link', 'button']
    if (isActive) classes.push('nav-bar__link--active')
    return classes.join(' ')
  }
  const linkStyle = {
    backgroundColor: '#AD5D4E', // Coffee color
    color: '#FFFFFF', // White color for text
    padding: '10px',
    borderRadius: '5px',
    margin: '0 5px'
  }
  return (
    <nav className='nav-bar' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <img src={logo} alt="Logo" style={{ height: '50px', marginRight: '20px' }} />
      <div style={{ display: 'flex' }}>
        <NavLink
          className={navLinkClass}
          to='/'
          style={linkStyle}
        >
          Inicio
        </NavLink>
        <NavLink
          className={navLinkClass}
          to='/quienes-somos'
          style={linkStyle}
        >
          Quienes Somos
        </NavLink>
        <NavLink
          className={navLinkClass}
          to='/apoyo-investigacion'
          style={linkStyle}
        >
          Apoyo Investigación
        </NavLink>
        <NavLink
          className={navLinkClass}
          to='/apoyo-memoristas'
          style={linkStyle}
        >
          Apoyo Memoristas
        </NavLink>
      </div>
    </nav>
  )
}

export default NavBar
