import './Sort.scss';

export default function Sort() {
  return (
    <div className="sort">
      <div className="sort__order">
        Short by:
        {/* <div
          className={`sort__select ${vissible ? 'active' : ''}`}
          onClick={() => setVissible(!vissible)}>
          <div className="sort__option-current sort__option">{activeOrder.name}</div>
          {vissible && (
            <div className="sort__option-menu">
              {sortingOrders.map((order, index) => {
                return (
                  <div
                    className={`sort__option ${order.name === activeOrder.name ? 'active' : ''}`}
                    key={index}
                    onClick={() => sortOrderHandler(order)}>
                    {order.name}
                  </div>
                );
              })}
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
}
