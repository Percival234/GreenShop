import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineUpload } from 'react-icons/ai';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import Button from '@UI/Buttons/Button/Button';
import TitleBorder from '@UI/Titles/TitleBorder/TitleBorder';
import FormError from '@Components/Error/FormError/FormError';
import ButtonLoading from '@Components/Loading/ButtonLoading/ButtonLoading';

import { useUserStore } from '@Store/userStore';

import { updateImage } from '@API/API';

import { SERVER_URL } from '@Constants/CONSTANTS';

import validateImage from '@Helpers/validateImage';

import './AccountImage.scss';

export default function AccountImage() {
  const client = useQueryClient();
  const imageUploadRef = useRef(null);
  const user = useUserStore((state) => state.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const { ref, ...rest } = register('uploadImage', {
    required: 'Please upload image',
    validate: (file) => validateImage(file?.[0]),
  });

  const { mutate, isPending, error } = useMutation({
    mutationFn: (file) => updateImage(file),
  });

  const updateImageSubmit = (data) => {
    const image = data.uploadImage[0];
    const formData = new FormData();
    formData.append('file', image);
    mutate(formData, {
      onSuccess: () => client.invalidateQueries({ queryKey: ['user'] }),
    });
  };

  const openFileExplorer = () => imageUploadRef?.current?.click();

  return (
    <form onSubmit={handleSubmit(updateImageSubmit)} className="account-image">
      <TitleBorder>Image</TitleBorder>
      <div className="account-image__container">
        <div className="account-image__image-container">
          <img
            className="account-image__image"
            src={`${SERVER_URL}/static/users/${user?.image || 'default-user.jpg'}`}
            alt="user image"
          />
        </div>
        <div className="account-image__content">
          <div className="upload">
            <input
              {...rest}
              ref={(event) => {
                ref(event);
                imageUploadRef.current = event;
              }}
              name="uploadImage"
              type="file"
              accept="image/*"
              multiple={false}
            />
            <div className="upload__info">
              <div className="upload__file">
                {watch('uploadImage')?.[0]?.name || 'Upload image (less than 2MB, jpeg, jpg)'}
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
          <FormError error={errors?.uploadImage?.message || error?.response?.data?.message} />
          <Button disabled={isPending} type="submit">
            {isPending ? <ButtonLoading /> : 'Change image'}
          </Button>
        </div>
      </div>
    </form>
  );
}
