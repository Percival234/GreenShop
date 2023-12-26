import { FiMessageSquare } from 'react-icons/fi';

import Empty from '@Components/Empty/Empty';
// import Error from '@Components/Error/Error';
import Review from '@Components/Reviews/Review/Review';
// import LocalLoading from '@Components/Loading/LocalLoading/LocalLoading';

import './ReviewList.scss';

export default function ReviewList() {
  const reviews = [];

  // if(isLoading) return <LocalLoading/>
  // if(error) return <Error error={error}/>
  if (!reviews.length) return <Empty text="No reviews" Icon={<FiMessageSquare />} />;

  return (
    <div className="comments__list">
      {reviews.map((review) => {
        return <Review key={review.id} review={review} />;
      })}
    </div>
  );
}
