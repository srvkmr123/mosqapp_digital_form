import React from 'react'
import { useState } from 'react';
import doneImg from './assets/images/done_dig.svg'
import { useTranslation } from 'react-i18next'
import printDocument from './helpers/printDocument';

function SuccessPage() {
  const {t} = useTranslation();
  const [loading, setLoading] = useState(false);

  const handlePrintDocument = async () =>{
     try {
      setLoading(true);
      await printDocument(setLoading);
     } catch (error) {
      console.log(error);
      setLoading(false)
     }
  }
  console.log('loading --->',loading);
  return (
    <div className='success'>
        <img src={doneImg} alt="done" className='success-img'/>
        <p className='sub-heading'>{t('Congratulations')}!</p>
        <p className='label' style={{color:'#7e7e7e',width:'70%', textAlign:'center', lineHeight:'28px', marginTop:'-10px', marginBottom:'20px'}}>{t("We will review all the information and if all is okay, our team will message you within 24 - 48 hours")}</p>
        <button onClick={handlePrintDocument} className='pdf-btn' style={{background:loading?"#a0aec0":'#D0004B'}}>{t("Download PDF")}</button>
    </div>
  )
}

export default SuccessPage