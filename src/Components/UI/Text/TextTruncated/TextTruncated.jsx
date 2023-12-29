import PropTypes from 'prop-types';

import './TextTruncated.scss';

function TextTruncated({ children, rows }) {
  return (
    <p className="text-truncated" style={{ '--rows': rows }}>
      {children}
    </p>
  );
}

TextTruncated.propTypes = {
  children: PropTypes.string.isRequired,
  rows: PropTypes.number.isRequired,
};

export default TextTruncated;
