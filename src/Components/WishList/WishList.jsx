import { useUserStore } from '@Store/userStore';

import TitleBorder from '@UI/Titles/TitleBorder/TitleBorder';
import ProductList from '@Components/ProductList/ProductList';
import ButtonOutline from '@UI/Buttons/ButtonOutline/ButtonOutline';

import { useEffect } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { clearWishlist } from '@API/API';

import './WishList.scss';

export default function Wishlist() {
  const queryClient = useQueryClient();
  const wishlist = useUserStore((state) => state.wishlist);

  // const { mutate } = useMutation({ mutationFn: clearWishlist });

  // const removeWishlist = async () => {
  //   await mutate(
  //     {},
  //     {
  //       onSuccess: () => {
  //         queryClient.invalidateQueries(['wishlist']);
  //       },
  //     }
  //   );
  // };

  useEffect(() => {
    console.log(wishlist);
  });

  return (
    <div className="wishlist">
      <TitleBorder>Wishlist</TitleBorder>
      <ProductList products={wishlist} />
      {!!wishlist?.length && <ButtonOutline>Remove all</ButtonOutline>}
    </div>
  );
}
