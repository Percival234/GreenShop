import React from 'react';

import Sort from '../Sort/Sort';
import Pagination from '../Pagination/Pagination';
import ProductsList from '../ProductList/ProductsList';
import Aside from '../Aside/Aside/Aside';

export default function ProductsBlock() {
  return (
    <div className="shop">
      <div className="shop__container">
        <Aside />
        <div className="products">
          <Sort />
          <ProductsList />
          <Pagination />
        </div>
      </div>
    </div>
  );
}
