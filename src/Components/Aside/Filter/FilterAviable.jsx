import { useSearchParams } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';

import TitleItem from '@UI/Titles/TitleItem/TitleItem';

export default function FilterAvailable() {
  const client = useQueryClient();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleIsAvailable = (event) => {
    setSearchParams((prev) => {
      if (event.target.checked) searchParams.set('available', true);
      else searchParams.delete('available');
      prev.delete('page');
      return prev;
    });
    client.invalidateQueries({ queryKey: ['products'] });
  };

  return (
    <div className="filter__form">
      <TitleItem>Available</TitleItem>
      <div className="filter__item">
        <input
          id="available"
          type="checkbox"
          className="filter__checkbox"
          value={!!searchParams.get('available')}
          onChange={handleIsAvailable}
          checked={!!searchParams.get('available')}
        />
        <label htmlFor="available" className="filter__label">
          <div>Only Available</div>
        </label>
      </div>
    </div>
  );
}
