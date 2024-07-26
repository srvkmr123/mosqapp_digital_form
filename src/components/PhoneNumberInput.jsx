import React, { useState } from 'react';
import Select from 'react-select';
import 'react-phone-input-2/lib/style.css';

const countryOptions = [
  { value: '+31', label: '+31 (Netherlands)', code:'NL' },
  // { value: '+44', label: '+44 (United Kingdom)' },
  // { value: '+91', label: '+91 (India)' },
  // Add more country options as needed
];

const PhoneNumberInput = ({phone, setPhone, setPhoneError, setCountryCode}) => {
  const [selectedCountry, setSelectedCountry] = useState(countryOptions[0]);

  const handleCountryChange = (selectedOption) => {
    console.log(selectedOption.value);
    const value ={ value: selectedOption.value, label: selectedOption.value}
    setSelectedCountry(value);
    setCountryCode(selectedOption)
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneError(false)
    const value = event.target.value;
    // Allow only numbers
    const numericValue = value.replace(/[^0-9]/g, '');
    setPhone(numericValue);
  };
  return (
    <div className='input-box' style={{ display: 'flex', alignItems: 'center', padding:0 }}>
      <Select
        value={selectedCountry}
        onChange={handleCountryChange}
        options={countryOptions}
        
        styles={{
          container: (provided) => ({
            ...provided,
            width: '110px',
            outline:'none'
            
          }),
          control: (provided) => ({
            ...provided,
            height: '54px',
            borderRadius: '8px',
            borderColor: 'transparent',
            outline:'none'
          }),
          singleValue: (provided) => ({
            ...provided,
            fontSize: '18px',
            fontWeight: '500',
            fontFamily: 'Raleway',
            color: '#1a1a1a',
          }),
          valueContainer: (provided) => ({
            ...provided,
            paddingRight: 0,
            outline:'none',
            borderRight:'none'
          }),
          indicatorsContainer: (provided) => ({
            ...provided,
          // background:'red',
          borderLeft:'none'
          }),
          option: (provided, state) => ({
            ...provided,
            fontSize: '16px',
            fontFamily: 'Raleway',
            color: state.isSelected ? '#1a1a1a' : '#555',
            backgroundColor: state.isSelected ? '#f0f0f0' : '#fff',
            padding: '10px 12px',
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: '#e6e6e6',
            },
          }),
        }}
      />
      <input
        type="text"
        className='input-box'
        value={phone}
        onChange={handlePhoneNumberChange}
        placeholder="541-456-7890"
        onInput={handlePhoneNumberChange}
        style={{
          width: '100%',
          height: '52px',
          fontSize: '18px',
          fontWeight: '500',
          fontFamily: 'Raleway',
          color: '#1a1a1a',
          // borderRadius: '8px',
          borderBottomLeftRadius:'0px',
          borderTopLeftRadius:'0px',
          borderColor:'transparent',
          // borderLeft:'1px solid #1a1a1a',
          // border: '1px solid #d9d9d9',
          paddingLeft: '10px',
        }}
      />
    </div>
  );
};

export default PhoneNumberInput;
