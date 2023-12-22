import React from 'react';

import ProductsLayout from '../../Components/Products/Products/Products';
import NewsLetter from '../../Components/NewsLetter/NewsLetter';
import Contacts from '../../Components/Contants/Contacts';
import Search from '../../Components/Search/Search';

export default function Shop() {
  return (
    <>
      <Search />
      <ProductsLayout />
      <NewsLetter />
      <Contacts />
    </>
  );
}
