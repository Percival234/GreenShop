import PropTypes from 'prop-types';

import './FormError.scss';

function FormError({ error }) {
  return <div className="form-error">{error}</div>;
}

FormError.propTypes = {
  error: PropTypes.string,
};

export default FormError;
