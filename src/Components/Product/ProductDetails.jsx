import { FiInfo } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import Empty from '@Components/Empty/Empty';
import Error from '@Components/Error/Error';
import TitleItem from '@UI/Titles/TitleItem/TitleItem';
import LocalLoading from '@Components/Loading/LocalLoading/LocalLoading';
import { fetchDetails } from '@API/API';

export default function ProductDetails() {
  const { productId } = useParams();
  const {
    data: details,
    isPending,
    isError,
    error,
  } = useQuery({ queryKey: ['details', productId], queryFn: () => fetchDetails(productId) });

  if (isPending) return <LocalLoading />;
  if (isError) return <Error error={error} />;
  if (!details?.length) return <Empty Icon={<FiInfo />} text="No details" />;

  return (
    <div className="product__details">
      {details.map(({ _id, title, text }) => {
        <div key={_id}>
          <TitleItem>{title}</TitleItem>
          <p>{text}</p>
        </div>;
      })}
    </div>
  );
}
