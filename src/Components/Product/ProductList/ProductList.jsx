import PropTypes from 'prop-types';
import { FiShoppingCart } from 'react-icons/fi';

import Card from '@Components/Card/Card';
import Empty from '@Components/Empty/Empty';

import './ProductList.scss';

function ProductList({ products }) {
  if (!products?.length) return <Empty text="No products" Icon={<FiShoppingCart />} />;
  return (
    <div className="product-list">
      {products.map((product) => (
        <Card key={product._id} product={product} />
      ))}
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductList;
