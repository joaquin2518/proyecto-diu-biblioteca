import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  const navLinkClass = ({ isActive }) => {
    const classes = ['nav-bar__link', 'button']
    if (isActive) classes.push('nav-bar__link--active')
    return classes.join(' ')
  }
  const linkStyle = {
    backgroundColor: '#033655', // Coffee color
    color: '#FFFFFF', // White color for text
    padding: '10px',
    borderRadius: '5px',
    margin: '0 5px'
  }
  return (
    <nav className='nav-bar' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>

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
