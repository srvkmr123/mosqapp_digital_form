import React,{useRef, useEffect} from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const ContactNumberInput = ({phone, setPhone, setPhoneError, setCountryCode}) => {
  const phoneInputRef = useRef(null);
  const handleOnChange = (value, country) => {
    console.log(country.dialCode);
    setPhone(value);
    setCountryCode(country.dialCode)
    setPhoneError(false)
    // setCountryCode(country.dialCode);
  };
  
  return (
    <div className='input-box phone-input-container'>
      <PhoneInput
        country={'nl'}
        // onlyCountries={['nl','gb','in']}
        value={phone}
        ref={phoneInputRef}
        onChange={handleOnChange}
        inputStyle={{
          width: '100%',
          height: '54px',
          fontSize:'18px',
          fontWeight:'500',
          fontFamily:'raleway',
          color:'#1a1a1a',
          borderRadius:'8px',
         
        }}
        buttonStyle={{
          height: '54px',
          width:'45px',
          background:'inherit',
          borderRadius:'8px',
          
        }}
        dropdownStyle={{
          border: '1px solid #d9d9d9',
          borderRadius: '4px'
        }}
        name="contact-input"
        enableSearch
        containerClass="phone-input"
        inputProps={{
          placeholder: '123456789',
          name: 'contact-input', 
          required: true,
        }}
        searchPlaceholder='search...'
        countryCodeEditable={false}
      />
    </div>
  );
};

export default ContactNumberInput;
