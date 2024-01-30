import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import ReviewList from '@Components/Reviews/ReviewList/ReviewList';
import ReviewForm from '@Components/Reviews/ReviewForm/ReviewForm';
import ServerError from '@Components/Error/ServerError/ServerError';
import LocalLoading from '@Components/Loading/LocalLoading/LocalLoading';

import { fetchReviews } from '@API/API';

import './Reviews.scss';

export default function Reviews() {
  const { productId } = useParams();
  const {
    data: reviews,
    isPending,
    error,
  } = useQuery({ queryKey: ['reviews', productId], queryFn: () => fetchReviews(productId) });

  if (isPending) return <LocalLoading />;
  if (error) return <ServerError error={error} />;

  return (
    <div className="reviews">
      <ReviewList reviews={reviews} />
      <ReviewForm />
    </div>
  );
}
