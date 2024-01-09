import { useParams } from 'react-router-dom';
import { FiMessageSquare } from 'react-icons/fi';
import { useQuery } from '@tanstack/react-query';

import Empty from '@Components/Empty/Empty';
import Review from '@Components/Reviews/Review/Review';
import ServerError from '@Components/Error/ServerError/ServerError';
import LocalLoading from '@Components/Loading/LocalLoading/LocalLoading';

import { fetchReviews } from '@API/API';

import './ReviewList.scss';

export default function ReviewList() {
  const { productId } = useParams();
  const {
    data: reviews,
    isPending,
    isError,
    error,
  } = useQuery({ queryKey: ['reviews', productId], queryFn: () => fetchReviews(productId) });

  if (isPending) return <LocalLoading />;
  if (isError) return <ServerError error={error} />;
  if (!reviews.length) return <Empty text="No reviews" Icon={<FiMessageSquare />} />;

  return (
    <div className="reviews__list">
      {reviews.map((review) => (
        <Review key={review._id} review={review} />
      ))}
    </div>
  );
}
