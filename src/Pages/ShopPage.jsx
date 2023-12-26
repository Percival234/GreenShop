import Search from '@Components/Search/Search';
import Contacts from '@Components/Contants/Contacts';
import NewsLetter from '@Components/NewsLetter/NewsLetter';
import ProductsLayout from '@Components/Shop/Products/Products';

export default function ShopPage() {
  return (
    <>
      <Search />
      <ProductsLayout />
      <NewsLetter />
      <Contacts />
    </>
  );
}
