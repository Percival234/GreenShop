import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import Input from '@UI/Inputs/Input/Input';
import Button from '@UI/Buttons/Button/Button';
import InputPass from '@UI/Inputs/InputPass/InputPass';
import FormError from '@Components/Error/FormError/FormError';
import ButtonLoading from '@Components/Loading/ButtonLoading/ButtonLoading';

import { registerUser } from '@API/API';

import { useUserStore } from '@Store/userStore';
import { useEventStore } from '@Store/eventStore';

import { REGEX_EMAIL } from '@Constants/CONSTANTS';

export default function Register() {
  const queryClient = useQueryClient();
  const close = useEventStore((state) => state.close);
  const setIsAuth = useUserStore((state) => state.setIsAuth);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const { mutate, isPending, error } = useMutation({
    mutationFn: (userData) => registerUser(userData),
  });

  const submitRegister = (data) => {
    const userData = {
      email: data.registerEmail,
      password: data.registerPassword,
    };
    mutate(userData, {
      onSuccess: (res) => {
        setIsAuth(res?.token);
        queryClient.invalidateQueries({ queryKey: ['user'] });
        close('authModal');
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(submitRegister)} className="auth-modal__form">
      <p>Enter your email and password to register</p>
      <div className="auth-modal__fields">
        <Input
          register={{
            ...register('registerEmail', {
              pattern: {
                value: REGEX_EMAIL,
                message: 'Please enter valid email',
              },
              required: 'Email address is required',
            }),
          }}
          placeholder="Enter your email address"
        />
        <InputPass
          register={{
            ...register('registerPassword', {
              validate: (value) => value.length >= 8 || 'Password is too short',
              required: 'Password is required',
            }),
          }}
          placeholder="Password"
        />
        <InputPass
          register={{
            ...register('registerPasswordConfirm', {
              validate: (value) => value === watch('registerPassword') || 'Passwords do not match',
              required: 'Password confirm is required',
            }),
          }}
          placeholder="Confirm password"
        />
      </div>
      <FormError
        error={
          errors?.registerEmail?.message ||
          errors?.registerPassword?.message ||
          error?.response?.data?.message
        }
      />
      <Button type="submit" disabled={isPending}>
        {isPending ? <ButtonLoading /> : 'Register'}
      </Button>
    </form>
  );
}
