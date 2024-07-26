import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import LanguageSelect from "../LanguageSelect/LanguageSelect";
import PlanCard from "../PlanCard/PlanCard";
import axios from "axios";
import { baseUrl } from "../../app.config";
import ContactNumberInput from "../ContactNumberInput";
import PhoneNumberInput from "../PhoneNumberInput";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import SuccessPage from "../../SuccessPage";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import CustomErrorMessage from "../CustomErrorMessage";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import validatePhoneNumber from "../../helpers/validatePhoneNumber";

// Define your validation schema
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  language: Yup.object().nullable().required("Language is required"),
});

const countryOptions = [
  {
    code: "gb",
    name: "English",
    flag: "https://cdn.jsdelivr.net/npm/flag-icon-css@3.5.0/flags/4x3/gb.svg",
  },
  {
    code: "nl",
    name: "Dutch",
    flag: "https://cdn.jsdelivr.net/npm/flag-icon-css@3.5.0/flags/4x3/nl.svg",
  },
  // Add more countries as needed
];

const initialValues = {
  name: "",
  email: "",
  language: countryOptions[1],
};

function CustomForm() {
  // const mosqueId = "65dc9e818c40d70018da5b1d";
  const {mosqueId }= useParams();
  const [mosque, setMosque] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [plans, setPlans] = useState([]);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(null);
  const [countryCode, setCountryCode] = useState({ value: '+31', label: '+31 (Netherlands)', code:'NL' });
  const [page, setPage] = useState(0);
  const {t} = useTranslation();

  console.log(countryCode, phone);

  useEffect(() => {
    
    const getMosqueDetails = async () => {
      try {
        const res = await axios.get(
          `${baseUrl}/v1/entity?entityId=${mosqueId}`
        );
        console.log(res.data);
        const selectedMosque = res?.data[0];
        setMosque(selectedMosque);
        setPlans(
          selectedMosque.subscriptions
            ? selectedMosque.subscriptions
            : selectedMosque.subscription
        );
      } catch (error) {
        console.error(error);
      }
    };

    getMosqueDetails();
  }, []);
  const printDocument = async () => {
    const form = document.querySelector(".form");
    console.log(form);
    if (!form) return;
    form.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
    setTimeout(() => {
      html2canvas(form, {
        scrollY: -window.scrollY,
        width: form.scrollWidth,
        height: form.scrollHeight,
      }).then(async (canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const aspectRatio = canvas.width / canvas.height;
        const pdfImgHeight = pdfHeight;
        const pdfImgWidth = pdfImgHeight * aspectRatio;
        const offsetX = (pdfWidth - pdfImgWidth) / 2;
        pdf.addImage(imgData, "JPEG", offsetX, 0, pdfImgWidth, pdfImgHeight);
        // pdf.save("download.pdf");
        const pdfBytes = pdf.output("arraybuffer");
        // const pdfBuffer = Buffer.from(pdfBytes);
        const pdfBlob = new Blob([pdfBytes], { type: "application/pdf" });
        const formData = new FormData();
        formData.append("pdf", pdfBlob, `${uuidv4()}.pdf`);
        const baseUrl =
          process.env.REACT_APP_STAGE === "development"
            ? "apidev.mosqapp.com"
            : "api.mosqapp.com";
        fetch(`https://${baseUrl}/file/upload`, {
          method: "POST",
          body: formData,
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to upload PDF");
            }
            return response.json();
          })
          .then((data) => {
            console.log("PDF uploaded successfully:", data.data?.link);
          })
          .catch((error) => {
            console.error("Error uploading PDF:", error);
          });
      });
    }, 1000);
  };
  console.log(countryCode);
  const handleSubmit = async (values) => {
    try {
      if (!validatePhoneNumber(phone,countryCode.code)) {
        setPhoneError(true);
        return;
      }
      // printDocument()
      const userInput = {
        name: values.name,
        emailAddress: values.email,
        password: uuidv4(),
        phoneNumber: phone,
        countryCode: countryCode.value,
        language: values.language.code,
        // isMobileOnboarded:false
      };
      console.log(userInput);
      const signUpRes = await axios.post(
        `${baseUrl}/v1/create-account`,
        userInput
      );
      console.log("signup res -->", signUpRes);
      const token = signUpRes.data?.token;
      const obj = {
        subscriptionId: selectedPlan?._id,
        entityId: mosqueId,
        paymentMode: "automatic",
        country: mosque?.country,
        city: mosque?.city,
        organisationId: mosque?.organisation_id,
      };
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      await axios.post(`${baseUrl}/v1/add-user-subscription`, obj, config);
      const paymentPayload = {
        userId: signUpRes?.data._id,
        paymentMode: "automatic",
        amount: 0.01,
        subscriptionId: uuidv4(),
        paymentId: uuidv4(),
        entityId: mosqueId,
        paymentMethod: "ideal",
      };

      const res = await axios.post(
        `${baseUrl}/v1/create-transaction`,
        paymentPayload,
        config
      );
      console.log("payment-->", res.data);
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);
    }

    console.log(values, phone, selectedPlan.plan_name);
    // Add your submit logic here
  };
  console.log(phone);
  return (
    <div className="form">
      <Banner mosque={mosque} />
      {page === 0 ? (
        <main className="form-content">
          <h1 className="sub-heading">{t('Enter Details')}</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue, values }) => (
              <Form>
                <div className="form-group form-group-1">
                  
                  <div>
                    <label className="label" style={{ color: "#7e7e7e" }}>
                      {t('Enter Name')}<span style={{ color: "#FE1717" }}>*</span>
                    </label>
                    <Field
                      name="name"
                      placeholder={t('Enter Name')}
                      className="input-box"
                      type="text"
                    />
                    <CustomErrorMessage
                      name="name"
                      component="div"
                      className="error-message"
                    />
                  </div>
                  <div>
                    <label className="label" style={{ color: "#7e7e7e" }}>
                      {t('E-mail address')}<span style={{ color: "#FE1717" }}>*</span>
                    </label>
                    <Field
                      name="email"
                      placeholder={t('Enter E-mail address')}
                      className="input-box"
                      type="text"
                    />
                    <CustomErrorMessage
                      name="email"
                      className="error-message"
                    />
                  </div>
                </div>
                <div className="form-group form-group-2">
                  <div>
                    <label className="label" style={{ color: "#7e7e7e" }}>
                      {t('Contact Number')}<span style={{ color: "#FE1717" }}>*</span>
                    </label>
                    {/* <ContactNumberInput
                      setCountryCode={setCountryCode}
                      phone={phone}
                      setPhoneError={setPhoneError}
                      setPhone={setPhone}
                    /> */}
                    <PhoneNumberInput
                      setCountryCode={setCountryCode}
                      phone={phone}
                      setPhoneError={setPhoneError}
                      setPhone={setPhone}
                    />
                    
                    {phoneError && (
                      <div className="error-message">
                        <IoIosInformationCircleOutline /> {t('Enter valid phone number')}
                      </div>
                    )}
                  </div>
                  <div >
                  <label className="label" style={{ color: "#7e7e7e" }}>
                    {t('Payment Mode')}<span style={{ color: "#FE1717" }}>*</span>
                  </label>
                  <Field
                    name="paymentMode"
                    placeholder="Enter Name"
                    disabled
                    value={t("Automatic")}
                    className="input-box"
                    type="text"
                  />
                </div>
                </div>
                {/* <div className="line"></div> */}
                {/* <h1 className="sub-heading">{t('Payment Details')}</h1>
                */}
                <div className="plans">
                  {plans?.length > 0 ? (
                    plans?.map((plan) => (
                      <PlanCard
                        key={plan._id}
                        selectedPlan={selectedPlan}
                        setSelectedPlan={setSelectedPlan}
                        plan={plan}
                      />
                    ))
                  ) : (
                    <label className="label">No active plans..</label>
                  )}
                </div>
                <div className="btn-container">
                  <button
                    type="submit"
                    className="submit-btn"
                    disabled={!selectedPlan}
                    style={{ background: selectedPlan ? "#D0004B" : "#a0aec0" }}
                  >
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </main>
      ) : (
        <SuccessPage />
      )}
    </div>
  );
}

export default CustomForm;
