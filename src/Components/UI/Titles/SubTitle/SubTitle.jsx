import PropTypes from 'prop-types';

import './SubTitle.scss';

function SubTitle({ children, center }) {
  return <h4 className={`${center ? 'text-center' : ''} sub-title`}>{children}</h4>;
}

SubTitle.propTypes = {
  children: PropTypes.string.isRequired,
  center: PropTypes.bool,
};

export default SubTitle;
