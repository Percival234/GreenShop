import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import Input from '@UI/Inputs/Input/Input';
import Button from '@UI/Buttons/Button/Button';
import InputPass from '@UI/Inputs/InputPass/InputPass';
import FormError from '@Components/Error/FormError/FormError';
import ButtonLoading from '@Components/Loading/ButtonLoading/ButtonLoading';

import { useUserStore } from '@Store/userStore';
import { useEventStore } from '@Store/eventStore';

import { loginUser } from '@API/API';

import { REGEX_EMAIL } from '@Constants/EMAIL_REGEX';

export default function Login() {
  const queryClient = useQueryClient();
  const setIsAuth = useUserStore((state) => state.setIsAuth);
  const close = useEventStore((state) => state.close);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate, isPending, error } = useMutation({
    mutationFn: (userData) => loginUser(userData),
    onSuccess: (res) => {
      setIsAuth(res?.token);
      queryClient.invalidateQueries({ queryKey: ['user'] });
      close('authModal');
    },
  });

  const submitLogin = (data) => {
    const userData = {
      email: data.loginEmail,
      password: data.loginPassword,
    };
    mutate(userData);
  };

  return (
    <form onSubmit={handleSubmit(submitLogin)} className="auth-modal__form">
      <p>Enter your email and password to login</p>
      <div className="auth-modal__fields">
        <Input
          register={{
            ...register('loginEmail', {
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
            ...register('loginPassword', {
              validate: (value) => value.length >= 8 || 'Password is too short',
              required: 'Password is required',
            }),
          }}
          placeholder="Password"
        />
      </div>
      <FormError
        error={
          errors?.loginEmail?.message ||
          errors?.loginPassword?.message ||
          error?.response?.data?.message
        }
      />
      <Button disabled={isPending} type="submit">
        {isPending ? <ButtonLoading /> : 'Login'}
      </Button>
    </form>
  );
}
