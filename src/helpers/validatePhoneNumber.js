import {parsePhoneNumberFromString} from 'libphonenumber-js';

const validatePhoneNumber = (phoneNumber, countryCode) => {
  try {
    console.log('validate--->',phoneNumber, countryCode);
    // if (phoneNumber === '') return false;
    // const number = parsePhoneNumberFromString(phoneNumber, countryCode);
    // console.log(number, number.isValid());
    // return number.isValid();
    return phoneNumber.length===9
  } catch (e) {
    return false;
  }
};

export default validatePhoneNumber;
