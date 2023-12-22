import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import './Alert.scss';

function Alert({ type, text }) {
  const [isVisible, setVisible] = useState(true);
  const alertRef = useRef(null);

  useEffect(() => {
    const setAnimationT = setTimeout(() => {
      setVisible(false);
    }, 4500);
    const timeout = setTimeout(() => {
      console.log('alert timer');
    }, 5000);
    return () => {
      clearTimeout(timeout);
      clearTimeout(setAnimationT);
    };
  }, []);

  return (
    <CSSTransition
      nodeRef={alertRef}
      in={isVisible}
      timeout={1600}
      unmountOnExit
      classNames="alert__item">
      <div ref={alertRef} className={`alert__item ${type}`}>
        <p className="alert__text">{text}</p>
      </div>
    </CSSTransition>
  );
}

Alert.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Alert;
