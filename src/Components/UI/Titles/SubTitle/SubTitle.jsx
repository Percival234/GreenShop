import PropTypes from 'prop-types';

import './SubTitle.scss';

function SubTitle({ children, center }) {
  return <h3 className={`${center ? 'centered' : ''} sub-title`}>{children}</h3>;
}

SubTitle.propTypes = {
  children: PropTypes.string.isRequired,
  center: PropTypes.bool,
};

export default SubTitle;
