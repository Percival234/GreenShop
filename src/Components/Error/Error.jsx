import PropTypes from 'prop-types';

function Error({ error }) {
  return <div>{error.data.message}</div>;
}

Error.propTypes = {
  error: PropTypes.object,
};

export default Error;
