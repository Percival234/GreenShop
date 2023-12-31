import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';

import './Sort.scss';

export default function Sort() {
  const [isVisible, setIsVisible] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const sortOrders = ['default', 'rating', 'alphabet', 'ascending price', 'descending price'];
  const client = useQueryClient();

  const handleSortOrder = (event) => {
    const order = event.target.textContent;
    if (order === 'default') {
      searchParams.delete('sort');
      setSearchParams(searchParams);
    } else {
      setSearchParams((prev) => {
        prev.set('sort', order);
        return prev;
      });
    }
    client.invalidateQueries({ queryKey: ['products'] });
  };

  const handleSortVisible = () => setIsVisible(!isVisible);

  return (
    <div className="sort">
      <div className="sort__order">
        Short by:
        <div className={`sort__select ${isVisible ? 'active' : ''}`} onClick={handleSortVisible}>
          <div className="sort__option-current sort__option">
            {searchParams.get('sort') || sortOrders[0]}
          </div>
          {isVisible && (
            <div className="sort__option-menu">
              {sortOrders.map((order) => (
                <div
                  className={`sort__option ${searchParams.get('sort') ? 'active' : ''}`}
                  key={order}
                  onClick={handleSortOrder}>
                  {order}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
