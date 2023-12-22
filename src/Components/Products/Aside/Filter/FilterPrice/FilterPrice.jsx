import { useState } from 'react';

import Button from '@UI/Buttons/Button';

export default function FilterPrice() {
  const [prices, setPrices] = useState({
    minPrice: 0,
    maxPrice: 1000,
  });

  function rangeInputValueHandler(event) {
    const { id, value } = event.target;
    const { minPrice, maxPrice } = prices;

    if (id === 'min-price' && +value >= maxPrice) {
      setPrices((prev) => ({
        ...prev,
        minPrice: maxPrice,
      }));
    } else if (id === 'max-price' && +value <= minPrice) {
      setPrices((prev) => ({
        ...prev,
        maxPrice: minPrice,
      }));
    } else {
      if (id === 'max-price') {
        setPrices((prev) => ({
          ...prev,
          maxPrice: value,
        }));
      } else {
        setPrices((prev) => ({
          ...prev,
          minPrice: value,
        }));
      }
    }
  }

  return (
    <fieldset className="filter__critery">
      <h4 className="item-title">Price Range</h4>
      <div className="filter__list">
        <div className="filter__double-range">
          <input
            className="filter__range"
            type="range"
            min={0}
            max={1000}
            step={5}
            value={prices.minPrice}
            id="min-price"
            onChange={rangeInputValueHandler}
          />
          <input
            className="filter__range"
            type="range"
            min={0}
            max={1000}
            step={5}
            value={prices.maxPrice}
            id="max-price"
            onInput={rangeInputValueHandler}
          />
        </div>
        <label className="filter__price-info">
          Price:
          <span className="filter__price">{`$${prices.minPrice} - $${prices.maxPrice}`}</span>
        </label>
        <Button>Find</Button>
      </div>
    </fieldset>
  );
}
