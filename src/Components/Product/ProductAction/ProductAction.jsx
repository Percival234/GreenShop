import { FiHeart } from 'react-icons/fi';

import Counter from '../../Counter/Counter';
import Button from '@UI/Buttons/Button/Button';
import ButtonOutline from '@UI/Buttons/ButtonOutline/ButtonOutline';

export default function ProductAction() {
  return (
    <div className="product__action">
      <Counter />
      <div className="product__buttons">
        <Button>Buy now</Button>
        <ButtonOutline>Add to cart</ButtonOutline>
        <button type="button" className="product__button product__button_like">
          <FiHeart className="icon" />
        </button>
      </div>
    </div>
  );
}
