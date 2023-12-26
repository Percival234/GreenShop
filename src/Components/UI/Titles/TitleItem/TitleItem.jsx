import PropTypes from 'prop-types';

import './TitleItem.scss';

function TitleItem({ children }) {
  return <h2 className="item-title">{children}</h2>;
}

TitleItem.propTypes = {
  children: PropTypes.string.isRequired,
};

export default TitleItem;
