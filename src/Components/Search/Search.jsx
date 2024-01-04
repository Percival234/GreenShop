import { FiSearch } from 'react-icons/fi';
import { useSearchParams } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';

import debounce from '@Utils/debounce';

import './Search.scss';
import { useState } from 'react';

export default function Search() {
  const client = useQueryClient();
  const [searchParams, setSearchParams] = useSearchParams();
  const handleSearch = (value) => {
    setSearchParams((prev) => {
      const updatedParams = new URLSearchParams(prev.toString());
      if (value) {
        updatedParams.set('search', value);
      } else {
        updatedParams.delete('search');
      }
      updatedParams.delete('page');
      return updatedParams;
    });
  };

  const invalidate = debounce(() => {
    console.log('inlavidate');
    client.invalidateQueries({ queryKey: ['products'] });
  }, 3000);

  const onChange = (event) => {
    const value = event.target.value;
    handleSearch(value);
    invalidate(); // Викликаємо debounce тут
  };

  return (
    <div className="search">
      <FiSearch size={24} className="search__icon" />
      <input
        value={searchParams.get('search') || ''}
        onChange={onChange}
        type="text"
        placeholder="Search"
        className="search__field"
      />
    </div>
  );
}
