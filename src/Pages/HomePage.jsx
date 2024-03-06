import Shop from '@Components/Shop/Shop';
import Blogs from '@Components/Blog/Blogs';
import Slider from '@Components/Slider/Slider';
import Contacts from '@Components/Contacts/Contacts';
import NewsLetter from '@Components/NewsLetter/NewsLetter';

export default function HomePage() {
  return (
    <>
      <Slider />
      <Shop />
      <Blogs />
      <NewsLetter />
      <Contacts />
    </>
  );
}
