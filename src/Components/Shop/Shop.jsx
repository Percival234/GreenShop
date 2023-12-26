import Sort from '@Components/Sort/Sort';
import Aside from '@Components/Aside/Aside/Aside';
import Pagination from '@Components/Pagination/Pagination';
import ProductList from '@Components/ProductList/ProductList';

import './Shop.scss';

export default function Shop() {
  return (
    <div className="shop">
      <div className="shop__container">
        <Aside />
        <div className="shop__flex">
          <Sort />
          <ProductList />
          <Pagination />
        </div>
      </div>
    </div>
  );
}
