import TitleBorder from '@UI/Titles/TitleBorder/TitleBorder';
import OrderList from '@Components/Order/OrderList/OrderList';

export default function Orders() {
  return (
    <>
      <TitleBorder>Last orders</TitleBorder>
      <OrderList />
    </>
  );
}
