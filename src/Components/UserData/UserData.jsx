// import InputRequired from '../../UI/Inputs/InputWthLabel/InputWithLabel';
import Button from '@UI/Buttons/Button/Button';
import TitleBorder from '@UI/Titles/TitleBorder/TitleBorder';
import ButtonOutline from '@UI/Buttons/ButtonOutline/ButtonOutline';

import { useEventStore } from '@Store/eventStore';

import './UserData.scss';

export default function UserData() {
  const open = useEventStore((state) => state.open);
  const openUserDeleteModal = () => open('userDeleteModal');

  return (
    <div className="account-details">
      <div className="account-details__forms">
        <div className="account-details__form">
          <TitleBorder>Personal information</TitleBorder>
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
          <TitleBorder>Password change</TitleBorder>
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
          <ButtonOutline onClick={openUserDeleteModal}>Delete</ButtonOutline>
        </div>
      </div>
    </div>
  );
}
