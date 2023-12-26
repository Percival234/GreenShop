import Shop from '@Components/Shop/Shop';
import Search from '@Components/Search/Search';
import Contacts from '@Components/Contants/Contacts';
import NewsLetter from '@Components/NewsLetter/NewsLetter';

export default function ShopPage() {
  return (
    <>
      <Search />
      <Shop />
      <NewsLetter />
      <Contacts />
    </>
  );
}
