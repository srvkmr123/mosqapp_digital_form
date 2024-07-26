import React, { useState } from 'react';
import './PlanCard.css';

const PlanCard = ({ plan, selectedPlan, setSelectedPlan }) => {

  const handleSelect = () => {
    console.log(selectedPlan);
    setSelectedPlan((plan._id===selectedPlan?._id)?null:plan)
  };

  return (
    <div className={`plan-card ${selectedPlan?._id===plan?._id ? 'selected' : ''}`} onClick={handleSelect}>
      <div className="plan-header">
        <input type="radio" checked={selectedPlan?._id=== plan?._id} readOnly />
        <span style={{fontWeight:700}}>{plan?.plan_name}</span>
      </div>
      <div className="plan-price">
        <span className="current-price">€{plan?.amount}</span>
      </div>
      <button className="select-button">Select Plan</button>
      <div className="plan-details">
        <p><strong>Plan Details</strong></p>
        <ul>
          <li className='label' style={{color:'#7e7e7e'}}>Billing Frequency - {plan?.recurring_type}</li>
          <li className='label' style={{color:'#7e7e7e'}}>Payment Date - {plan?.payment_day}
          'st of every month'</li>
        </ul>
      </div>
    </div>
  );
};

export default PlanCard;
