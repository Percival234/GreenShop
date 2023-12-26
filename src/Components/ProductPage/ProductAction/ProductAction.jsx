import React from 'react';
import { FiHeart } from 'react-icons/fi';
import { useDispatch } from 'react-redux';

import { addToCart } from '../../../Redux/Slices/CartSlice';

import Button from '../../UI/Buttons/Button/Button';
import ButtonInvert from '../../UI/Buttons/ButtonOutline/ButtonOutline';
import Counter from '../../Counter/Counter';

export default function ProductAction({ id }) {
  const dispatch = useDispatch();

  function add() {
    dispatch(addToCart({ id, amount: 1 }));
  }

  return (
    <div className="product__action">
      <Counter />
      <div className="product__buttons">
        <Button>Buy now</Button>
        <ButtonInvert onClick={add}>Add to cart</ButtonInvert>
        <button type="button" className="product__button product__button_like">
          <FiHeart className="icon" />
        </button>
      </div>
    </div>
  );
}
