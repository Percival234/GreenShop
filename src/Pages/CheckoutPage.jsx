import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';

import Button from '@UI/Buttons/Button/Button';
import Payment from '@Components/Payment/Payment';
import Calculation from '@Components/Cart/Calculation';
import CheckoutList from '@Components/Checkout/CheckoutList';
import TitleBorder from '@UI/Titles/TitleBorder/TitleBorder';
import InputWithLabel from '@UI/Inputs/InputWthLabel/InputWithLabel';

import { postOrder } from '@API/API';

import './CheckoutPage.scss';

export default function CheckoutPage() {
  const { errors, handleSubmit, register } = useForm();

  const { mutation } = useMutation({ mutationFn: (data) => postOrder(data) });

  const submitOrder = (data) => {
    console.log(data);
    mutation(data, {});
  };

  return (
    <div className="checkout">
      <form onSubmit={handleSubmit(submitOrder)} className="checkout__container">
        <div className="checkout__fields">
          <TitleBorder>Billing Address</TitleBorder>
          <div className="checkout__form">
            <div className="checkout__column">
              <InputWithLabel
                register={register}
                settings={{}}
                name="checkout-firstname"
                required
                label="first name"
              />
              <InputWithLabel
                register={register}
                settings={{}}
                name="checkout-lastname"
                required
                label="last name"
              />
              <InputWithLabel
                register={register}
                settings={{}}
                name="checkout-city"
                required
                label="city / town"
              />
            </div>
            <div className="checkout__column">
              <InputWithLabel
                register={register}
                settings={{}}
                required
                name="checkout-address"
                label="street address"
              />
              <InputWithLabel
                register={register}
                settings={{}}
                required
                name="checkout-email"
                label="email"
                type="email"
              />
              <InputWithLabel
                register={register}
                settings={{}}
                required
                name="checkout-phone"
                label="number"
                type="number"
              />
            </div>
          </div>
        </div>
        <div className="checkout__order">
          <TitleBorder>Your Order</TitleBorder>
          <CheckoutList />
          <Calculation />
          <Payment />
          <Button type="submit">Place Order</Button>
        </div>
      </form>
    </div>
  );
}
