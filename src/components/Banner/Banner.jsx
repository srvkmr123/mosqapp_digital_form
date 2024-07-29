import React from 'react'
import { useTranslation } from 'react-i18next'
import strip from '../../assets/images/banner-strip.svg'

function Banner({mosque}) {
  const {t} = useTranslation();
  return (
    <div className='banner'>
        
        <div style={{ width:'50%',marginLeft:'40px'}}>
         <p className='banner-title' >{t('Submit details registered for Auto Debit')}</p> 
        <label style={{fontWeight:700, color:'#D0004B', fontSize:'25px'}}>{mosque?.name || 'NA'}</label>
        <p className='sub-heading' style={{fontWeight:500}}>{mosque?.city}, {mosque?.country}</p>
        </div>
        <img className='banner-strip' src={strip} alt='strip'/>
    </div>
  )
}

export default Banner