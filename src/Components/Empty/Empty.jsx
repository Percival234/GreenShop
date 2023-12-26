import PropTypes from 'prop-types';

import './Empty.scss';

function Empty({ Icon, text }) {
  return (
    <div className="empty">
      <div className="empty__icon">{Icon}</div>
      <p className="empty__text">{text}</p>
    </div>
  );
}

Empty.propTypes = {
  text: PropTypes.string.isRequired,
  Icon: PropTypes.object.isRequired,
};

export default Empty;
