import './WishList.scss';

// import Card from '@Compontns/Card/Card';
import ButtonInvert from '@UI/Buttons/ButtonInvert';
import TitleBorder from '@UI/Titles/TitleBorder/TitleBorder';

// перевіряти чи пустий чи ні цей список бажань

export default function Wishlist() {
  return (
    <div className="wish-list">
      <TitleBorder>Wish list</TitleBorder>
      <div className="products__list">
        {/* {plants.map((product) => {
          return (
            <Card
              key={product.id}
              id={product.id}
              productName={product.productName}
              image={product.image}
              price={product.price}
              size={product.size}
              sale={product.sale}
              description={product.shortDescription}
            />
          );
        })} */}
      </div>
      <ButtonInvert>Remove all</ButtonInvert>
    </div>
  );
}
