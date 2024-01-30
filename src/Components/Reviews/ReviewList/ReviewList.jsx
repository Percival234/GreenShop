import PropTypes from 'prop-types';
import { FiMessageSquare } from 'react-icons/fi';

import Empty from '@Components/Empty/Empty';
import Review from '@Components/Reviews/Review/Review';

import './ReviewList.scss';

function ReviewList({ reviews }) {
  if (!reviews.length) return <Empty text="No reviews" Icon={<FiMessageSquare />} />;
  return (
    <div className="reviews__list">
      {reviews.map((review) => (
        <Review key={review._id} review={review} />
      ))}
    </div>
  );
}

ReviewList.propTypes = {
  reviews: PropTypes.array,
};

export default ReviewList;
