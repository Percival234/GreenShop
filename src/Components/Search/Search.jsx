import { useCallback, useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useSearchParams } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';

import { useDebounce } from '@Hooks/useDebounce';

import './Search.scss';

export default function Search() {
  const client = useQueryClient();
  const [search, setSearch] = useState('');
  const [debouncedSearch] = useDebounce(search, 500);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = useCallback(() => {
    setSearchParams((prev) => {
      if (search) prev.set('search', search);
      else prev.delete('search');
      prev.delete('page');
      return prev;
    });
    client.invalidateQueries({ queryKey: ['products'] });
  }, [setSearchParams, client, search]);

  useEffect(() => {
    handleSearch();
  }, [debouncedSearch]);

  const onChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="search">
      <FiSearch size={24} className="search__icon" />
      <input
        value={search}
        onChange={onChange}
        type="text"
        placeholder="Search"
        className="search__field"
      />
    </div>
  );
}
