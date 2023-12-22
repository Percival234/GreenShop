// import { useEffect, useState, useCallback } from 'react';
// import { NavLink } from 'react-router-dom';
// import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

import './CartItem.scss';

// import ButtonSmall from '@UI/Buttons/ButtonSmall/ButtonSmall';
// import Image from '@UI/Image/Image';
// import Price from '@UI/Price/Price';

export default function CartItem() {
  return (
    <div className="cart-item">
      {/* <div className="cart-item__image-container">
        <Image src={product.image} alt={product.productName} className="cart-item__image" />
      </div>
      <div className="cart-item__data">
        <NavLink to={`/product/${id}`} className="cart-item__name">
          {product.productName}
        </NavLink>
        <div className="cart-item__id hidden-tablet">
          ID: <div className="cart-item__result">{product.id}</div>
        </div>
        <Price
          className="cart-item__price"
          sale={product.sale}
          price={product.price}
          type="medium"
        />
      </div>
      <Price
        className="hidden-tablet cart-item__price"
        sale={product.sale}
        price={product.price}
        type="medium"
      />
      <div className="cart-item__counter">
        <button type="button" className="cart-item__button cart-item__button_counter">
          <AiOutlineMinus />
        </button>
        <div className="cart-item__count">{amount}</div>
        <button type="button" className="cart-item__button cart-item__button_counter">
          <AiOutlinePlus />
        </button>
      </div>
      <Price
        className="cart-total__price"
        sale={product.sale}
        price={product.price * amount}
        type="solid"
      />
      <ButtonSmall onClick={remove} className="cart-item__button_delete">
        <AiOutlineDelete className="icon" />
      </ButtonSmall> */}
    </div>
  );
}
