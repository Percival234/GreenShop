import Shop from '@Components/Shop/Shop';
import Contacts from '@Components/Contants/Contacts';
import Slider from '@Components/Slider/Slider/Slider';
import BlogList from '@Components/Blog/BlogList/BlogList';
import NewsLetter from '@Components/NewsLetter/NewsLetter';
import Wishlist from '@Components/WishList/WishList';

export default function HomePage() {
  return (
    <>
      <Slider />
      <Wishlist />
      <Shop />
      <BlogList />
      <NewsLetter />
      <Contacts />
    </>
  );
}
