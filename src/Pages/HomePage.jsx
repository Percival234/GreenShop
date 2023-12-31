import Shop from '@Components/Shop/Shop';
import Contacts from '@Components/Contants/Contacts';
import Slider from '@Components/Slider/Slider/Slider';
import BlogList from '@Components/Blog/BlogList/BlogList';
import NewsLetter from '@Components/NewsLetter/NewsLetter';

export default function HomePage() {
  return (
    <>
      <Slider />
      <Shop />
      <BlogList />
      <NewsLetter />
      <Contacts />
    </>
  );
}
