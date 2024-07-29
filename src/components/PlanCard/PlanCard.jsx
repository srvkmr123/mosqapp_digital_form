import React, { useState } from 'react';
import './PlanCard.css';
import { useTranslation } from 'react-i18next';

const PlanCard = ({ plan, selectedPlan, setSelectedPlan }) => {
  const {t} = useTranslation();
  const handleSelect = () => {
    console.log(selectedPlan);
    setSelectedPlan((plan._id===selectedPlan?._id)?null:plan)
  };

  return (
    <div className={`plan-card ${selectedPlan?._id===plan?._id ? 'selected' : ''}`} onClick={handleSelect}>
      <div className="plan-header">
        <input type="radio" checked={selectedPlan?._id=== plan?._id} readOnly />
        <span style={{fontWeight:700, fontSize:'15px'}}>{plan?.plan_name}</span>
      </div>
      <div className="plan-price">
        <span className="current-price">€{plan?.amount}</span>
      </div>
      <div style={{background: selectedPlan?._id!==plan?._id? "#D0004B" : "#a0aec0"}} className="select-button">{selectedPlan?._id===plan?._id?t('Selected Plan'):t('Select Plan')}</div>
      <div className="plan-details">
        <p>{t("Plan Details")}</p>
        <ul>
          <li className='label' style={{color:'#7e7e7e', fontSize:'12px'}}>- {t("Billing Frequency")} - {plan?.recurring_type}</li>
          <li className='label' style={{color:'#7e7e7e', fontSize:'12px'}}>- {t("Payment Date")} - {plan?.payment_day}
          '{t("st of every month")}'</li>
        </ul>
      </div>
    </div>
  );
};

export default PlanCard;
