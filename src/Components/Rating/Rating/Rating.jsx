import { BsStarFill } from 'react-icons/bs';
import PropTypes from 'prop-types';

import './Rating.scss';

function Rating({ rating }) {
  const formatedRating = Number.isInteger(rating) ? `${rating}.0` : +rating.toFixed(1);
  const ratingOverlayWidth = `${100 - (rating / 5) * 100}%`;

  return (
    <div className="rating">
      <div>{formatedRating}</div>
      <div className="rating__stars">
        <BsStarFill size={18} />
        <BsStarFill size={18} />
        <BsStarFill size={18} />
        <BsStarFill size={18} />
        <BsStarFill size={18} />
        <div className="rating__overlay" style={{ width: ratingOverlayWidth }}></div>
      </div>
    </div>
  );
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
