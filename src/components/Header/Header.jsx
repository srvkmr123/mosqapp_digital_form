import React from 'react'
import Logo from '../../assets/images/mosqapp-logo-form.svg'
import LanguageSelector from '../../LanguageSelector/LanguageSelector'

function Header() {
  return (
    <div className='header'>
        <img src={Logo} alt="logo" className='header-logo' />
        <LanguageSelector/>
    </div>
  )
}

export default Header

