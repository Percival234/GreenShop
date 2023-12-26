import Card from '@Components/Card/Card';
// import Loading from '@Components/Loading/Loading';
import Empty from '@Components/Empty/Empty';

export default function ProductsList() {
  const products = [];

  // if (loading) return <Loading />;
  // if (error) return <h2>Error</h2>;
  if (products.length === 0) return <Empty message="There are no products in this category" />;

  return (
    <div className="products__list">
      {products.map((product) => {
        return <Card key={product.id} product={product} />;
      })}
    </div>
  );
}
