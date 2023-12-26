import PropTypes from 'prop-types';
import { FiShoppingCart } from 'react-icons/fi';

import Card from '@Components/Card/Card';
import Empty from '@Components/Empty/Empty';

import './ProductList.scss';

function ProductList({ products }) {
  if (!products.length) return <Empty text="No results" Icon={<FiShoppingCart />} />;
  return (
    <div className="product-list">
      {products.map((product) => {
        return <Card key={product.id} product={product} />;
      })}
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductList;
