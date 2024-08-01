import React from 'react'
import { useState, useEffect } from 'react';
import doneImg from './assets/images/done_dig.svg'
import { useTranslation } from 'react-i18next'
import printDocument from './helpers/printDocument';
import Banner from './components/Banner/Banner';
import axios from 'axios';
import { baseUrl } from './app.config';
import { useParams } from 'react-router-dom';

function SuccessPage() {
  const {t} = useTranslation();
  const [loading, setLoading] = useState(false);
  const [currentMosque, setCurrentMosque] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(()=>{
   setCurrentMosque(JSON.parse(localStorage.getItem('mosque')))
   setUserId(localStorage.getItem('userId'))
  },[])

  const handlePrintDocument = async () =>{
     try {
      setLoading(true);
      await printDocument(setLoading, userId);
     } catch (error) {
      console.log(error);
      setLoading(false)
     }
  }

  return (
    <div className="form">
      <Banner mosque={currentMosque} />
    <div className='success'>
        <img src={doneImg} alt="done" className='success-img'/>
        <p className='sub-heading'>{t('Congratulations')}!</p>
        <p className='label' style={{color:'#7e7e7e',width:'70%', textAlign:'center', lineHeight:'28px', marginTop:'-10px', marginBottom:'20px'}}>{t("We will review all the information and if all is okay, our team will message you within 24 - 48 hours")}</p>
        <button onClick={handlePrintDocument} className='pdf-btn' style={{background:loading?"#a0aec0":'#D0004B'}}>{t("Download PDF")}</button>
    </div>
    </div>
  )
}

export default SuccessPage