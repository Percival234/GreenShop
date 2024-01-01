import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';

import Button from '@UI/Buttons/Button/Button';
import TitleItem from '@UI/Titles/TitleItem/TitleItem';

import { MIN_PRICE_VALUE, MAX_PRICE_VALUE, PRICE_RANGE_STEP } from '@Constants/CONSTANTS';

export default function FilterPrice() {
  const client = useQueryClient();
  const [searchParams, setSearchParams] = useSearchParams();
  const [minPrice, setMinPrice] = useState(searchParams.get('minPrice') || MIN_PRICE_VALUE);
  const [maxPrice, setMaxPrice] = useState(searchParams.get('maxPrice') || MAX_PRICE_VALUE);

  const handlePriceValue = (event) => {
    event.target.id === 'min-price'
      ? setMinPrice(Math.min(+event.target.value, maxPrice))
      : setMaxPrice(Math.max(+event.target.value, minPrice));
  };

  const handlePrice = () => {
    setSearchParams((prev) => {
      if (minPrice > MIN_PRICE_VALUE) prev.set('minPrice', minPrice);
      else prev.delete('minPrice');

      if (maxPrice < MAX_PRICE_VALUE) prev.set('maxPrice', maxPrice);
      else prev.delete('maxPrice');

      prev.delete('page');
      return prev;
    });
    client.invalidateQueries({ queryKey: ['products'] });
  };

  return (
    <fieldset className="filter__form">
      <TitleItem>Price Range</TitleItem>
      <div className="filter__double-range">
        <input
          className="filter__range"
          type="range"
          min={MIN_PRICE_VALUE}
          max={MAX_PRICE_VALUE - PRICE_RANGE_STEP}
          step={PRICE_RANGE_STEP}
          value={minPrice}
          id="min-price"
          onChange={handlePriceValue}
        />
        <input
          className="filter__range"
          type="range"
          min={MIN_PRICE_VALUE + PRICE_RANGE_STEP}
          max={MAX_PRICE_VALUE}
          step={PRICE_RANGE_STEP}
          value={maxPrice}
          id="max-price"
          onChange={handlePriceValue}
        />
      </div>
      <label className="filter__item">
        Price:
        <div className="filter__price">{`$${minPrice} - $${maxPrice}`}</div>
      </label>
      <Button onClick={handlePrice}>Find</Button>
    </fieldset>
  );
}
