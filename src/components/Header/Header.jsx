import React from 'react'
import Logo from '../../assets/images/mosqapp-logo-form.svg'
import LanguageSelector from '../../LanguageSelector/LanguageSelector'

function Header({setLanguage}) {
  return (
    <div className='header'>
        <img src={Logo} alt="logo" className='header-logo' />
        <LanguageSelector setLanguage={setLanguage}/>
    </div>
  )
}

export default Header

