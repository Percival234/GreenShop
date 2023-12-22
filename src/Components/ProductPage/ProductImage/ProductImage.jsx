import PropTypes from 'prop-types';
import { FiSearch } from 'react-icons/fi';

import './ProductImage.scss';

import Image from 'UI/Image/Image';

function ZoomImage({ src, alt }) {
  return (
    <div className="product-image">
      <button className="product-image__zoom-button">
        <FiSearch className="icon" />
      </button>
      <div>
        <Image alt={alt} src={src} className="product-image__image" />
      </div>
    </div>
  );
}

ZoomImage.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default ZoomImage;
