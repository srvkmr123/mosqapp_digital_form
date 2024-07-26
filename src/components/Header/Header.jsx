import React from 'react'
import Logo from '../../assets/images/mosqapp-logo-form.svg'

function Header() {
  return (
    <div className='header'>
        <img src={Logo} alt="logo" className='header-logo' />
    </div>
  )
}

export default Header

