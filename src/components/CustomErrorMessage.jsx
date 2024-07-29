import React from 'react';
import { ErrorMessage } from 'formik';
import { IoIosInformationCircleOutline } from "react-icons/io";
import { useTranslation } from 'react-i18next';

const CustomErrorMessage = ({ name }) => {
  const {t} = useTranslation();
  return (
  <ErrorMessage name={name}>
    {msg => (
      <div className="error-message">
        <IoIosInformationCircleOutline/> {t(msg)}
      </div>
    )}
  </ErrorMessage>
);
}
export default CustomErrorMessage;
