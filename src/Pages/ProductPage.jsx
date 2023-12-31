import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import Error from '@Components/Error/Error';
import Related from '@Components/Related/Related';
import Contacts from '@Components/Contants/Contacts';
import ProductInfo from '@Components/Product/ProductInfo';
import NewsLetter from '@Components/NewsLetter/NewsLetter';
import ProductAbout from '@Components/Product/ProductAbout';
import PageLoading from '@Components/Loading/PageLoading/PageLoading';
import { fetchProduct } from '@API/API';

export default function ProductPage() {
  const { productId } = useParams();

  const {
    data: product,
    isPending,
    isError,
    error,
  } = useQuery({ queryKey: ['product', productId], queryFn: () => fetchProduct(productId) });

  if (isPending) return <PageLoading />;
  if (isError) return <Error error={error} />;

  return (
    <>
      <ProductInfo product={product} />
      <ProductAbout />
      <Related category={product?.category} />
      <NewsLetter />
      <Contacts />
    </>
  );
}
