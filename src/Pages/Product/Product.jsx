// import { useParams } from 'react-router-dom';

// import Loading from '@Components/Loading/Loading';
// import Contacts from '@Components/Contants/Contacts';
// import NewsLetter from '@Components/NewsLetter/NewsLetter';
// import Related from '@Components/ProductPage/Related/Related/Related';
// import ProductAbout from '@Components/ProductPage/ProductAbout/ProductAbout';
// import ProductInfo from '@Components/ProductPage/ProductInfo/ProductInfo';
// import ProductImage from '@Components/ProductPage/ProductImage/ProductImage';

export default function Product() {
  // const { productId } = useParams();

  // if (productId > 0) return <Loading />;

  return (
    <>
      <div className="product__container">
        {/* <ProductImage image={product.image} alt={product.productName} />
        <ProductInfo product={product} />
        <ProductAbout reviews={product.reviews} fullDescription={product.fullDescription} /> */}
      </div>
      {/* <Related category={product.category} /> */}
      {/* <NewsLetter />
      <Contacts /> */}
    </>
  );
}
