import PropTypes from 'prop-types';

import './ServerError.scss';

function ServerError({ error }) {
  return error && <div className="server-error">{error?.response?.data?.message}!</div>;
}

ServerError.propTypes = {
  error: PropTypes.object,
};

export default ServerError;
