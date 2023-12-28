import { useQuery } from '@tanstack/react-query';

import Shop from '@Components/Shop/Shop';
import Contacts from '@Components/Contants/Contacts';
import Slider from '@Components/Slider/Slider/Slider';
import BlogList from '@Components/Blog/BlogList/BlogList';
import NewsLetter from '@Components/NewsLetter/NewsLetter';
import PageLoading from '@Components/Loading/PageLoading/PageLoading';

export default function HomePage() {
  const { data: products, isPending, isError, error } = useQuery({ queryKey: ['product'] });

  if (isPending) return <PageLoading />;
  if (isError) return <div>{error.message}</div>;

  return (
    <>
      <Slider />
      <Shop products={products} />
      <BlogList />
      <NewsLetter />
      <Contacts />
    </>
  );
}
