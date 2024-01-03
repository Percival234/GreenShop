import PropTypes from 'prop-types';
import { AiFillStar } from 'react-icons/ai';

import './Rating.scss';

function Rating({ rating, number }) {
  return (
    <div className="rating">
      {number && <div>{rating.toFixed(1)}</div>}
      <div className="rating__stars">
        <AiFillStar size={18} />
        <AiFillStar size={18} />
        <AiFillStar size={18} />
        <AiFillStar size={18} />
        <AiFillStar size={18} />
        <div className="rating__overlay" style={{ width: `${100 - (rating / 5) * 100}%` }}></div>
      </div>
    </div>
  );
}

Rating.propTypes = {
  number: PropTypes.bool,
  rating: PropTypes.number.isRequired,
};

export default Rating;
