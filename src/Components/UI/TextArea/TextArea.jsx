import PropTypes from 'prop-types';

import './TextArea.scss';

function TextArea({ register, ...props }) {
  return <textarea className="textarea" {...register} {...props}></textarea>;
}

TextArea.propTypes = {
  register: PropTypes.object.isRequired,
};

export default TextArea;
