import PropTypes from 'prop-types';

function TextArea({ id, label, ...props }) {
  return (
    <div className="input__item">
      <label className="input__label" htmlFor={id}>
        {label}
      </label>
      <textarea {...props} rows="7" id={id} className="textarea input scroll-overflow"></textarea>
    </div>
  );
}

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default TextArea;
