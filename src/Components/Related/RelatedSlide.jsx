import PropTypes from 'prop-types';

import Card from '@Components/Card/Card';

function RelatedSlide({ related, width, slides }) {
  return (
    <div
      style={{ gridTemplateColumns: `repeat(${slides}, 1fr)`, minWidth: `${width}px` }}
      className="related__slide">
      {related.map((relate) => (
        <Card key={relate._id} product={relate} />
      ))}
    </div>
  );
}

RelatedSlide.propTypes = {
  related: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
  slides: PropTypes.number.isRequired,
};

export default RelatedSlide;
