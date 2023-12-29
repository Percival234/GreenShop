import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import Contacts from '@Components/Contants/Contacts';
import Error from '@Components/Error/Error';
// import Related from '@Components/Related/Related/Related';
import NewsLetter from '@Components/NewsLetter/NewsLetter';
import ProductInfo from '@Components/Product/ProductInfo/ProductInfo';
import PageLoading from '@Components/Loading/PageLoading/PageLoading';
import ProductAbout from '@Components/Product/ProductAbout/ProductAbout';

export default function ProductPage() {
  const { productId } = useParams();

  const {
    data: product,
    isPending,
    isError,
    error,
  } = useQuery({ queryKey: [`product/${productId}`] });

  if (isPending) return <PageLoading />;
  if (isError) return <Error error={error} />;

  return (
    <>
      <ProductInfo product={product} />
      <ProductAbout id={productId} />
      {/* <Related category={product.category} /> */}
      <NewsLetter />
      <Contacts />
    </>
  );
}
