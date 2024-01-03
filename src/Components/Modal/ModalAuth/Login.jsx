import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import Input from '@UI/Inputs/Input/Input';
import Button from '@UI/Buttons/Button/Button';
import InputPass from '@UI/Inputs/InputPass/InputPass';
import ButtonLoading from '@Components/Loading/ButtonLoading/ButtonLoading';

import { useUserStore } from '@Store/userStore';

import { loginUser } from '@API/API';

import { REGEX_EMAIL } from '@Constants/CONSTANTS';

export default function Login() {
  const queryClient = useQueryClient();
  const setIsAuth = useUserStore((state) => state.setIsAuth);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const { mutate } = useMutation({
    mutationFn: (userData) => loginUser(userData),
  });

  const submitLogin = (data) => {
    mutate(data, {
      onSuccess: (res) => {
        setIsAuth(res?.token);
        queryClient.invalidateQueries({
          queryKey: ['user'],
        });
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(submitLogin)} className="auth-modal__form">
      <p>Enter your email and password to login</p>
      <div className="auth-modal__fields">
        <Input
          name="loginEmail"
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
            validate: (value) => value.length >= 8 || 'Password is too short',
            required: 'Password is required',
          }}
          name="loginPassword"
          placeholder="Password"
        />
      </div>
      <div className="form-error">
        {errors?.loginEmail?.message || errors?.loginPassword?.message}
      </div>
      <Button disabled={isSubmitting} type="submit">
        {isSubmitting ? <ButtonLoading /> : 'Login'}
      </Button>
    </form>
  );
}
