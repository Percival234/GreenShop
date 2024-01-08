import { useQuery } from '@tanstack/react-query';
import { AiOutlineHistory } from 'react-icons/ai';

import Empty from '@Components/Empty/Empty';
import Order from '@Components/Order/Order';
import ServerError from '@Components/Error/ServerError/ServerError';
import PageLoading from '@Components/Loading/PageLoading/PageLoading';

import { fetchOrders } from '@API/API';

function OrderList() {
  const {
    data: orders,
    isPending,
    isError,
    error,
  } = useQuery({ queryKey: ['order'], queryFn: fetchOrders });

  if (isPending) return <PageLoading />;
  if (isError) return <ServerError error={error} />;
  if (!orders.length) return <Empty text="Order history is empty" Icon={<AiOutlineHistory />} />;

  return (
    <div className="order__list">
      {orders.map((order) => (
        <Order key={order._id} order={order} />
      ))}
    </div>
  );
}

OrderList.propTypes = {};

export default OrderList;
