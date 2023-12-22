import React from 'react';

export default function CheckoutItem() {
  return (
    <div className="checkout__item">
      <div className="checkout__item-data">
        <div className="checkout__image-container">
          <img
            src="https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="product"
            className="checkout__image"
          />
        </div>
        <h4 className="checkout__title">Barberton Daisy sdsdfs sdfsd</h4>
      </div>
      <div className="checkout__qty">(x 22)</div>
      <div className="checkout__price">$23800.00</div>
    </div>
  );
}
