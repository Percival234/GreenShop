import PropTypes from 'prop-types';

import './TitleBorder.scss';

function TitleBorder({ children }) {
  return <h3 className="title-border">{children}</h3>;
}

TitleBorder.propTypes = {
  children: PropTypes.string.isRequired,
};

export default TitleBorder;
