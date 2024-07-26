import React, { useState, useEffect } from "react";

import CountryCode from "./CountryCode";
import CurrencySymbols from "./CurrencySymbols";
import styled from "styled-components";
import { layout, border, shadow, typography, color, space } from "styled-system";
import Icon from './Icon'
import Box from "./Box";

const Flexinput = styled.div`
  overflow: hidden;
  display: flex;
  height: initial;
  box-shadow: 0px 2px 6px #13124212;
  border: 1px solid #EFF0F7 !important;
  border-radius: 8px;
  box-sizing: content-box !important;
  position: relative;
  ${layout}
  ${border}
  ${shadow}
  ${space}

  .login-input {
    width: 100%;
    border: none;
    border-left: none !important;
    outline: none;
    font-size: 14px;
    box-sizing: content-box !important;
    padding: 10px 10px 10px 12px;
    text-align: start;
    ${typography}
  }

  .icon {
    width: 16px;
    box-sizing: content-box !important;
    padding: 13px;
    ${color}
  }

  .search {
    background-color: red;
    fill: red;
  }
  
  input {
    border: none;
    height: 52px;
    box-shadow: none;
  }
  input[type=text]::placeholder{
    color:#A0AEC0;
    font-weight: 400;
   }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

const SecretKeyInputIcon = styled.div`
  background: #ffffff;
  top: ${props => !props.top ? "40%" : "32%"};
  right: 0px;
  position: absolute;
  height: 100%;
  width: 10%;
  @media only screen and (max-width: 767px) {
    left: 90%;
    margin-bottom: 10px;
  }
  @media only screen and (max-width: 555px) {
    left: 90%;
  }
`;

const Input = ({
  value,
  type,
  countryCodes = null,
  icon = null,
  className,
  placeholder,
  maxlength,
  setCountryCode,
  currencySymbols = null,
  setCurrencySymbols,
  onChange,
  isEyeButton,
  isDisabled,
  countryCodeValue,
  ...rest
}) => {
  const [iconHandle, setIconHandle] = useState(false);

  useEffect(() => {
    if (isEyeButton) {
      setIconHandle(true);
    }
  }, [isEyeButton])

  return (
    <Flexinput
      className="flex"
      {...rest}
    >
      {countryCodes ? (
        <Box borderRight="1px solid #A0AEC0" height="18px" marginTop="18px">
          <CountryCode
              isDisabled={isDisabled}
              value={countryCodeValue}
              countryCode={countryCodes}
              setCountryCode={setCountryCode}
          />
          <Box></Box>
        </Box>
      ) : null}
      {currencySymbols ? (
        <CurrencySymbols
          isDisabled={isDisabled}
          currencySymbols={currencySymbols}
          setCurrencySymbols={setCurrencySymbols}
        />
      ) : null}
      {icon !== null ? <img className="icon" src={icon} alt="icon" /> : null}
      <input
        disabled={isDisabled}
        value={value}
        maxLength={maxlength}
        onChange={onChange}
        type={iconHandle ? "password" : type}
        className={className}
        placeholder={placeholder}
        style={{width: (isEyeButton && !isDisabled) ? "80%" : "100%" }}
      />
      {
        (isEyeButton && !isDisabled) &&
        <SecretKeyInputIcon
          onClick={() => setIconHandle(!iconHandle)}
          iconProps={iconHandle}
          top={iconHandle}
        >
          {
            iconHandle ?
              <Icon iconName="eyeCrossed" width="17px" />
              :
              <Icon iconName="eye" />
          }

        </SecretKeyInputIcon>
      }
    </Flexinput>
  );
};

Input.defaultProps = {
  type: "text",
  maxlength: "100"
};

export default Input;
