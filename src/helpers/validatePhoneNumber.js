import { isValidNumber, parsePhoneNumber } from 'libphonenumber-js';

const validatePhoneNumber = (phoneNumber, countryCode) => {
  phoneNumber = "+31"+phoneNumber;
  // phoneNumber = "+3189"
  // countryCode = "NL"
  console.log(phoneNumber, countryCode);
  const number = parsePhoneNumber(phoneNumber, countryCode);
  console.log(number.isValid());
  return number.isValid();
};

export default validatePhoneNumber;
// console.log(validatePhoneNumber('+14155552671', 'US')); // true or false
