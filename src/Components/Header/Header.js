import React from 'react'
import './Header.css'
import Button from '../Button/Button'
function Header() {
  return (
    <header>
      <div className='header-container-width'>
          <div>
            <h1 className='header-h1'>Little Lemon</h1>
            <h2 className='header-h2'>Chigago</h2>
            <p className='header-p'>We are a familly owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <Button text="Reserve a table" />
          </div>
          <div>
            <img src={require("../../Assets/restauranfood.jpg")} alt = "Restaurant Food" width={400} height={500} className='header-image'></img>
          </div>
      </div>
    </header>
  )
}

export default Header