import { useForm } from 'react-hook-form';

import Button from '@UI/Buttons/Button/Button';
import TitleBorder from '@UI/Titles/TitleBorder/TitleBorder';
import FormError from '@Components/Error/FormError/FormError';
import InputWithLabel from '@UI/Inputs/InputWthLabel/InputWithLabel';

import { useUserStore } from '@Store/userStore';

function AccountPassword() {
  const user = useUserStore((state) => state.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const passwordResetSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(passwordResetSubmit)} className="account-details__form">
      <TitleBorder>Password change</TitleBorder>
      <div className="account-details__inputs">
        <InputWithLabel
          register={{ ...register('passwordResetOldPassword') }}
          label="current password"
        />
        <InputWithLabel
          register={{ ...register('passwordResetNewPassword') }}
          label="new password"
        />
        <InputWithLabel
          register={{ ...register('passwordResetConfirmPassword') }}
          label="confirm new password"
        />
      </div>
      <FormError
        error={
          errors?.passwordResetOldPassword?.message ||
          errors?.passwordResetNewPassword?.message ||
          errors?.passwordResetConfirmPassword?.message
        }
      />
      <Button type="submit">Change password</Button>
    </form>
  );
}

AccountPassword.propTypes = {};

export default AccountPassword;
