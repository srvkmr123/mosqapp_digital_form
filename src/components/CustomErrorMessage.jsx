import React from 'react';
import { ErrorMessage } from 'formik';
import { IoIosInformationCircleOutline } from "react-icons/io";

const CustomErrorMessage = ({ name }) => (
  <ErrorMessage name={name}>
    {msg => (
      <div className="error-message">
        <IoIosInformationCircleOutline/> {msg}
      </div>
    )}
  </ErrorMessage>
);

export default CustomErrorMessage;
