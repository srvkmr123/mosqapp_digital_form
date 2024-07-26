import React from 'react'
import doneImg from './assets/images/done_dig.svg'

function SuccessPage() {
  return (
    <div className='success'>
        <img src={doneImg} alt="done" className='success-img'/>
        <p className='sub-heading'>Congratulations!</p>
        <p className='label' style={{color:'#7e7e7e',width:'70%', textAlign:'center', lineHeight:'28px', marginTop:'-10px', marginBottom:'20px'}}>We will review all the information and if all is okay, our team will message you within 24 - 48 hours.</p>
        <button className='pdf-btn' style={{background:'#D0004B'}}>Download Response</button>
    </div>
  )
}

export default SuccessPage