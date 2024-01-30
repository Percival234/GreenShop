import { useQuery } from '@tanstack/react-query';

import TitleBorder from '@UI/Titles/TitleBorder/TitleBorder';
import OrderList from '@Components/Order/OrderList/OrderList';
import ServerError from '@Components/Error/ServerError/ServerError';
import PageLoading from '@Components/Loading/PageLoading/PageLoading';

import { fetchOrders } from '@API/API';

export default function Orders() {
  const {
    data: orders,
    isPending,
    error,
  } = useQuery({ queryKey: ['order'], queryFn: fetchOrders });

  if (isPending) return <PageLoading />;
  if (error) return <ServerError error={error} />;

  return (
    <>
      <TitleBorder>Last orders</TitleBorder>
      <OrderList orders={orders} />
    </>
  );
}
