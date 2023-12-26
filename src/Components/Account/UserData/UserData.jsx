import React from 'react';
import './UserData.scss';

import InputRequired from '../../UI/Inputs/InputWthLabel/InputWithLabel';
import Button from '../../UI/Buttons/Button/Button';
import ButtonInvert from '../../UI/Buttons/ButtonOutline/ButtonOutline';

export default function UserData() {
  return (
    <div className="account-details">
      <div className="account-details__forms">
        <div className="account-details__form">
          <h4 className="title-bordered">Personal information</h4>
          <div className="account-details__inputs">
            {/* <InputRequired required label="first name" />
            <InputRequired required label="last name" />
            <InputRequired required type="email" label="email" />
            <InputRequired required type="number" label="number" />
            <InputRequired
              required
              label="street address"
              placeholder="House number and street name"
            />
            <InputRequired required label="city / town" /> */}
          </div>
          <Button>Save changes</Button>
        </div>
        <div className="account-details__form">
          <h4 className="title-bordered">Password change</h4>
          <div className="account-details__inputs">
            {/* <InputRequired required label="current password" />
            <InputRequired required label="new password" />
            <InputRequired required label="confirm new password" /> */}
          </div>
          <Button>Change password</Button>
        </div>
      </div>
      <div className="account-details__form account-details__form_full">
        <h4 className="title-bordered">Account deletion</h4>
        <div className="account-details__delete">
          <p>Do you want to delete your account? All data will be cleared!</p>
          <ButtonInvert>Delete</ButtonInvert>
        </div>
      </div>
    </div>
  );
}
