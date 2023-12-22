import React from 'react';
import './Orders.scss';

import TitleBorder from '../../UI/Titles/TitleBorder/TitleBorder';
import Order from './Order';

export default function Orders() {
  return (
    <div className="order">
      <TitleBorder>Last orders</TitleBorder>
      <div className="order__list">
        <Order />
        <Order />
        <Order />
        <Order />
        <Order />
      </div>
    </div>
  );
}
