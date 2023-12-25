import React from 'react';

import InputRequired from '../UI/Inputs/InputWthLabel/InputWithLabel';
import TextArea from '../UI/Inputs/TextArea';

export default function CheckOutFields() {
  return (
    <div className="checkout__fields">
      <h4 className="title-bordered">Billing Address</h4>
      <div className="checkout__form">
        <div className="checkout__column">
          <InputRequired required label="first name" />
          <InputRequired required label="last name" />
          <InputRequired required label="city / town" />
        </div>
        <div className="checkout__column">
          <InputRequired
            required
            placeholder="House number and street name"
            label="street address"
          />
          <InputRequired required label="email" type="email" />
          <InputRequired required label="number" type="number" />
        </div>
        <TextArea label="order notes (optional)" />
      </div>
    </div>
  );
}
