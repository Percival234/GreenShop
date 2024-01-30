import { useQuery } from '@tanstack/react-query';

import Sort from '@Components/Sort/Sort';
import Search from '@Components/Search/Search';
import Aside from '@Components/Aside/Aside/Aside';
import Pagination from '@Components/Pagination/Pagination';
import ProductList from '@Components/Product/ProductList/ProductList';
import ServerError from '@Components/Error/ServerError/ServerError';
import PageLoading from '@Components/Loading/PageLoading/PageLoading';

import { fetchProducts } from '@API/API';

import './Shop.scss';

export default function Shop() {
  const { data, isPending, isFetching, error } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  if (isPending) return <PageLoading />;
  if (error) return <ServerError error={error} />;

  return (
    <div className="shop">
      {isFetching && <div className="shop__loading"></div>}
      <div className="shop__container">
        <Aside />
        <div className="shop__flex">
          <Search />
          <Sort />
          <ProductList products={data.products} />
          <Pagination pagesCount={data.pagesCount} />
        </div>
      </div>
    </div>
  );
}
