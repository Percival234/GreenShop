import PropTypes from 'prop-types';

import './TitleBorder.scss';

function TitleBorder({ children }) {
  return <h4 className="title-border">{children}</h4>;
}

TitleBorder.propTypes = {
  children: PropTypes.string.isRequired,
};

export default TitleBorder;
