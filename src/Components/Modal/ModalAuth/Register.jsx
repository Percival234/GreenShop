import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
// import Error from '@Components/Error/Error';
import Input from '@UI/Inputs/Input/Input';
import Button from '@UI/Buttons/Button/Button';
import InputPass from '@UI/Inputs/InputPass/InputPass';
import ButtonLoading from '@Components/Loading/ButtonLoading/ButtonLoading';

import { registerUser } from '@API/API';

import { REGEX_EMAIL } from '@Constants/CONSTANTS';

export default function Register() {
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
  } = useForm();

  const { mutate } = useMutation({
    mutationFn: (userData) => registerUser(userData),
  });

  const submitRegister = (data) => {
    if (data)
      mutate(data, {
        onSuccess: (res) => {
          console.log('s');
          localStorage.setItem('token', res?.token);
          queryClient.invalidateQueries({
            queryKey: ['user'],
          });
        },
      });
  };

  return (
    <form onSubmit={handleSubmit(submitRegister)} className="auth__form">
      <p>Enter your email and password to register</p>
      <div className="auth__fields">
        <Input
          name="registerEmail"
          register={register}
          type="text"
          settings={{
            pattern: {
              value: REGEX_EMAIL,
              message: 'Please enter valid email',
            },
            required: 'Email address is required',
          }}
          placeholder="Enter your email address"
        />
        <InputPass
          register={register}
          settings={{
            validate: (value) => value.length < 8 && 'Password is too short',
            required: 'Password is required',
          }}
          name="registerPassword"
          placeholder="Password"
        />
        <InputPass
          settings={{
            validate: (value) =>
              value === getValues('registerPassword') || 'Passwords do not match',
            required: 'Password confirm is required',
          }}
          register={register}
          name="registerPasswordConfirm"
          placeholder="Confirm password"
        />
      </div>
      <div className="form-error">
        {errors?.registerEmail?.message ||
          errors?.registerPassword?.message ||
          errors?.registerPasswordConfirm?.message}
      </div>
      <Button type="submit">{isSubmitting ? <ButtonLoading /> : 'Register'}</Button>
    </form>
  );
}