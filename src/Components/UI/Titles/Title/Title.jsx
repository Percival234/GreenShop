import PropTypes from 'prop-types';

import './Title.scss';

function Title({ children }) {
  return <h2 className="title">{children}</h2>;
}

Title.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Title;
