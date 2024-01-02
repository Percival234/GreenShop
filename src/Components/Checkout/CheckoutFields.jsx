import TextArea from '@UI/Inputs/TextArea/TextArea';
import InputWithLabel from '@UI/Inputs/InputWthLabel/InputWithLabel';

export default function CheckOutFields() {
  return (
    <div className="checkout__fields">
      <h4 className="title-bordered">Billing Address</h4>
      <div className="checkout__form">
        <div className="checkout__column">
          <InputWithLabel required label="first name" />
          <InputWithLabel required label="last name" />
          <InputWithLabel required label="city / town" />
        </div>
        <div className="checkout__column">
          <InputWithLabel
            required
            placeholder="House number and street name"
            label="street address"
          />
          <InputWithLabel required label="email" type="email" />
          <InputWithLabel required label="number" type="number" />
        </div>
        <TextArea label="order notes (optional)" />
      </div>
    </div>
  );
}
