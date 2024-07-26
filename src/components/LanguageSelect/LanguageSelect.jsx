import React, { useState } from 'react';
import './LanguageSelect.css'; // Add necessary styling here


const LanguageSelect = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="input-box custom-select-container">
      <div className="custom-select" onClick={() => setIsOpen(!isOpen)}>
        {value && <img src={value.flag} alt={value.name} className="flag-icon" />}
        <span>{value ? value.name : 'Select Language'}</span>
        <span style={{marginLeft:'auto'}} className="arrow">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M7 10l5 5 5-5z"/>
          </svg>
        </span>
      </div>
      {isOpen && (
        <div className="custom-select-options">
          {options.map(option => (
            <div 
              key={option.code} 
              className="custom-select-option" 
              onClick={() => handleOptionClick(option)}
            >
              <img src={option.flag} alt={option.name} className="flag-icon" /> {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelect;
