import { useMutation, useQueryClient } from '@tanstack/react-query';

import TitleBorder from '@UI/Titles/TitleBorder/TitleBorder';
import ProductList from '@Components/Product/ProductList/ProductList';
import ButtonOutline from '@UI/Buttons/ButtonOutline/ButtonOutline';

import { useUserStore } from '@Store/userStore';

import { clearWishlist } from '@API/API';

import './WishList.scss';

export default function Wishlist() {
  const queryClient = useQueryClient();
  const wishlist = useUserStore((state) => state.wishlist);

  const { mutate } = useMutation({ mutationFn: clearWishlist });

  const deleteWishlist = () =>
    mutate(null, {
      onSuccess: () => queryClient.invalidateQueries({ queryKey: ['wishlist'] }),
    });

  return (
    <div className="wishlist">
      <TitleBorder>Wishlist</TitleBorder>
      <ProductList products={wishlist} />
      <div className="wishlist__button">
        {!!wishlist?.length && <ButtonOutline onClick={deleteWishlist}>Remove all</ButtonOutline>}
      </div>
    </div>
  );
}
