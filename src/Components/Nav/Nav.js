import React from 'react'
import './Nav.css'
import { ReactComponent as Logo } from "../../Assets/Logo.svg"
function Nav() {
  return (
    <nav className='nav-container'>
      <div className='nav-container-width'>
          <Logo className='logo' />
          <ul className='nav-links'>
            <li className='nav-link'>Home</li>
            <li className='nav-link'>About</li>
            <li className='nav-link'>Menu</li>
            <li className='nav-link'>Reservations</li>
            <li className='nav-link'>Order Online</li>
            <li className='nav-link'>Login</li>
          </ul>
      </div>
    </nav>
  )
}

export default Nav