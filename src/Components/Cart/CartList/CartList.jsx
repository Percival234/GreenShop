import './CartList.scss';

// import Empty from '@Components/Empty/Empty';
// import CartItem from '@Components/Cart/CartItem/CartItem';
import TitleBorder from '@UI/Titles/TitleBorder/TitleBorder';

export default function CartList() {
  return (
    <div className="cart-list">
      <TitleBorder>Cart</TitleBorder>
      <div className="cart-list__list">
        {/* {list.length > 0 ? (
          list.map((product) => {
            return <CartItem amount={product.amount} key={product.id} id={product.id} />;
          })
        ) : (
          <Empty message="Shopping cart is empty!" />
        )} */}
      </div>
    </div>
  );
}
