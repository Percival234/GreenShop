import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';

import TextArea from '@UI/TextArea/TextArea';
import Button from '@UI/Buttons/Button/Button';
import TitleBorder from '@UI/Titles/TitleBorder/TitleBorder';
import FormError from '@Components/Error/FormError/FormError';
import ButtonLoading from '@Components/Loading/ButtonLoading/ButtonLoading';

import { postReport } from '@API/API';

import { useRequiedAuth } from '@Hooks/useRequiedAuth';

import './Support.scss';

export default function Support() {
  const authCheck = useRequiedAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { mutate, error, isPending } = useMutation({
    mutationFn: (reportData) => postReport(reportData),
  });

  const submitReport = (data) => {
    const report = { text: data.report };
    mutate(report, {
      onSuccess: () => {
        reset();
      },
    });
  };

  return (
    <div className="support">
      <TitleBorder>Support</TitleBorder>
      <form onSubmit={handleSubmit(authCheck(submitReport))} className="support__form">
        <p>If you encounter any issues, please feel free to contact us, and we will assist you!</p>
        <TextArea
          register={{
            ...register('report', {
              required: 'Report text is required',
              validate: (value) => value.length <= 500 || 'Limit 500 characters',
            }),
          }}
          placeholder="Describe your problem ..."
        />
        <FormError error={errors?.report?.message || error?.response?.data?.message} />
        <Button type="submit" disabled={isPending}>
          {isPending ? <ButtonLoading /> : 'Send Report'}
        </Button>
      </form>
    </div>
  );
}
