import { useForm } from 'react-hook-form';
import { AiFillStar } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import Button from '@UI/Buttons/Button/Button';

import { postReview } from '@API/API';

function ReviewForm() {
  const { productId } = useParams();
  const queryClient = useQueryClient();
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const ratingValue = watch('rating');

  const { mutate } = useMutation({ mutationFn: (review) => postReview(review) });

  const submitReview = (data) => {
    const review = {
      productId,
      rate: data.rating,
      text: data.review,
    };
    mutate(review, {
      onSuccess: () => {
        reset();
        queryClient.invalidateQueries({
          queryKey: ['reviews'],
        });
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(submitReview)} className="reviews__form">
      <textarea
        {...register('review', {
          required: 'Review text is required',
          maxLength: 500,
        })}
        placeholder="Create review"
        className="reviews__textarea"></textarea>
      <div className="reviews__actions">
        <fieldset className="rating-form">
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
        </fieldset>
        <div className="rating-form__rate">{ratingValue || 0}</div>
        <div className="form-error">{errors?.rating?.message || errors?.review?.message}</div>
        <Button type="submit">Send Review</Button>
      </div>
    </form>
  );
}

ReviewForm.propTypes = {};

export default ReviewForm;
