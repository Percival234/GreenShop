import { useState } from 'react';

import Button from '@UI/Buttons/Button/Button';
import TitleItem from '@UI/Titles/TitleItem/TitleItem';

export default function FilterPrice() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  function rangeInputValueHandler(event) {
    const { id, value } = event.target;

    if (id === 'min-price' && +value >= maxPrice) {
      setMinPrice(maxPrice);
    } else if (id === 'max-price' && +value <= minPrice) {
      setMaxPrice(minPrice);
    } else {
      if (id === 'max-price') {
        setMaxPrice(value);
      } else {
        setMinPrice(value);
      }
    }
  }

  return (
    <fieldset className="filter__form">
      <TitleItem>Price Range</TitleItem>
      <div className="filter__double-range">
        <input
          className="filter__range"
          type="range"
          min={0}
          max={1000}
          step={5}
          value={minPrice}
          id="min-price"
          onChange={rangeInputValueHandler}
        />
        <input
          className="filter__range"
          type="range"
          min={0}
          max={1000}
          step={5}
          value={maxPrice}
          id="max-price"
          onInput={rangeInputValueHandler}
        />
      </div>
      <label className="filter__item">
        Price:
        <div className="filter__price">{`$${minPrice} - $${maxPrice}`}</div>
      </label>
      <Button>Find</Button>
    </fieldset>
  );
}
