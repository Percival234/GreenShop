import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';

import Button from '@UI/Buttons/Button/Button';
import TitleBorder from '@UI/Titles/TitleBorder/TitleBorder';
import FormError from '@Components/Error/FormError/FormError';
import ServerError from '@Components/Error/ServerError/ServerError';
import InputWithLabel from '@UI/Inputs/InputWthLabel/InputWithLabel';
import CheckoutList from '@Components/Checkout/CheckoutList/CheckoutList';
import CartCalculation from '@Components/Cart/CartCalculation/CartCalculation';
import ButtonLoading from '@Components/Loading/ButtonLoading/ButtonLoading';

import { postOrder } from '@API/API';

import { REGEX_EMAIL } from '@Constants/CONSTANTS';

import { useCartStore } from '@Store/cartStore';
import { useUserStore } from '@Store/userStore';

import './CheckoutPage.scss';

export default function CheckoutPage() {
  const {
    formState: { errors },
    handleSubmit,
    register,
    setValue,
  } = useForm();
  const cartItems = useCartStore((state) => state.cartItems);
  const user = useUserStore((state) => state.user);

  const { mutation, isPending, error } = useMutation({ mutationFn: (data) => postOrder(data) });

  useEffect(() => {
    if (user) {
      setValue('checkoutFirstname', user.firstname);
      setValue('checkoutLastname', user.lastname);
      setValue('checkoutEmail', user.email);
      setValue('checkoutPhone', user.phone);
      setValue('checkoutAddress', user.address);
      setValue('checkoutCity', user.city);
    }
  }, [user, setValue]);

  const submitOrder = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(submitOrder)} className="checkout">
      <div className="checkout__form">
        <TitleBorder>Billing Address</TitleBorder>
        <div className="checkout__columns">
          <div className="checkout__column">
            <InputWithLabel
              register={{
                ...register('checkoutFirstname', {
                  validate: (value) => value.length >= 3 || 'First name is too short',
                  required: 'First name is required',
                }),
              }}
              label="first name"
            />
            <FormError error={errors?.checkoutFirstname?.message} />
            <InputWithLabel
              register={{
                ...register('checkoutLastname', {
                  validate: (value) => value.length >= 3 || 'Last name is too short',
                  required: 'Last name is required',
                }),
              }}
              label="last name"
            />
            <FormError error={errors?.checkoutLastname?.message} />
            <InputWithLabel
              register={{
                ...register('checkoutCity', {
                  validate: (value) => value.length >= 3 || 'City / Town name is too short',
                  required: 'City / town is required',
                }),
              }}
              label="city / town"
            />
            <FormError error={errors?.checkoutCity?.message} />
          </div>
          <div className="checkout__column">
            <InputWithLabel
              register={{
                ...register('checkoutAddress', {
                  validate: (value) => value.length >= 3 || 'Address is too short',
                  required: 'Address is required',
                }),
              }}
              label="street address"
            />
            <FormError error={errors?.checkoutAddress?.message} />
            <InputWithLabel
              register={{
                ...register('checkoutEmail', {
                  pattern: {
                    value: REGEX_EMAIL,
                    message: 'Please enter valid email',
                  },
                  required: 'Email address is required',
                }),
              }}
              label="email"
            />
            <FormError error={errors?.checkoutEmail?.message} />
            <InputWithLabel
              register={{
                ...register('checkoutPhone', {
                  validate: (value) =>
                    (String(value).length >= 10 && String(value).length <= 12) ||
                    'Uncorrect phone number',
                  required: 'Phone nubmer is required',
                }),
              }}
              label="phone number"
              type="number"
            />
            <FormError error={errors?.checkoutPhone?.message} />
          </div>
        </div>
      </div>
      <div className="checkout__order">
        <TitleBorder>Your Order</TitleBorder>
        <div className="checkout__info">
          <CheckoutList />
          <CartCalculation />
          <ServerError error={error} />
          <Button type="submit">{isPending ? <ButtonLoading /> : 'Place Order'}</Button>
        </div>
      </div>
    </form>
  );
}
