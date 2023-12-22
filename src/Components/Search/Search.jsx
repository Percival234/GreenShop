import React from 'react';
import { FiSearch } from 'react-icons/fi';

import SimpleForm from '../Forms/SimpleForm/SimpleForm';

export default function Search() {
  return (
    <div className="search__container">
      <SimpleForm id="search" placeholder="Enter product name or category">
        <FiSearch className="icon" />
      </SimpleForm>
    </div>
  );
}
