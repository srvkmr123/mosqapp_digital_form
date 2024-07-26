import React, { useEffect, useState } from 'react'
import Banner from '../Banner/Banner'
import LanguageSelect from '../LanguageSelect/LanguageSelect'
import PlanCard from '../PlanCard/PlanCard'
import axios from 'axios'
import { baseUrl } from '../../app.config'
import ContactNumberInput from '../ContactNumberInput'
import { Formik } from 'formik'
// import { FlagIcon, FlagIconCode } from 'react-flag-icon-css';
// import 'react-flag-icon-css/css/flag-icon.min.css';

const countryOptions = [
  
  { code: 'gb', name: 'English', flag: 'https://cdn.jsdelivr.net/npm/flag-icon-css@3.5.0/flags/4x3/gb.svg' },
  { code: 'nl', name: 'Dutch', flag: 'https://cdn.jsdelivr.net/npm/flag-icon-css@3.5.0/flags/4x3/nl.svg' },
  // Add more countries as needed
];

function Form() {
  const mosqueId = "65dc9e818c40d70018da5b1d"
  const [mosqueName, setMosqueName] = useState(null)
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [plans, setPlans] = useState([])
  const [selectedLanguage, setSelectedLanguage] = useState(null)
  const [name, setName] = useState('');
  const [email,setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  useEffect(()=>{
   const getMosqueDetails= async ()=>{
     try {
      
      const res = await axios.get(`${baseUrl}/v1/entity?entityId=${mosqueId}` );
      console.log(res.data);
      const selectedMosque = res?.data[0];
      setMosqueName(selectedMosque?.name)
      setPlans(selectedMosque.subscriptions ? selectedMosque.subscriptions : selectedMosque.subscription)
     } catch (error) {
      
     }
   } 
   getMosqueDetails()
  },[])
console.log('sl',selectedLanguage?.code);
  return (
    <div className='form'>
      <Banner name={mosqueName}/>
      <main className='form-content'>
       <h1 className='sub-heading'>Enter Details</h1>
       <div className='form-group form-group-1'>
        <div>
         <label className='label' style={{color:'#7e7e7e'}}>Select Language<span style={{ color: "#FE1717" }}>*</span></label> 
         
         <LanguageSelect
              options={countryOptions} 
              value={selectedLanguage} 
              onChange={setSelectedLanguage} 
            />
        </div>
        <div>
         <label className='label' style={{color:'#7e7e7e'}}>Enter Name<span style={{ color: "#FE1717" }}>*</span></label> 
        <input placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} className='input-box' type="text" />
        </div>
       </div>
       <div className='form-group form-group-2'>
       <div>
         <label className='label' style={{color:'#7e7e7e'}}>E-mail address<span style={{ color: "#FE1717" }}>*</span></label> 
        <input placeholder='Enter E-mail address' onChange={(e)=>setEmail(e.target.value)} className='input-box' type="text" />
        </div>
        <div>
         <label className='label' style={{color:'#7e7e7e'}}>Contact Number<span style={{ color: "#FE1717" }}>*</span></label> 
        {/* <input placeholder='Enter E-mail address' className='input-box' type="text" /> */}
        <ContactNumberInput/>
        </div>
       </div>
       <div className='line'></div>
       <h1 className='sub-heading'>Payment Details</h1>
       <div className='input-container' style={{width:'50%'}}>
         <label className='label' style={{color:'#7e7e7e'}}>Payment Mode<span style={{ color: "#FE1717" }}>*</span></label> 
        <input placeholder='Enter Name' disabled value={'Automatic'} className='input-box' type="text" />
        </div>
        <div className="plans">
          {plans?.length>0 ?plans?.map(plan=><PlanCard key={plan._id} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} plan={plan}/>):<label className='label'>No active plans..</label>}
        </div>
        <div className="btn-container">
        <button onClick={()=>console.log({plan:selectedPlan.plan_name, name, email})} className='submit-btn' disabled={!selectedPlan} style={{background:selectedPlan?'#D0004B':'#a0aec0'}}>Submit</button>
        </div>
        
      </main>
    </div>
  )
}

export default Form