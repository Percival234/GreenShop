import React from 'react';

import Slider from '../../Components/Slider/Slider/Slider';
import ProductsLayout from '../../Components/Products/Products/Products';
import BlogList from '../../Components/Blog/BlogList/BlogList';
import Contacts from '../../Components/Contants/Contacts';
import NewsLetter from '../../Components/NewsLetter/NewsLetter';

export default function Home() {
  return (
    <>
      <Slider />
      <ProductsLayout />
      <BlogList />
      <NewsLetter />
      <Contacts />
    </>
  );
}
