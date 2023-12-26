import PropTypes from 'prop-types';

import './LinkSocial.scss';

function LinkSocial({ Icon, to, ...props }) {
  return (
    <a className="social-link" href={to} {...props}>
      <Icon size={20} />
    </a>
  );
}

LinkSocial.propTypes = {
  Icon: PropTypes.func.isRequired,
  to: PropTypes.string.isRequired,
};

export default LinkSocial;
