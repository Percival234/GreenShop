import PropTypes from 'prop-types';

import { AiOutlineHistory } from 'react-icons/ai';

import Empty from '@Components/Empty/Empty';
import Order from '@Components/Order/Order/Order';

import './OrderList.scss';

function OrderList({ orders }) {
  if (!orders.length) return <Empty text="Order history is empty" Icon={<AiOutlineHistory />} />;
  return (
    <div className="order-list">
      {orders.map((order) => (
        <Order key={order._id} order={order} />
      ))}
    </div>
  );
}

OrderList.propTypes = {
  orders: PropTypes.array,
};

export default OrderList;
