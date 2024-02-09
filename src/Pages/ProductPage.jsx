import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import Contacts from '@Components/Contacts/Contacts';
import Related from '@Components/Related/Related/Related';
import NewsLetter from '@Components/NewsLetter/NewsLetter';
import ServerError from '@Components/Error/ServerError/ServerError';
import ProductInfo from '@Components/Product/ProductInfo/ProductInfo';
import PageLoading from '@Components/Loading/PageLoading/PageLoading';
import ProductAbout from '@Components/Product/ProductAbout/ProductAbout';

import { fetchProduct } from '@API/API';

import './ProductPage.scss';

export default function ProductPage() {
  const { productId } = useParams();
  const {
    data: product,
    isPending,
    isError,
    error,
  } = useQuery({ queryKey: ['product', productId], queryFn: () => fetchProduct(productId) });

  if (isPending) return <PageLoading />;
  if (isError) return <ServerError error={error} />;

  return (
    <div className={product.quantity ? 'product' : 'product disactive'}>
      <ProductInfo product={product} />
      <ProductAbout />
      <Related category={product?.category} />
      <NewsLetter />
      <Contacts />
    </div>
  );
}
