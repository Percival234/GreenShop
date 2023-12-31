import PropTypes from 'prop-types';

function Error({ error }) {
  console.log(error);
  return <div>{error.message}</div>;
}

Error.propTypes = {
  error: PropTypes.object.isRequired,
};

export default Error;
