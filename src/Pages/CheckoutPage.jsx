import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

import Button from '@UI/Buttons/Button/Button';
import Payment from '@Components/Payment/Payment';
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
import { useEventStore } from '@Store/eventStore';

import './CheckoutPage.scss';

export default function CheckoutPage() {
  const navigate = useNavigate();
  const open = useEventStore((state) => state.open);
  const {
    formState: { errors },
    handleSubmit,
    register,
    setValue,
  } = useForm();
  const { cartItems, totalPrice, shipping, payment, setOrder, clearCart } = useCartStore(
    (state) => state
  );
  const user = useUserStore((state) => state.user);

  const { mutate, isPending, error } = useMutation({ mutationFn: (data) => postOrder(data) });

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
    const order = {
      userId: user?._id,
      firstname: data.checkoutFirstname,
      lastname: data.checkoutLastname,
      email: data.checkoutEmail,
      phone: data.checkoutPhone,
      address: data.checkoutAddress,
      city: data.checkoutCity,
      totalPrice,
      shipping,
      payment,
      cartItems: cartItems.map((item) => ({ product: item.product._id, count: item.count })),
    };
    mutate(order, {
      onSuccess: (res) => {
        setOrder(res.order);
        navigate('/');
        clearCart();
        open('checkoutModal');
      },
    });
  };

  useEffect(() => {
    if (!cartItems.length) navigate('/');
  }, [cartItems, navigate]);

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
          <CheckoutList products={cartItems} />
          <CartCalculation />
          <Payment />
          <ServerError error={error} />
          <Button type="submit">{isPending ? <ButtonLoading /> : 'Place Order'}</Button>
        </div>
      </div>
    </form>
  );
}
