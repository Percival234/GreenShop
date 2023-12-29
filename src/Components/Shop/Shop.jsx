import { useQuery } from '@tanstack/react-query';

import Sort from '@Components/Sort/Sort';
import Error from '@Components/Error/Error';
import Aside from '@Components/Aside/Aside/Aside';
import Pagination from '@Components/Pagination/Pagination';
import ProductList from '@Components/ProductList/ProductList';
import PageLoading from '@Components/Loading/PageLoading/PageLoading';

import './Shop.scss';

export default function Shop() {
  const { data, isPending, isError, error } = useQuery({ queryKey: ['product'] });

  if (isPending) return <PageLoading />;
  if (isError) return <Error error={error} />;

  return (
    <div className="shop">
      <div className="shop__container">
        <Aside />
        <div className="shop__flex">
          <Sort />
          <ProductList products={data.products} />
          <Pagination pagesCount={data.pagesCount} />
        </div>
      </div>
    </div>
  );
}
