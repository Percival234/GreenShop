import { FiInfo } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import Empty from '@Components/Empty/Empty';
import Error from '@Components/Error/Error';
import TitleItem from '@UI/Titles/TitleItem/TitleItem';
import LocalLoading from '@Components/Loading/LocalLoading/LocalLoading';

import { fetchDetails } from '@API/API';

import './Details.scss';

export default function Details() {
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
    <div className="details">
      {details.map(({ _id, title, description }) => (
        <div key={_id} className="details__detail">
          <TitleItem>{`${title}:`}</TitleItem>
          <p>{description}</p>
        </div>
      ))}
    </div>
  );
}
