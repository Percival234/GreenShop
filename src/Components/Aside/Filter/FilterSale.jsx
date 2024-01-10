import { useSearchParams } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';

import TitleItem from '@UI/Titles/TitleItem/TitleItem';

export default function FilterSale() {
  const [searchParams, setSearchParams] = useSearchParams();
  const client = useQueryClient();

  const handleIsSale = (event) => {
    setSearchParams((prev) => {
      if (event.target.checked) searchParams.set('sale', true);
      else searchParams.delete('sale');
      prev.delete('page');
      return prev;
    });
    client.invalidateQueries({ queryKey: ['products'] });
  };

  return (
    <div className="filter__form">
      <TitleItem>Sale</TitleItem>
      <div className="filter__item">
        <input
          id="sale"
          type="checkbox"
          className="filter__checkbox"
          value={!!searchParams.get('sale')}
          onChange={handleIsSale}
          checked={!!searchParams.get('sale')}
        />
        <label htmlFor="sale" className="filter__label">
          <div>Only sale</div>
        </label>
      </div>
    </div>
  );
}
