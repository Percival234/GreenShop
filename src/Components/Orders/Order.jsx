// import CheckoutList from '../../Checkout/CheckoutList';

export default function Order({ order: { _id, date, shipping, total, payment } }) {
  return (
    <div className="orders__item">
      <div className="order__info">
        <div className="order__info-item">
          Order ID
          <div className="order__info-result">{_id}</div>
        </div>
        <div className="order__info-item">
          Date
          <div className="order__info-result">15 Sep, 2021</div>
        </div>
        <div className="order__info-item">
          Payment Method
          <div className="order__info-result">Cash on delivery</div>
        </div>
      </div>
      <div className="order__details">
        <h3 className="order__title">Order Details</h3>
        {/* <CheckoutList /> */}
        <div className="order__details-item">
          Shiping<div className="order__result">$15.00</div>
        </div>
        <div className="order__details-item">
          Total<div className="order__result">$2,699.00</div>
        </div>
      </div>
    </div>
  );
}
