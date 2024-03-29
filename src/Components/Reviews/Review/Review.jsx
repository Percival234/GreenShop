import PropTypes from 'prop-types';

import Rating from '@Components/Rating/Rating/Rating';

import { SERVER_URL } from '@Constants/SERVER_URL';

import './Review.scss';

function Review({ review: { user, rate, text, createdAt } }) {
  return (
    <div className="reviews-item">
      <div className="reviews-item__top">
        <div className="reviews-item__details">
          <div className="reviews-item__image-container">
            <img
              src={`${SERVER_URL}/static/users/default-user.jpg`}
              alt="user"
              className="reviews-item__image"
            />
          </div>
          <div className="reviews-item__info">
            <div className="reviews-item__author">
              {user?.firstname ? `${user?.firstname} ${user?.lastname}` : `User ${user?._id}`}
            </div>
            <Rating rating={rate} />
          </div>
        </div>
        <div className="reviews-item__date">{new Date(createdAt).toLocaleDateString('en-GB')}</div>
      </div>
      <p className="reviews-item__text">{text}</p>
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
