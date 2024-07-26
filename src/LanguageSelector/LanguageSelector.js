import React, { useEffect, useState } from 'react';
import i18next from '../services/i18next'

const LanguageSelector = ({}) => {
  const [currentLanguage, setCurrentLanguage] = useState('nl');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: 'https://flagcdn.com/gb.svg' },
    { code: 'nl', name: 'Dutch', flag: 'https://flagcdn.com/nl.svg' }
  ];

  const currentLanguageData = languages.find(lang => lang.code === currentLanguage);
  console.log(currentLanguage);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const changeLanguage = (code) => {
    setCurrentLanguage(code);
    i18next.changeLanguage(code)
    setDropdownOpen(false);
  };

  return (
    <div className="language-select-container">
      <div className="language-select-label" onClick={toggleDropdown}>
        <img src={currentLanguageData.flag} style={{borderRadius:"50%",objectFit:'cover'}}   height="20" width="20" alt={currentLanguageData.name} />
        {currentLanguageData.code.toUpperCase()} <span className="down-arrow">&#x25BE;</span>
      </div>
      {dropdownOpen && (
        <div className="language-select-dropdown">
          {languages.map(lang => (
            <div
              key={lang.code}
              className="option"
              onClick={() => changeLanguage(lang.code)}
            >
              <img src={lang.flag} width="20" alt={lang.name} />
              {lang.name}
            </div>
          ))}
        </div>
      )}
      <style jsx>{`
        .language-select-container {
          position: relative;
          margin-right:70px;
          border: none;
          
        }

        .language-select-label {
          display: flex;
          align-items: center;
          cursor: pointer;
          padding: 10px;
          font-family: Raleway;
          font-size:14px;
          color:#1A1A1A;
          
        }
        .down-arrow {
          margin-left: 5px;
          font-size: 15px;
          color: #D0004B;
        }
        .language-select-label img {
          margin-right: 8px;
        }

        .language-select-dropdown {
          display: block;
          position: absolute;
          background-color: white;
          border: 1px solid #ccc;
          border-radius: 4px;
          margin-top: 5px;
          min-width: 120px;
          z-index: 1;
        }

        .language-select-dropdown .option {
          padding: 10px;
          cursor: pointer;
          display: flex;
          align-items: center;
        }

        .language-select-dropdown .option img {
          margin-right: 8px;
        }

        .language-select-dropdown .option:hover {
          background-color: #f0f0f0;
        }
      `}</style>
    </div>
  );
};

export default LanguageSelector;
