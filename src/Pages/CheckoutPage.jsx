import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';

import Button from '@UI/Buttons/Button/Button';
import Calculation from '@Components/Cart/Calculation';
import CheckoutList from '@Components/Checkout/CheckoutList';
import TitleBorder from '@UI/Titles/TitleBorder/TitleBorder';
import InputWithLabel from '@UI/Inputs/InputWthLabel/InputWithLabel';

import { postOrder } from '@API/API';

import { REGEX_EMAIL } from '@Constants/CONSTANTS';

import { useCartStore } from '@Store/cartStore';
import { useUserStore } from '@Store/userStore';
import { useEffect } from 'react';

import './CheckoutPage.scss';
import FormError from '@Components/Error/FormError/FormError';

export default function CheckoutPage() {
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
  } = useForm();
  // const cartItems = useCartStore((state) => state.cartItems);
  const user = useUserStore((state) => state.user);

  const { mutation } = useMutation({ mutationFn: (data) => postOrder(data) });

  const submitOrder = (data) => {
    console.log(data);
  };

  useEffect(() => console.log(isSubmitting), [isSubmitting]);

  return (
    <div className="checkout">
      <form onSubmit={handleSubmit(submitOrder)} className="checkout__container">
        <div className="checkout__fields">
          <TitleBorder>Billing Address</TitleBorder>
          <div className="checkout__form">
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
              <FormError>{errors?.checkoutAddress?.message}</FormError>
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
              <div className="form-error">{errors?.checkoutEmail?.message}</div>
              <InputWithLabel
                register={register}
                settings={{
                  validate: (value) =>
                    (String(value).length >= 10 && String(value).length <= 12) ||
                    'Uncorrect phone number',
                  required: 'Phone nubmer is required',
                }}
                name="checkoutPhone"
                label="phone number"
                type="number"
                defaultvalue={user?.number}
              />
              <div className="form-error">{errors?.checkoutNumber?.message}</div>
            </div>
          </div>
        </div>
        <div className="checkout__order">
          <TitleBorder>Your Order</TitleBorder>
          <CheckoutList />
          <Calculation />
          <Button type="submit">
            {isSubmitting
              ? 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa cupiditate dolore distinctio adipisci, fuga numquam sed. Adipisci sapiente quo officia iure fugiat eum dolores rerum ipsa nulla? Quod, alias quia.'
              : 'Place Order'}
          </Button>
        </div>
      </form>
    </div>
  );
}
