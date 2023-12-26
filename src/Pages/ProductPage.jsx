import { useParams } from 'react-router-dom';

// import PageLoading from "@Components/Loading/PageLoading/PageLoading";

import Contacts from '@Components/Contants/Contacts';
// import NewsLetter from '@Components/NewsLetter/NewsLetter';
// import Related from '@Components/Related/Related/Related';
import ProductInfo from '@Components/Product/ProductInfo/ProductInfo';
import ProductAbout from '@Components/Product/ProductAbout/ProductAbout';

export default function ProductPage() {
  const { productId } = useParams();

  const product = productId;

  // if(isLoading) return <PageLoading/>
  // if(error) return <Error error={error}/>

  return (
    <>
      <ProductInfo product={product} />
      <ProductAbout />
      {/* <Related category={product.category} /> */}
      {/* <NewsLetter /> */}
      <Contacts />
    </>
  );
}
