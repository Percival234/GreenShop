import PropTypes from 'prop-types';

import './TextTrancated.scss';

function TextTrancated({ children, rows }) {
  return (
    <p className="text-truncated" style={{ '--rows': rows }}>
      {children}
    </p>
  );
}

TextTrancated.propTypes = {
  children: PropTypes.string.isRequired,
  rows: PropTypes.number.isRequired,
};

export default TextTrancated;
