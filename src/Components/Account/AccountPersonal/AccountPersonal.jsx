import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import Button from '@UI/Buttons/Button/Button';
import TitleBorder from '@UI/Titles/TitleBorder/TitleBorder';
import FormError from '@Components/Error/FormError/FormError';
import InputWithLabel from '@UI/Inputs/InputWthLabel/InputWithLabel';
import ServerError from '@Components/Error/ServerError/ServerError';
import ButtonLoading from '@Components/Loading/ButtonLoading/ButtonLoading';

import { useUserStore } from '@Store/userStore';

import { updateUser } from '@API/API';

import { REGEX_EMAIL } from '@Constants/EMAIL_REGEX';

export default function AccountPersonal() {
  const client = useQueryClient();
  const user = useUserStore((state) => state.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const { mutate, isPending, error } = useMutation({
    mutationFn: (userData) => updateUser(userData),
    onSuccess: () => client.invalidateQueries({ queryKey: ['user'] }),
  });

  useEffect(() => {
    if (user) {
      setValue('personalFirstname', user.firstname);
      setValue('personalLastname', user.lastname);
      setValue('personalEmail', user.email);
      setValue('personalPhone', user.phone);
      setValue('personalAddress', user.address);
      setValue('personalCity', user.city);
    }
  }, [user, setValue]);

  const personalUpdateSubmit = (data) => {
    const userData = {
      firstname: data.personalFirstname,
      lastname: data.personalLastname,
      email: data.personalEmail,
      phone: data.personalPhone,
      address: data.personalAddress,
      city: data.personalCity,
    };
    mutate(userData);
  };

  return (
    <form onSubmit={handleSubmit(personalUpdateSubmit)}>
      <TitleBorder>Personal information</TitleBorder>
      <InputWithLabel
        register={{
          ...register('personalFirstname', {
            required: 'First name is required',
            validate: (value) => value.length >= 3 || 'First name is too short',
          }),
        }}
        label="First name"
      />
      <FormError error={errors?.personalFirstname?.message} />
      <InputWithLabel
        register={{
          ...register('personalLastname', {
            required: 'Last name is required',
            validate: (value) => value.length >= 3 || 'Last name is too short',
          }),
        }}
        label="Last name"
      />
      <FormError error={errors?.personalLastname?.message} />
      <InputWithLabel
        register={{
          ...register('personalEmail', {
            required: 'Email is required',
            pattern: {
              value: REGEX_EMAIL,
              message: 'Please enter valid email',
            },
          }),
        }}
        label="Email"
      />
      <FormError error={errors?.personalEmail?.message} />
      <InputWithLabel
        register={{
          ...register('personalPhone', {
            required: 'Phone number is required',
            validate: (value) =>
              (value.length > 9 && value.length < 12) || 'Uncorrect phone number',
          }),
        }}
        type="number"
        label="Phone number"
      />
      <FormError error={errors?.personalPhone?.message} />
      <InputWithLabel
        register={{
          ...register('personalCity', {
            required: 'City / town is required',
            validate: (value) => value.length >= 3 || 'Uncorrect City / town name',
          }),
        }}
        label="City / town"
      />
      <FormError error={errors?.personalCity?.message} />
      <InputWithLabel
        register={{
          ...register('personalAddress', {
            required: 'Address is required',
            validate: (value) => value.length >= 3 || 'Uncorrect address',
          }),
        }}
        label="Street address"
        placeholder="House number and street name"
      />
      <FormError error={errors?.personalAddress?.message} />
      <ServerError error={error} />
      <Button disabled={isPending} type="submit">
        {isPending ? <ButtonLoading /> : 'Save changes'}
      </Button>
    </form>
  );
}
