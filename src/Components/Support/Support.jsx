import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineUpload } from 'react-icons/ai';
import { useMutation } from '@tanstack/react-query';

import TextArea from '@UI/TextArea/TextArea';
import Button from '@UI/Buttons/Button/Button';
import TitleBorder from '@UI/Titles/TitleBorder/TitleBorder';
import FormError from '@Components/Error/FormError/FormError';
import ButtonLoading from '@Components/Loading/ButtonLoading/ButtonLoading';

import { postReport } from '@API/API';

import validateImage from '@Helpers/validateImage';

import { useRequiedAuth } from '@Hooks/useRequiedAuth';

import './Support.scss';

export default function Support() {
  const fileRef = useRef(null);
  const authCheck = useRequiedAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const { ref, ...rest } = register('uploadReportImage', {
    validate: (file) => validateImage(file?.[0]),
  });

  const { mutate, error, isPending } = useMutation({
    mutationFn: (reportData) => postReport(reportData),
  });

  const openFileExplorer = () => fileRef.current?.click();

  const submitReport = (data) => {
    const formData = new FormData();
    formData.append('text', data.report);
    if (data.uploadReportImage?.[0]) {
      formData.append('file', data.uploadReportImage[0]);
    }
    mutate(formData, {
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
        <div className="upload">
          <input
            {...rest}
            ref={(event) => {
              ref(event);
              fileRef.current = event;
            }}
            accept="image/*"
            multiple={false}
            type="file"
          />
          <div className="upload__info">
            <div className="upload__file">
              {watch('uploadReportImage')?.[0]?.name || 'Upload photo (less than 2MB, jpeg, jpg)'}
            </div>
            <button
              aria-label="upload image"
              type="button"
              onClick={openFileExplorer}
              className="upload__button">
              <AiOutlineUpload size={22} />
            </button>
          </div>
        </div>
        <FormError
          error={
            errors?.report?.message ||
            errors?.uploadReportImage?.message ||
            error?.response?.data?.message
          }
        />
        <Button type="submit" disabled={isPending}>
          {isPending ? <ButtonLoading /> : 'Send Report'}
        </Button>
      </form>
    </div>
  );
}
