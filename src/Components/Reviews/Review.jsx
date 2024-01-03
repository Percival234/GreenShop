import PropTypes from 'prop-types';

import Rating from '@Components/Rating/Rating/Rating';
import { SERVER_URL } from '@Constants/CONSTANTS';

function Review({ review: { user, rate, text, createdAt } }) {
  return (
    <div className="reviews__item">
      <div className="reviews__top">
        <div className="reviews__details">
          <div className="reviews__image-container">
            <img
              src={`${SERVER_URL}/static/users/${user.image || 'default-user.jpg'}`}
              alt="user"
              className="reviews__image"
            />
          </div>
          <div className="reviews__info">
            <div className="reviews__author">{user.firstname || `User ${user._id}`}</div>
            <Rating rating={rate} />
          </div>
        </div>
        <div className="reviews__date">{new Date(createdAt).toLocaleDateString('en-GB')}</div>
      </div>
      <p className="reviews__text">{text}</p>
    </div>
  );
}

Review.propTypes = {
  review: PropTypes.shape({
    text: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
    rate: PropTypes.number.isRequired,
    createdAt: PropTypes.string.isRequired,
  }),
};

export default Review;
