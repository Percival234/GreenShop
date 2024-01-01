import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';

import Button from '@UI/Buttons/Button/Button';
import TitleItem from '@UI/Titles/TitleItem/TitleItem';

import { useEventStore } from '@Store/eventStore';

import { SORT_ORDERS } from '@Constants/CONSTANTS';

import './Sort.scss';

export default function Sort() {
  const client = useQueryClient();
  const [isVisible, setIsVisible] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const toggle = useEventStore((state) => state.toggle);

  const handleSortOrder = (event) => {
    const order = event.target.textContent;
    setSearchParams((prev) => {
      if (order === SORT_ORDERS[0]) prev.delete('sort');
      else prev.set('sort', order);
      prev.delete('page');
      return prev;
    });
    client.invalidateQueries({ queryKey: ['products'] });
  };

  const handleSortVisible = () => setIsVisible(!isVisible);

  const handleFiltersVisible = () => toggle('filter');

  return (
    <div className="sort">
      <div className="sort__container">
        <TitleItem>Short by:</TitleItem>
        <div className="sort__select" onClick={handleSortVisible}>
          <div className="sort__option-current sort__option">
            {searchParams.get('sort') || SORT_ORDERS[0]}
          </div>
          {isVisible && (
            <div className="sort__menu">
              {SORT_ORDERS.map((order) => (
                <div
                  className={
                    searchParams.get('sort') == order ||
                    (order == SORT_ORDERS[0] && !searchParams.has('sort'))
                      ? 'sort__option hidden'
                      : 'sort__option'
                  }
                  key={order}
                  onClick={handleSortOrder}>
                  {order}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Button onClick={handleFiltersVisible}>Filters</Button>
    </div>
  );
}
