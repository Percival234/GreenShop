import { useForm } from 'react-hook-form';
import { AiFillStar } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import TextArea from '@UI/TextArea/TextArea';
import Button from '@UI/Buttons/Button/Button';
import FormError from '@Components/Error/FormError/FormError';
import ButtonLoading from '@Components/Loading/ButtonLoading/ButtonLoading';

import { postReview } from '@API/API';

import { useRequiedAuth } from '@Hooks/useRequiedAuth';

import './ReviewForm.scss';

export default function ReviewForm() {
  const { productId } = useParams();
  const client = useQueryClient();
  const authCheck = useRequiedAuth();

  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const { mutate, error, isPending } = useMutation({ mutationFn: (review) => postReview(review) });

  const submitReview = (data) => {
    const review = {
      productId,
      rate: data.rating,
      text: data.review,
    };
    mutate(review, {
      onSuccess: () => {
        client.invalidateQueries(['reviews', 'product']);
        reset();
      },
    });
  };

  return (
    <form
      id="review-form"
      onSubmit={handleSubmit(authCheck(submitReview))}
      className="reviews-form">
      <TextArea
        register={{
          ...register('review', {
            required: 'Review text is required',
            maxLength: 500,
          }),
        }}
        placeholder="Create review"
      />
      <div className="reviews-form__actions">
        <div className="rating-form">
          <input
            type="radio"
            className="rating-form__input"
            id="rating-star-5"
            {...register('rating', {
              required: 'Rating is required',
            })}
            value={5}
          />
          <label className="rating-form__label" htmlFor="rating-star-5">
            <AiFillStar size={50} />
          </label>
          <input
            type="radio"
            className="rating-form__input"
            id="rating-star-4"
            {...register('rating')}
            value={4}
          />
          <label className="rating-form__label" htmlFor="rating-star-4">
            <AiFillStar size={50} />
          </label>
          <input
            type="radio"
            className="rating-form__input"
            id="rating-star-3"
            {...register('rating')}
            value={3}
          />
          <label className="rating-form__label" htmlFor="rating-star-3">
            <AiFillStar size={50} />
          </label>
          <input
            type="radio"
            className="rating-form__input"
            id="rating-star-2"
            {...register('rating')}
            value={2}
          />
          <label className="rating-form__label" htmlFor="rating-star-2">
            <AiFillStar size={50} />
          </label>
          <input
            type="radio"
            className="rating-form__input"
            id="rating-star-1"
            {...register('rating')}
            value={1}
          />
          <label className="rating-form__label" htmlFor="rating-star-1">
            <AiFillStar size={50} />
          </label>
        </div>
        <div className="rating-form__rate">{watch('rating') || 0}</div>
        <FormError
          error={
            errors?.rating?.message || errors?.review?.message || error?.response?.data?.message
          }
        />
        <Button disabled={isPending} type="submit">
          {isPending ? <ButtonLoading /> : 'Send Review'}
        </Button>
      </div>
    </form>
  );
}
