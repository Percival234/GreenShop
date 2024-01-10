import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';

import Button from '@UI/Buttons/Button/Button';
import TitleBorder from '@UI/Titles/TitleBorder/TitleBorder';
import FormError from '@Components/Error/FormError/FormError';
import ServerError from '@Components/Error/ServerError/ServerError';
import InputWithLabel from '@UI/Inputs/InputWthLabel/InputWithLabel';
import ButtonLoading from '@Components/Loading/ButtonLoading/ButtonLoading';

import { updateUser } from '@API/API';

export default function AccountPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const { mutate, error, isPending } = useMutation({
    mutationFn: (userData) => updateUser(userData),
  });

  const passwordResetSubmit = (data) => {
    const userData = {
      password: data.passwordResetNewPassword,
    };
    mutate(userData);
  };

  return (
    <form id="password-reset" onSubmit={handleSubmit(passwordResetSubmit)}>
      <TitleBorder>Password change</TitleBorder>
      <InputWithLabel
        register={{
          ...register('passwordResetNewPassword', {
            validate: (value) => value.length >= 8 || 'Password is too short',
          }),
        }}
        label="new password"
      />
      <FormError error={errors?.passwordResetNewPassword?.message} />
      <InputWithLabel
        register={{
          ...register('passwordResetConfirmPassword', {
            validate: (value) =>
              watch('passwordResetNewPassword') === value || 'Passwords don`t match',
          }),
        }}
        label="confirm new password"
      />
      <FormError error={errors?.passwordResetConfirmPassword?.message} />
      <ServerError error={error} />
      <Button disabled={isPending} type="submit">
        {isPending ? <ButtonLoading /> : 'Change password'}
      </Button>
    </form>
  );
}
