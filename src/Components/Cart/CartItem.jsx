import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
// import { useEffect, useState, useCallback } from 'react';

import ButtonSmall from '@UI/Buttons/ButtonSmall/ButtonSmall';

import { useCartStore } from '@Store/cartStore';

export default function CartItem({ item: { id, count } }) {
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const increaseItemQuantity = useCartStore((state) => state.increaseItemQuantity);
  const decreaseItemQuantity = useCartStore((state) => state.decreaseItemQuantity);

  const handleIncreaseItemQuantity = () => increaseItemQuantity(id);
  const handleDecreaseItemQuantity = () => decreaseItemQuantity(id);

  const handleRemoveFromCart = () => removeFromCart(id);

  return (
    <div className="cart-item">
      {/* <div className="cart-item__image-container">
        <Image src={product.image} alt={product.productName} className="cart-item__image" />
      </div>
      <div className="cart-item__data">
        <NavLink to={`/product/${id}`} className="cart-item__name">
          {product.productName}
  </NavLink>*/}
      <div className="cart-item__id hidden-tablet">
        ID: <div className="cart-item__result">{id}</div>
      </div>
      {/* <Price
          className="cart-item__price"
          sale={product.sale}
          price={product.price}
          type="medium"
        /> */}
      {/* </div> */}
      {/* // <Price */}
      {/* //   className="hidden-tablet cart-item__price"
      //   sale={product.sale}
      //   price={product.price}
      //   type="medium"
      // /> */}
      <div className="cart-item__counter">
        <button
          disabled={count <= 1}
          onClick={handleDecreaseItemQuantity}
          type="button"
          className="cart-item__button cart-item__button_counter">
          <AiOutlineMinus />
        </button>
        <div className="cart-item__count">{count}</div>
        <button
          disabled={count >= 20}
          onClick={handleIncreaseItemQuantity}
          type="button"
          className="cart-item__button cart-item__button_counter">
          <AiOutlinePlus />
        </button>
      </div>
      {/* <Price
        className="cart-total__price"
        sale={product.sale}
        price={product.price * amount}
        type="solid"
      /> */}
      <ButtonSmall
        onClick={handleRemoveFromCart}
        Icon={<AiOutlineDelete size={20} />}
        ariaLabel="Remove from cart"
      />
    </div>
  );
}
