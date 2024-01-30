import { FiInfo } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import Empty from '@Components/Empty/Empty';
import TitleItem from '@UI/Titles/TitleItem/TitleItem';
import ServerError from '@Components/Error/ServerError/ServerError';
import LocalLoading from '@Components/Loading/LocalLoading/LocalLoading';

import { fetchDetails } from '@API/API';

import './Details.scss';

export default function Details() {
  const { productId } = useParams();
  const {
    data: details,
    isPending,
    error,
  } = useQuery({ queryKey: ['details', productId], queryFn: () => fetchDetails(productId) });

  if (isPending) return <LocalLoading />;
  if (error) return <ServerError error={error} />;
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
