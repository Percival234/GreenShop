import OrderList from '@Components/Order/OrderList';
import TitleBorder from '@UI/Titles/TitleBorder/TitleBorder';

import './Orders.scss';

export default function Orders() {
  return (
    <div className="order">
      <TitleBorder>Last orders</TitleBorder>
      <OrderList />
    </div>
  );
}
