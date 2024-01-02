import OrderList from '@Components/Orders/OrderList';
import TitleBorder from '@UI/Titles/TitleBorder/TitleBorder';

import './Orders.scss';
import Order from './Order';

export default function Orders() {
  return (
    <div className="order">
      <TitleBorder>Last orders</TitleBorder>
      <OrderList />
      <Order />
    </div>
  );
}
